import Block from '../../modules/Block';

import './styles.sass'

export class LoginPage extends Block {
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
                <div class="Login">
                    <div class="Login__wrapper">
                        <div class="Login__points">
                            <div class="Login__points-item"></div>
                            <div class="Login__points-item"></div>
                            <div class="Login__points-item"></div>
                        </div>
                        {{{LoginForm}}}
                    </div>
                </div>
            </main>`
        );
    }
}