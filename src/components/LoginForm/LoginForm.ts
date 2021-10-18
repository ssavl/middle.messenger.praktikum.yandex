import Block from '../../modules/Block';
import Router from '../../modules/Router';

import './styles.sass'

interface LoginFormProps {

}

export class LoginForm extends Block {
    constructor(props: LoginFormProps) {

        const onBlur = () => {
            console.log('blur')
        }

        const onClick = (e: MouseEvent) => {
            const router = new Router();

            router.go(this.props.to);

            e.preventDefault();
        }

        super({...props, events: {
                click: onClick,
                blur : onBlur,
            }});
    }


    static getName() {
        return 'LoginForm'
    }

    render() {
        return (
            `<form>
                <h1>Вход</h1>
                <div class="FormLogin__input">
                    {{{Input type="text" placeholder="Логин"}}}
                    <div class="FormLogin__error" id="errorLogin"></div>
                </div>
                <div class="FormLogin__input">
                    {{{Input type="password" placeholder="Пароль"}}}
                    <div class="FormLogin__error" id="errorPassword"></div>
                </div>
                <div id="error"></div>
                <div class="Button__wrapper">
                    {{{Button type="submit" text="Войти"}}}
                </div>
            </form>`
        );
    }
}