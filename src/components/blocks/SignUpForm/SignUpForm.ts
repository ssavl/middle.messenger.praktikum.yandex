import Block from '../../../modules/Block';
import tmpl from './SignUpForm.hbs';

// Components
import Button from '../../blocks/Button'
import Input from '../../blocks/Input'

// Modules
import compile from "../../../modules/Compile";

import './SignUpForm.sass'

export class SignUpForm extends Block {
    constructor(props: {
        value?: string,
        events?: {
            submit?: (e: any) => void,
        }
    }) {
        super('div', {
            value: '',
            re:  /[^a-zA-ZА-Яа-я0-9]+/g,
            error: false,
            login: '',
            password: '',
        });
    }

    onSubmit(e) {
        e.preventDefault()
        const formElement = this.element.getElementsByTagName('input')
        const formData = {}
        for (let element of formElement) {
            formData[element.name] = element.value
        }
        console.log('Input Value', formData);
        this.onFocus(e)
        this.onBlur(e)
    }

    onBlur(e) {
        console.log('onBlur')
        const errorLogin = document.getElementById('error');
        if (e.target.value.match(this.props.re)) {
            errorLogin.textContent = 'A filename cannot contain any of the following characters: \/:*?"<>|';
        } else {
            errorLogin.textContent = '';
        }
    }

    onFocus(e) {
        console.log('onFocus')
        const errorLogin = document.getElementById('error');
        if (e.target.value.match(this.props.re)) {
            errorLogin.textContent = 'A filename cannot contain any of the following characters: \/:*?"<>|';
        } else {
            errorLogin.textContent = '';
        }
    }

    protected render(): DocumentFragment {

        const SubmitButton = new Button({
            text: 'Отправить',
            class: 'Button__wrapper',
            type: 'submit',
            events: {
                click: (e: any) => this.onSubmit(e),
            },
        })

        const InputLogin = new Input( {
            id: 'InputLogin',
            placeholder: 'Login',
            name: 'login',
            type: 'text',
            value: this.props.login,
            events: {
                change: (e: any) => this.onBlur(e),
                click: (e : any) => this.onFocus(e),
            }
        })

        const InputPassword = new Input( {
            id: 'InputPassword',
            placeholder: 'Password',
            name: 'password',
            type: 'password',
            value: this.props.password,
            events: {
                change: (e: any) => this.onBlur(e),
                click: (e : any) => this.onFocus(e),
            }
        })

        const InputPasswordDouble = new Input( {
            id: 'InputPasswordDouble',
            placeholder: 'Password again',
            name: 'password_double',
            type: 'text',
            value: this.props.login,
            events: {
                change: (e: any) => this.onBlur(e),
                click: (e : any) => this.onFocus(e),
            }
        })

        const InputFirstName = new Input( {
            id: 'InputFirstName',
            placeholder: 'First Name',
            name: 'first_name',
            type: 'text',
            value: this.props.login,
            events: {
                change: (e: any) => this.onBlur(e),
                click: (e : any) => this.onFocus(e),
            }
        })

        const InputLastName = new Input( {
            id: 'InputLastName',
            placeholder: 'Last Name',
            name: 'last_name',
            type: 'text',
            value: this.props.login,
            events: {
                change: (e: any) => this.onBlur(e),
                click: (e : any) => this.onFocus(e),
            }
        })

        const InputEmail = new Input( {
            id: 'InputEmail',
            placeholder: 'Email',
            name: 'email',
            type: 'text',
            value: this.props.login,
            events: {
                change: (e: any) => this.onBlur(e),
                click: (e : any) => this.onFocus(e),
            }
        })

        return compile(tmpl, {
            submitButton: SubmitButton,
            inputLogin: InputLogin,
            inputPassword: InputPassword,
            inputPasswordDouble: InputPasswordDouble,
            inputFirstName: InputFirstName,
            inputLastName: InputLastName,
            inputEmail: InputEmail,

        })
    }
}