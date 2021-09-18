import Block from '../../../modules/Block'

// Components
import tmpl from './Login.hbs'
import compile from "../../../modules/Compile";
import Input from '../../blocks/Input'
import Button from "../../blocks/Button";

import './Login.sass'


export class Login extends Block {
    constructor() {
        super('div');
    }

    onSubmit() {
        console.log(';KUBGIK')
    }

    componentDidUpdate(oldProps: any, newProps: any): boolean {
        return true
    }

    protected render(): DocumentFragment {

        const UsernameInput = new Input({
            type: 'text',
            placeholder: 'Username',
            name: 'username'
        })

        const PasswordInput = new Input({
            type: 'password',
            placeholder: 'Password',
            name: 'password'
        })

        const SubmitButton = new Button({
            text: 'Войти',
            type: 'submit',
            events: {
                submit: (e: any) => this.onSubmit(e)
            },
        })

        return compile(tmpl, {
            usernameInput: UsernameInput,
            passwordInput: PasswordInput,
            submitButton: SubmitButton,
        })
    }
}