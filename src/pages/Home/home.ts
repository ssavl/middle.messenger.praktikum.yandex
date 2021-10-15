import Block from '../../modules/Block';

import './styles.sass'

export class HomePage extends Block {
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
                <div class="Main">
                    <div class="Chat__list">
                        <div class="Input__wrapper">
                            {{{Input placeholder="Поиск"}}}
                        </div>
                        {{{ChatItem username="Иван Иванов" lastMessage="Как дела?"}}}
                        {{{ChatItem username="Петя Жлобин" lastMessage="я не понимаю что делать"}}}
                        {{{ChatItem username="Force Awaken" lastMessage="Сегодня в 19-00"}}}
                        {{{ChatItem username="Вася" lastMessage=")))))"}}}
                        {{{ChatItem username="Павел Батищев" lastMessage="смогу завтра)"}}}
                    </div>
                    <div class="Chat__messenger">
                        <div class="Sign-up__points">
                            <div class="Sign-up__points-item"></div>
                            <div class="Sign-up__points-item"></div>
                            <div class="Sign-up__points-item"></div>
                        </div>
                        {{{Form}}}
                    </div>
                </div>
            </main>`
        );
    }
}