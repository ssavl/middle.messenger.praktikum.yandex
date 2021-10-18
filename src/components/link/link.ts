import Block from '../../modules/Block';
import Router from '../../modules/Router';

interface LinkProps {
    text: string;
    to: string;
}

export class Link extends Block {
    constructor(props: LinkProps) {
        const onClick = (e: MouseEvent) => {
            const router = new Router();

            router.go(this.props.to);

            e.preventDefault();
        }

        super({...props, events: { click: onClick }});
    }


    static getName() {
        return 'Link'
    }

    render() {
        // language=hbs
        return `<a href="{{to}}">{{text}}</a>`;
    }
}