import { IChatItem } from './interface'

const ChatItem = (options: IChatItem) => {

    const {username, lastMessage, className} = options

    return `<div class="${className}__item">
                <div class="${className}__avatar"></div>
                <div class="${className}__content-wrapper">
                    <div class="${className}__info">
                        ${username}
                    </div>
                    <div class="${className}__content">
                        ${lastMessage}
                    </div>
                </div>
            </div>`

}

export default ChatItem