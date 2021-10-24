import queryStringify, {PlainObject} from '../queryStringify';

const METHODS = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE',
};

type Data = FormData | Record<string, unknown> | string

export type RequestOptions = {
    method?: string
    timeout?: number
    withCredentials?: boolean
    data?: Data
    headers?: Record<string, any>
    [key: string]: any
};

class HTTP {
    private url: string;

    constructor(url: string) {
        this.url = url
    }

    get = (url: string, options: RequestOptions = {}): Promise<XMLHttpRequest> =>
        this.request(
            url,
            {
                ...options,
                method: METHODS.GET,
            },
            options.timeout,
        );

    post = (url: string, options: RequestOptions = {}): Promise<XMLHttpRequest> =>
        this.request(
            url,
            {
                ...options,
                method: METHODS.POST,
            },
            options.timeout,
        );

    put = (url: string, options: RequestOptions = {}): Promise<XMLHttpRequest> =>
        this.request(
            url,
            {
                ...options,
                method: METHODS.PUT,
            },
            options.timeout,
        );

    delete = (url: string, options: RequestOptions = {}): Promise<XMLHttpRequest> =>
        this.request(
            url,
            {
                ...options,
                method: METHODS.DELETE,
            },
            options.timeout,
        );

    request = (url: string, options: RequestOptions = {}, timeout = 5000): Promise<XMLHttpRequest> => {
        const {headers = {}, method, data, withCredentials} = options;

        return new Promise((resolve, reject) => {
            if (!method) {
                reject(new Error('No method'));
                return;
            }

            const xhr = new XMLHttpRequest();
            const isGet = method === METHODS.GET;

            xhr.withCredentials = !!withCredentials

            xhr.open(method, isGet && !!data ? `${this.url + url}${queryStringify(data as PlainObject)}` : this.url + url);

            (Object.keys(headers)).forEach((key) => {
                xhr.setRequestHeader(key, headers[key]);
            });

            xhr.onload = () => {
                if (xhr.status >= 200 && xhr.status < 300) {
                    resolve(xhr);
                } else if (xhr.status >= 400 && xhr.status < 500) {
                    reject(xhr);
                } else {
                    // something else
                }
            };

            xhr.onabort = reject;
            xhr.onerror = reject;

            xhr.timeout = timeout;
            xhr.ontimeout = reject;

            if (isGet || !data) {
                xhr.send();
            } else {
                xhr.send(data as BodyInit);
            }
        });
    };
}


export default HTTP