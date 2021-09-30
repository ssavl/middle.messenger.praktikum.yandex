import Block from '../../../modules/Block'

// Components
import tmpl from './Login.hbs'
import compile from "../../../modules/Compile";
import Input from '../../blocks/Input'
import Button from "../../blocks/Button";
import FormLogin from '../../blocks/FormLogin'

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

        const formLogin = new FormLogin({
            value: 'qwe',
        })

        return compile(tmpl, {
            formLogin: formLogin,
        })
    }
}