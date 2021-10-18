import Block from '../../modules/Block';
import Router from '../../modules/Router';

import './styles.sass'

interface LinkProps {
    username: string;
    lastMessage: string;
    to: string;
}

export class ChatItem extends Block {
    constructor(props: LinkProps) {

        const onClick = (e: MouseEvent) => {
            const router = new Router();

            router.go(this.props.to);

            e.preventDefault();
        }

        super({...props, events: {
                click: onClick,
            }});
    }

    static getName() {
        return 'ChatItem'
    }

    render() {
        return (
            `<div class="Chat__item">
                <div class="Chat__avatar"></div>
                <div class="Chat__content-wrapper">
                    <div class="Chat__info">
                        {{username}}
                    </div>
                    <div class="Chat__content">
                        {{lastMessage}}
                    </div>
                </div>
            </div>`
        );
    }
}