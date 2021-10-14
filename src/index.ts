import registerComponent from './utils/registerComponent'
import Block from "./modules/Block";

// Page
import Home from './components/pages/Home'
import Login from './components/pages/Login'
import SignUp from "./components/pages/SignUp";
import PersonalAccount from "./components/pages/PersonalAccount";
import Page404 from "./components/pages/page404";
import Page500 from "./components/pages/page500";
import Router from "./modules/Router";

const components = require('./components/**/index.ts') as {[key: string]: { default: typeof Block }};

Object.values(components).forEach((component) => {
    registerComponent(component.default)
})

const router = new Router()

router
    .use('/', Home)
    .use('/login', Login)
    .use('/signup', SignUp)
    .use('/personal-account', PersonalAccount)
    .use('/404', Page404)
    .use('/500', Page500)
    .start()


// const Page500 = require("./components/pages/page500");
// export const router = new OldRouter('#app');
//
// export function render(query: string, block: Block) {
//
//     const root = document.querySelector(query)
//
//     if (!root) {
//         throw new Error('Root not found')
//     }
//
//     root.innerHTML = ''
//     root.appendChild(block.getContent())
//
//     return root
// }
//
// // app - это класс div в корне DOM-дерева
// render('#app', new Login())