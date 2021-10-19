import Block from '../modules/Block';
import Handlebars, { HelperOptions } from 'handlebars';

interface BlockConstructable<Props = any> {
    new(props: Props): Block;
}

export default function registerComponent<Props = any>(Component: BlockConstructable) {
    console.log('Component.name', [Component, Component.getName()])
    Handlebars.registerHelper(Component.getName(), function ({ hash: { ref, ...hash }, data }: HelperOptions) {
        console.log('hash', hash)
        console.log('data', data)
        if (!data.root.children) {
            data.root.children = {};
        }

        if (!data.root.refs) {
            data.root.refs = {};
        }

        const { children, refs } = data.root;

        const component = new Component(hash);

        children[component.id] = component;

        if (ref) {
            refs[ref] = component.getContent();
        }

        return `<div data-id="${component.id}"></div>`;
    })
}