import Block from '../../../modules/Block';
import tmpl from './Form.hbs';

// Components
import Button from '../../blocks/Button'
import Input from '../../blocks/Input'

// Modules
import compile from "../../../modules/Compile";

import './Form.sass'

export class Form extends Block {
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
        const errorMessage = document.getElementById('error');
        if (e.target.value.match(this.props.re)) {
            errorMessage.textContent = 'A filename cannot contain any of the following characters: \/:*?"<>|';
        } else {
            errorMessage.textContent = '';
        }
    }

    onFocus(e) {
        console.log('onFocus')
        const errorMessage = document.getElementById('error');
        if (e.target.value.match(this.props.re)) {
            errorMessage.textContent = 'A filename cannot contain any of the following characters: \/:*?"<>|';
        } else {
            errorMessage.textContent = '';
        }
    }

    protected render(): DocumentFragment {

        const firstButton = new Button({
            text: 'Отправить',
            class: 'Button__wrapper',
            type: 'submit',
            events: {
                click: (e: any) => this.onSubmit(e)
            },
        })


        const InputChat = new Input( {
            placeholder: 'Message',
            name: 'message',
            type: 'text',
            events: {
                change: (e: any) => this.onBlur(e),
                click: (e: any) => this.onFocus(e),
            }
        })

        return compile(tmpl, {
            firstButton: firstButton,
            inputChat: InputChat,
        })
    }
}