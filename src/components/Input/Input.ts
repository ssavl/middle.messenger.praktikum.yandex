import Block from '../../modules/Block'

import './styles.sass'

interface InputProps {
    id?: string,
    type?: string,
    placeholder?: string,
    value?: string,
    name?: string,
}

export class Input extends Block {
    constructor(props: InputProps) {

        const onBlur = (e) => {
            console.log('blur', e)
            e.preventDefault();
        }

        const onClick = (e: MouseEvent) => {
            console.log('click', e)
            e.preventDefault();
        }

        const onChange = (e) => {
            console.log('change', e)
            e.preventDefault();
        }

        super({...props, events: {
            click: onClick,
            blur : onBlur,
            change : onChange,
        }});

    }

    static getName() {
        return 'Input'
    }

    render() {
        return (
            `<input class="Input" id="{{id}}" type="{{type}}" placeholder="{{placeholder}}" name="{{name}}" value="{{value}}">`
        );
    }
}