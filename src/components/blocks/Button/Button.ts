import Block from '../../../modules/Block'
import tmpl from './Button.hbs'
import compile from "../../../modules/Compile";

import './Button.sass'


export class Button extends Block {
    constructor(props: {
        text: string,
        type?: string,
        class?: string,
        events?: {
            click?: (e: any) => void,
            submit?: (e: any) => void, }
        primary?: boolean,
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