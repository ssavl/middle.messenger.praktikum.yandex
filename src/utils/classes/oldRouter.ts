import Block from '../../modules/Block';
import Route from './Route';
import AuthController from '../../controllers/AuthController';

export type Pathname = string

class OldRouter {
    private static __instance: OldRouter

    public routes: Route[] = []

    public history = window.history;

    private _currentRoute: Route | null = null

    private readonly _rootQuery: string = ''

    constructor(rootQuery?: string,) {
        if (OldRouter.__instance) {
            return OldRouter.__instance;
        }
        this._rootQuery = rootQuery;

        OldRouter.__instance = this;
    }

    use(pathname: Pathname, block: Block, isProtected: boolean): OldRouter {
        const route = new Route(pathname, block, {rootQuery: this._rootQuery}, isProtected);
        this.routes.push(route);
        return this
    }

    getCurrentRoute(): Route | null {
        return this._currentRoute
    }

    start(): void {
        window.onpopstate = event => {
            if (event.currentTarget !== null) {
                const target = event.currentTarget as Window
                this._onRoute(target.location.pathname);
            }
        };

        this._onRoute(window.location.pathname);
    }

    _onRoute(pathname: Pathname): void {
        const route = this.getRoute(pathname) ?? this.getRoute('errorPage') as Route;
        if (this._currentRoute) {
            this._currentRoute.leave();
        }
        if (route.isProtected) {
            AuthController.checkUserLoggedIn()
                .then(() => {
                    this._currentRoute = route;
                    route.render();
                })
                .catch(() => {
                    this.go('/login')
                })
            return
        }
        this._currentRoute = route;
        route.render();
    }


    go(pathname: Pathname): void {
        this.history.pushState({}, '', pathname);
        this._onRoute(pathname);
    }

    back(): void {
        this.history.back()
    }

    forward(): void {
        this.history.forward()
    }

    getRoute(pathname: Pathname): Route | undefined {
        return this.routes.find(route => route.pathname === pathname);
    }

}

export default OldRouter;