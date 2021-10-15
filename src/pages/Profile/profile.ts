import Block from '../../modules/Block';

import './styles.sass'

export class ProfilePage extends Block {
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
                <div class="Personal-account">
                    <div class="Personal-account__wrapper">
                        <div class="Personal-account__avatar-wrapper">
                            <div class="Personal-account__avatar">+</div>
                        </div>
                        {{{ProfileForm}}}
                    </div>
                </div>
            </main>`
        );
    }
}