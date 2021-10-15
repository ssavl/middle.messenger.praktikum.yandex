import Block from '../../modules/Block'

import './styles.sass'

interface NavbarProps {
}

export class Navbar extends Block {
    constructor(props: NavbarProps) {
        super();
    }

    render() {
        return (
            `<div class="Navbar">
                <div class="Navbar__item">
                    {{{Link text="Главная" to="/"}}}
                </div>
                <div class="Navbar__items-wrapper">
                    <div class="Navbar__item">
                        {{{Link text="Чаты" to="/"}}}
                    </div>
                    <div class="Navbar__item">
                        {{{Link text="Войти" to="/login"}}}
                    </div>
                    <div class="Navbar__item">
                        {{{Link text="Регистрация" to="/signup"}}}
                    </div>
                    <div class="Navbar__item">
                        {{{Link text="Профиль" to="/profile"}}}
                    </div>
                </div>
            </div>`
        )
    }
}