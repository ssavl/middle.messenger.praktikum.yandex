import Block from '../../../modules/Block';
import tmpl from './FormLogin.hbs';

// Components
import Button from '../../blocks/Button'
import Input from '../../blocks/Input'

// Modules
import compile from "../../../modules/Compile";

import './FormLogin.sass'

export class FormLogin extends Block {
    constructor(props: {
        value?: string,
        events?: {
            submit?: (e: any) => void,
        }
    }) {
        super('div', {
            value: '',
            re:  /[^a-zA-ZА-Яа-я0-9]+/g,
            error: false
        });
    }

    onSubmit(e) {
        e.preventDefault()
        const formElement = this.element.getElementsByTagName('input')
        console.log(formElement[0].value);
        // console.log('Input Value', this.props.value);
    }

    onBlur() {
        const formElement = this.element.getElementsByTagName('input')
        const errorLogin = document.getElementById('errorLogin');
        const errorPassword = document.getElementById('errorPassword')
        console.log(formElement)
        if (formElement[0].value.match(this.props.re)) {
            console.log('match!')
            errorLogin.textContent = 'A filename cannot contain any of the following characters: \/:*?"<>|';
            errorPassword.textContent = 'A filename cannot contain any of the following characters: \/:*?"<>|';
        } else {
            console.log('Not match')
            errorLogin.textContent = '';
            errorPassword.textContent = '';
        }
    }

    onInput(e) {
        // e.preventDefault();
        // this.setProps({value: e.target.value})
    }

    protected render(): DocumentFragment {

        const SubmitButton = new Button({
            text: 'Отправить',
            class: 'Button__wrapper',
            type: 'submit',
            events: {
                click: (e: any) => this.onSubmit(e)
            },
        })

        const InputLogin = new Input( {
            id: 'InputLogin',
            placeholder: 'Login',
            name: 'login',
            type: 'text',
            events: {
                // input: (e: any) => this.onInput(e)
                change: (e: any) => this.onBlur(),
            }
        })

        const InputPassword = new Input( {
            id: 'InputPassword',
            placeholder: 'Password',
            name: 'password',
            type: 'password',
            events: {
                // input: (e: any) => this.onInput(e)
                change: (e: any) => this.onBlur(),
            }
        })

        return compile(tmpl, {
            submitButton: SubmitButton,
            inputLogin: InputLogin,
            inputPassword: InputPassword,
        })
    }
}