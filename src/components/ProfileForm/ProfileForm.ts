import Block from '../../modules/Block';
import Router from '../../modules/Router';

import './styles.sass'

interface ProfileFormProps {

}

export class ProfileForm extends Block {
    constructor(props: ProfileFormProps) {

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
        return 'ProfileForm'
    }

    render() {
        return (
            `<form>
                <div class="Personal-account__form">
                    <div class="Form__error" id="error"></div>
                    <div class="Personal-account__form-left">
                        <div class="Personal-account__input-wrapper">
                            {{{Input type="text" placeholder="Имя"}}}
                        </div>
                        <div class="Personal-account__input-wrapper">
                            {{{Input type="text" placeholder="Фамилия"}}}
                        </div>
                        <div class="Personal-account__input-wrapper">
                            {{{Input type="text" placeholder="Email"}}}
                        </div>
                    </div>
                    <div class="Personal-account__form-right">
                        <div class="Personal-account__input-wrapper">
                            {{{Input type="password" placeholder="Новый пароль"}}}
                        </div>
                        <div class="Personal-account__input-wrapper">
                            {{{Input type="password" placeholder="Новый пароль еще раз"}}}
                        </div>
                        <div class="Personal-account__button-wrapper">
                            {{{Button type="submit" text="Изменить"}}}
                        </div>
                    </div>
                </div>
            </form>`
        );
    }
}