import Block from '../../modules/Block';

import './styles.sass'

interface FormProps {
    value?: string,
    events?: {
        submit?: (e: any) => void,
    }
}

export class Form extends Block {
    constructor(props: FormProps) {

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
        return 'Form'
    }

    render() {
        return (
            `<form>
                <div class="Form">
                    <div class="Form__input">
                        {{{Input placeholder="Message"}}}
                        <div class="Form__error" id="error"></div>
                    </div>
                    <div class="Button__wrapper">
                        {{{Button text="Отправить"}}}
                    </div>
                </div>
            </form>`
        )
    }
}