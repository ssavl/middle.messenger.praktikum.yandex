import Block from '../../modules/Block';

import './styles.sass'

interface SignupFormProps {
    value?: string,
    events?: {
        submit?: (e: any) => void,
    }
}

export class SignupForm extends Block {
    constructor(props: SignupFormProps) {

        const onSubmit = (e) => {
            e.preventDefault()
            const formElement = this.element.getElementsByTagName('input')
            const formData = {}
            for (let element: any of formElement) {
                formData[element.name] = element.value
            }
            console.log('Input Value', formData);
            onFocus(e)
            onBlur(e)
        }

        const onBlur = (e) => {
            console.log('onBlur')
            const errorMessage = document.getElementById('error');
            if (e.target.value.match(this.props.re)) {
                errorMessage.textContent = 'A filename cannot contain any of the following characters: \/:*?"<>|';
            } else {
                errorMessage.textContent = '';
            }
        }

        const onFocus = (e) => {
            console.log('onFocus')
            const errorMessage = document.getElementById('error');
            if (e.target.value.match(this.props.re)) {
                errorMessage.textContent = 'A filename cannot contain any of the following characters: \/:*?"<>|';
            } else {
                errorMessage.textContent = '';
            }
        }

        super(  {...props,
            value: '',
            re:  /[^a-zA-ZА-Яа-я0-9]+/g,
            error: false,
            events: {
                click: onSubmit,
                blur: onBlur,
                change: onFocus,
            }
        });
    }


    static getName() {
        return 'SignupForm'
    }

    render() {
        return (
            `<form>
                <h1>Регистрация</h1>
                <div class="Sign-up__input-wrapper">
                    {{{Input placeholder="Имя" type="text"}}}
                </div>
                <div class="Sign-up__input-wrapper">
                    {{{Input placeholder="Фамилия" type="text"}}}
                </div>
                <div class="Sign-up__input-wrapper">
                    {{{Input placeholder="Логин" type="text"}}}
                </div>
                <div class="Sign-up__input-wrapper">
                    {{{Input placeholder="email" type="text"}}}
                </div>
                <div class="Sign-up__input-wrapper">
                    {{{Input placeholder="Пароль" type="password"}}}
                </div>
                <div class="Sign-up__input-wrapper">
                    {{{Input placeholder="Пароль еще раз" type="password"}}}
                </div>
                <div class="Sign-up__button-wrapper">
                    {{{Button type="submit" text="Регистрация"}}}
                    <div class="Form__error" id="error"></div>
                </div>
            </form>`
        )
    }
}