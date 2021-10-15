import Block from '../../modules/Block';
import Router from '../../modules/Router';

import './styles.sass'

interface LinkProps {
    type: string;
    class: string;
    text: string;
    to: string;
}

export class Button extends Block {
    constructor(props: LinkProps) {

        const onBlur = () => {
            console.log('blur')
        }

        const onClick = (e: MouseEvent) => {
            const router = new Router();

            router.go(this.props.to);

            e.preventDefault();
        }

        super({...props, events: {
            click: onClick,
            blur : onBlur,
        }});
    }

    render() {
        return `<div class="Button__wrapper">
                    <button type="{{type}}" class="{{class}}">{{text}}</button>
                </div>`;
    }
}