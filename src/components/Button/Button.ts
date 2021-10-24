import Block from '../../modules/Block';
import Router from '../../modules/Router';

import './styles.sass'

interface LinkProps {
    type: string;
    className: string;
    text: string;
    to: string;
}

export class Button extends Block {
    constructor({type, className, text, to}: LinkProps) {

        const onBlur = () => {
            console.log('blur')
        }

        const onClick = (e: MouseEvent) => {
            const router = new Router();

            router.go(this.props.to);

            e.preventDefault();
        }

        super({type, className, text, to, events: {
            click: onClick,
            blur : onBlur,
        }});
    }

    static getName() {
        return 'Button'
    }

    protected render(): string {
        // language=hbs
        return `<button type="button">{{text}}</button>`
    }
}