import { IInput } from './interface';

const Input = (options: IInput) => {
    const {
        name,
        disabled = false,
        type = 'text',
        placeholder,
        value,
        className,
    } = options;

    return `<div class='${className}'>
                <input placeholder='${placeholder}' 
                       type='${type}'
                       name='${name}'
                       disabled='${disabled}'
                       value='${value}'>
            </div>`
};

export default Input;