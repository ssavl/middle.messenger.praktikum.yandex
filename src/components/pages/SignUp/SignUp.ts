import Block from '../../../modules/Block';
import tmpl from './SignUp.hbs';

// Components
import Button from '../../blocks/Button'
import Input from '../../blocks/Input'
import Navbar from '../../blocks/Navbar'
import SignUpForm from '../../blocks/SignUpForm'

// Modules
import compile from "../../../modules/Compile";

import './SignUp.sass'

export class SignUp extends Block {
    constructor(props: {
        value?: string,
        events?: {
            submit?: (e: any) => void,
        }
    }) {
        super('div', {});
    }



    protected render(): DocumentFragment {

        const registrationForm = new SignUpForm()


        const firstButton = new Button({
            text: 'Отправить',
            class: 'Button__wrapper',
            type: 'submit',
            events: {
                click: (e: any) => _=>_
            },
        })

        const navbar = new Navbar()


        const InputChat = new Input( {
            placeholder: 'Написать сообщение',
            name: 'Chat',
            type: 'text',
            events: {
                change: (e: any) => _=>_,
            }
        })


        return compile(tmpl, {
            firstButton: firstButton,
            inputChat: InputChat,
            Navbar: navbar,
            signUpForm: registrationForm,
        })
    }
}