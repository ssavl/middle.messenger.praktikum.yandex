import HTTP from '../utils/classes/HTTP';

const http = new HTTP('https://ya-praktikum.tech/api/v2/auth')

class AuthApi {
    static  signUp(data: string): Promise<XMLHttpRequest> {
        return http.post('/signup', {
            data,
            withCredentials: true,
            headers: {
                'content-type': 'application/json',
            },
        })
    }

    static signIn(data: string): Promise<XMLHttpRequest> {
        return http.post('/signin', {
            data,
            withCredentials: true,
            headers: {
                'content-type': 'application/json',
            },
        })
    }

    static  getUser(): Promise<XMLHttpRequest> {
        return http.get('/user', {withCredentials: true})
    }

    static  logout(): Promise<XMLHttpRequest> {
        return http.post('/logout', {
            withCredentials: true, headers: {
                'content-type': 'application/json',
            },
        })
    }
}

export default AuthApi