import Block from '../../modules/Block';

import './styles.sass'

export class SignupPage extends Block {
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
                <div class="Sign-up">
                    <div class="Sign-up__wrapper">
                        <div class="Sign-up__points">
                            <div class="Sign-up__points-item"></div>
                            <div class="Sign-up__points-item"></div>
                            <div class="Sign-up__points-item"></div>
                        </div>
                        {{{SignupForm}}}
                    </div>
                </div>
            </main>`
        );
    }
}