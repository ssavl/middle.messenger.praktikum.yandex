import user from './user';
import { Store } from '../modules/Store/store';
import Block from '../modules/Block';


export const store = new Store({
    user,
});


export function connect(stateToProps: (state: any) => any, Component: typeof Block) {
    return class WithStore extends Component {
        constructor(props: any) {
            super({...props, ...stateToProps(store.getState())});
        }

        componentDidMount(props: any) {
            super.componentDidMount(props);

            store.on('changed', () => {
                this.setProps({
                    ...this.props,
                    ...stateToProps(store.getState())
                });
            });
        }
    };
}