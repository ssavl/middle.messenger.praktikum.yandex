import Block from '../../../modules/Block';
import tmpl from './PersonalAccount.hbs';

// Components
import Button from '../../blocks/Button'
import Input from '../../blocks/Input'
import Navbar from '../../blocks/Navbar'

// Modules
import compile from "../../../modules/Compile";

import './PersonalAccount.sass'

export class PersonalAccount extends Block {
    constructor(props: {
        value?: string,
        events?: {
            submit?: (e: any) => void,
        }
    }) {
        super('div', {});
    }




    protected render(): DocumentFragment {

        const navbar = new Navbar()


        const firstButton = new Button({
            text: 'Отправить',
            class: 'Button__wrapper',
            type: 'submit',
            events: {
                click: (e: any) => _=>_
            },
        })

        const InputChat = new Input( {
            placeholder: 'Написать сообщение',
            name: 'Chat',
            type: 'text',
            events: {
                // input: (e: any) => this.onInput(e)
                change: (e: any) => _=>_,
            }
        })

        return compile(tmpl, {
            firstButton: firstButton,
            inputChat: InputChat,
            Navbar: navbar,
        })
    }
}