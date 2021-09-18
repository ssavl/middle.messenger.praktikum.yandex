import Block from '../../../modules/Block'
import tmpl from './ChatItem.hbs'
import compile from "../../../modules/Compile";

import './ChatItem.sass'

export class ChatItem extends Block {
    constructor(props: {
        username: string,
        lastMessage: string,
        events?: {
            click: () => void },
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