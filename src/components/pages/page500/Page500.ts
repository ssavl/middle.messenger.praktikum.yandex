import Block from '../../../modules/Block'

// Components
import tmpl from './500.hbs'
import compile from "../../../modules/Compile";
import Navbar from "../../blocks/Navbar";

import './Page500.sass'


export class Page500 extends Block {
    constructor() {
        super('div');
    }

    componentDidUpdate(oldProps: any, newProps: any): boolean {
        return true
    }

    protected render(): DocumentFragment {

        const navbar = new Navbar()

        return compile(tmpl, {
            Navbar: navbar,
        })
    }
}