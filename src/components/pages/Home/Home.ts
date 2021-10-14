import Block from "../../../modules/Block";
import Router from "../../../modules/Router";

export class Login extends Block {
    constructor() {
        super();
    }

    protected getStateFromProps() {
        this.state = {
            email: '',
            password: '',
            onLogin: () => {
                this.setState({
                    email: (this.refs.email as HTMLInputElement).value,
                    password: (this.refs.password as HTMLInputElement).value
                });

                const router = new Router();

                router.go('/')
            }
        }
    }

     render() {
        return `<div>
                    <h1>ГЛАВНАЯ СТРАНИЦА</h1>
                    {{{ Form }}}
                </div>`;
    }
}
































// import Block from '../../../modules/Block';
// import tmpl from './Home.hbs';
//
// // Components
// import Button from '../../blocks/Button'
// import ChatItem from '../../blocks/ChatItem'
// import Input from '../../blocks/Input'
// import Form from '../../blocks/Form'
// import Navbar from "../../blocks/Navbar";
//
// // Modules
// import compile from "../../../modules/Compile";
//
// import './Home.sass'
//
// export class Home extends Block {
//  constructor() {
//      super('div');
//  }
//
//  log() {
//      console.log('!!!!')
//  }
//
//  onSubmit(e) {
//      e.preventDefault()
//      console.log('??????')
//  }
//
//  protected render(): DocumentFragment {
//
//      const navbar = new Navbar()
//
//
//      const firstButton = new Button({
//          text: 'Отправить',
//          class: 'Button__wrapper',
//          type: 'submit',
//          events: {
//              click: (e: any) => this.onSubmit(e)
//          },
//      })
//
//      const secondButton = new Button({
//          text: 'Shit!',
//          class: 'Button',
//          events: {
//              click: () => this.log()
//          },
//      })
//
//      const chatItem = new ChatItem({
//          username: 'Иван Иванов',
//          lastMessage: 'Незнаю что сказать 😅',
//          events: {
//              click: () => this.log()
//          }
//      })
//
//      const InputSearch = new Input( {
//          placeholder: 'Найти',
//          name: 'Search',
//          type: 'text'
//      })
//
//      const InputChat = new Input( {
//          placeholder: 'Написать сообщение',
//          name: 'Chat',
//          type: 'text'
//      })
//
//      const form = new Form({
//          value: 'qwe',
//      })
//
//      return compile(tmpl, {
//          firstButton: firstButton,
//          secondButton: secondButton,
//          chatItem: chatItem,
//          inputSearch: InputSearch,
//          inputChat: InputChat,
//          form: form,
//          Navbar: navbar,
//      })
//  }
// }