import Block from '../../../modules/Block'

// Components
import tmpl from './Navbar.hbs'
import compile from "../../../modules/Compile";
import Button from "../../blocks/Button";
import {render} from "../../../index";
import Home from '../../pages/Home'
import PersonalAccount from '../../pages/PersonalAccount'
import SignUp from '../../pages/SignUp'
import Login from '../../pages/Login'


import './Navbar.sass'


export class Navbar extends Block {
    constructor() {
        super('div');
    }

    protected render(): DocumentFragment {

        const mainButton = new Button({
            text: 'Главная',
            events: {
                click: () => render('#app', new Home())
            }
        })

        const chatButton = new Button({
            text: 'Чат',
            events: {
                click: () => render('#app', new Home())
            }
        })

        const loginButton = new Button({
            text: 'Войти',
            events: {
                click: () => render('#app', new Login())
            }
        })

        const signUpButton = new Button({
            text: 'Регистрация',
            events: {
                click: () => render('#app', new SignUp())
            }
        })

        const profileButton = new Button({
            text: 'Профиль',
            events: {
                click: () => render('#app', new PersonalAccount())
            }
        })


        return compile(tmpl, {
            mainButton: mainButton,
            chatButton: chatButton,
            loginButton: loginButton,
            signUpButton: signUpButton,
            profileButton: profileButton,
        })
    }
}