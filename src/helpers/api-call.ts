import { METHODS } from '../constans/methods'

export const queryStringify = ( data: any): string => {
    if (typeof data !== 'object') {
        throw new Error ('data is not a object')
    }
    let queryString = ['?', ]
    const keys = Object.keys(data)
    for (let i of keys) {
        queryString.push(`${i}=${data[i]}&`)
    }
    return queryString.join('').slice(0, -1)
}


export class HTTPTransport {

    get = (url, options = {}) => {

        return this.request(url, {...options, method: METHODS.GET}, options.timeout);
    }

    post = (url, options = {}) => {
        return this.request(url, {...options, method: METHODS.POST}, options.timeout);
    }

    put = (url, options = {}) => {
        return this.request(url, {...options, method: METHODS.PUT}, options.timeout);
    }

    delete = (url, options = {}) => {
        return this.request(url, {...options, method: METHODS.DELETE}, options.timeout);
    }

    request = (url, options, timeout = 5000) => {

        const {headers = {}, method, data} = options;

        return new Promise((resolve, reject) => {

            if (!method) {
                reject('Метода нет');
                return;
            }

            const xhr = new XMLHttpRequest();

            const GetOrShit = (url, method) => {
                if (method === METHODS.GET && !!data) {
                    return `${url}${queryStringify(data)}`
                }
                else {
                    return url
                }
            }

            xhr.open(method, GetOrShit(url, method));

            Object.keys(headers).forEach(key => {
                xhr.setRequestHeader(key, headers[key]);
            })

            xhr.onload = function() {
                resolve(xhr);
            };

            xhr.onabort = reject;
            xhr.onerror = reject;
            xhr.timeout = timeout;
            xhr.ontimeout = reject;

            if ( METHODS.GET || !data) {
                xhr.send();
            } else {
                xhr.send(data);
            }
        });
    };
}

export const fetchWithRetry = (url : string, options : any) : any => {
    const  {retries = 5} = options

    const errorShit = () => {
        const retriesShit = retries - 1
        if (retriesShit === 0) {
            throw new Error()
        }
        return fetchWithRetry(url,{...options, retries: retriesShit})
    }

    return fetch(url, options).catch(() => errorShit())
}