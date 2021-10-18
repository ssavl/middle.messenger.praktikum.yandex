import Block from './modules/Block';
import registerComponent from './utils/registerComponent';
import Router from './modules/Router';
import AuthController from './controllers/AuthController';


// Pages
import HomePage from './pages/Home';
import LoginPage from './pages/Login';
import SignupPage from './pages/Signup';
import ProfilePage from './pages/Profile';
import Page500 from "./pages/page500";
import Page404 from "./pages/page404";

const components = require('./components/**/index.ts') as {[key: string]: { default: typeof Block }};

Object.values(components).forEach((component) => {
    console.log('component', component)
    registerComponent(component.default);
})

AuthController.fetchUser()
    .then(() => {
        const router = new Router();

        router
            .use('/', HomePage)
            .use('/login', LoginPage)
            .use('/profile', ProfilePage)
            .use('/signup', SignupPage)
            .use('/500', Page500)
            .use('/404', Page404)
            .start()
    });