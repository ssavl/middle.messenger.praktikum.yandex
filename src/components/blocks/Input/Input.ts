
// Components
import Block from '../../../modules/Block'
import tmpl from './Input.hbs'
import compile from "../../../modules/Compile";

import './Input.sass'


export class Input extends Block {
    constructor(props: {
        id?: string,
        type?: string,
        placeholder?: string,
        value?: string,
        name?: string,
        events?: {
            input?: (e?: any) => void ,
            change?: (e?: any) => void   }
    }) {
        super('div', props);
    }

    componentDidUpdate(oldProps: any, newProps: any): boolean {
        return true
    }

    render() {
        return compile(tmpl, { ...this.props })
    }
}