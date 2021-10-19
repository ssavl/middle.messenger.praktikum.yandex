import Block from '../../modules/Block';

import './styles.sass'

export class Page500 extends Block {
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
                        <h1>Ошибка 500</h1>
                        <p>Что-то пошло не так..</p>
                    </div>
                </div>
            </main>`
        );
    }
}