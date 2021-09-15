import { IButton } from './interface';

const Button = (options: IButton): string => {
    const { link, text, className, type } = options;

    if (type === 'submit') {
        return `<button class='${className}' 
                        type='${type}'>${text}</button>`;
    }
    return `<a class='${className}' 
               href='${link}'>${text}</a>`;
};

export default Button;