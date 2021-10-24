import Block from '../../modules/Block';

import './styles.sass'

export class Page404 extends Block {
    componentDidMount() {
        if (this.props.user) {
            this.props.router.go('/profile')
        }
    }

    render() {
        // language=hbs
        return (
            `<main>
                {{{Navbar}}}
                <div class="Error">
                    <div class="Error__wrapper">
                        <h1>Ошибка 404</h1>
                        <p>Скорее всего такой страницы нет</p>
                    </div>
                </div>
            </main>`
        );
    }
}