import AuthApi from '../api/AuthApi';
import { router } from '../index';
import store, { storeUserInitial } from '../store/Store';
import deepEncodeHTML from '../utils/deepEncodeHTML';


export type SignUpData = {
    first_name: string,
    second_name: string,
    login: string,
    email: string,
    password: string,
    phone: string
}

export type SignInData = {
    login: string,
    password: string,
}

export type UserFromServer = {
    id: number,
    first_name: string,
    second_name: string,
    login: string,
    email: string,
    phone: string
    display_name: string | null,
    avatar: string | null,
}
export type UserPassword = string


class AuthController {


    static signUp(data: SignUpData): void {
        AuthApi.signUp(JSON.stringify(deepEncodeHTML(data)))
            .then(() => {
                AuthController.getUser(() => {
                    router.go('/')
                })
            })
            .catch(_xhr => {
                const xhr = _xhr as XMLHttpRequest
                const {reason} = JSON.parse(xhr.response) as { reason: string }
                if (reason === 'Login already exists') {
                    alert(reason)
                }
            })

    }


    static getUser(successCallback?: () => void): void {
        AuthApi.getUser()
            .then(xhr => {
                store.userData = deepEncodeHTML(JSON.parse(xhr.response)) as UserFromServer
                if (successCallback === undefined) {
                    return
                }
                successCallback()
            })
            .catch(() => {
                store.userData = {...storeUserInitial.userData}
                router.go('/login')
            })
    }

    static checkUserLoggedIn(): Promise<XMLHttpRequest> {
        return AuthApi.getUser()
    }


    static signIn(data: SignInData): void {
        AuthApi.signIn(JSON.stringify(deepEncodeHTML(data)))
            .then(xhr => {
                if (xhr.response === 'OK') {
                    AuthController.getUser(() => {
                        router.go('/')
                    })
                }
            })
            .catch(_xhr => {
                const xhr = _xhr as XMLHttpRequest
                const {reason} = JSON.parse(xhr.response) as { reason: string }
                if (reason === 'User already in system') {
                    AuthController.getUser(() => {
                        router.go('/')
                    })
                } else {
                    alert(reason)
                }
            })
    }

    static logout(): void {
        AuthApi.logout()
            .then(() => {
                router.go('/login')
            })
    }

}

export default AuthController