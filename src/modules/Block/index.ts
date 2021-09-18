import EventBus from '../EventBus'
import {nanoid} from 'nanoid'

interface BlockMeta<P = any> {
    tagName: string
    props: P
}

type Events = any

export default class Block <P = any> {
    static EVENTS = {
        INIT: "init",
        FLOW_CDM: "flow:component-did-mount",
        FLOW_CDU: "flow:component-did-update",
        FLOW_RENDER: "flow:render"
    } as const;

    protected id = nanoid()
    private readonly _meta: BlockMeta
    protected _element: any
    protected readonly props : P
    eventBus: () => EventBus<Events>

    public constructor(tagName: string, props?: P) {
        const eventBus = new EventBus<Events>();

        this._meta = {
            tagName,
            props
        };

        this.props = this._makePropsProxy(props || {} as P);

        this.eventBus = () => eventBus;

        this._registerEvents(eventBus);

        eventBus.emit(Block.EVENTS.INIT, this.props);
    }

    _registerEvents(eventBus) {
        eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
        eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    }

    _createResources() {
        const { tagName } = this._meta;
        this._element = this._createDocumentElement(tagName);
    }

    init() {
        this._createResources();
        this.eventBus().emit(Block.EVENTS.FLOW_CDM, this.props);
    }

    _componentDidMount() {
        this.componentDidMount();
        this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }

    componentDidMount(oldProps) {}

    _componentDidUpdate(oldProps, newProps) {
        const response = this.componentDidUpdate(oldProps, newProps);
        if (!response) {
            return;
        }
        this._render();
    }

    componentDidUpdate(oldProps, newProps) {
        return true;
    }

    setProps = nextProps => {
        if (!nextProps) {
            return;
        }

        Object.assign(this.props, nextProps);
    };

    get element() {
        return this._element;
    }

    _render() {
        const fragment = this.render();

        this._removeEvents()
        this._element!.innerHTML = ''

        this._element!.appendChild(fragment)
        this._addEvents()
    }

    protected render(): DocumentFragment {
        return new DocumentFragment()
    }

    getContent(): HTMLElement {
        return this.element!;
    }

    _makePropsProxy(props) {
        // Можно и так передать this
        // Такой способ больше не применяется с приходом ES6+
        const self = this;

        return new Proxy(props, {
            get(target, prop) {
                const value = target[prop];
                return typeof value === "function" ? value.bind(target) : value;
            },
            set(target, prop, value) {
                target[prop] = value;

                // Запускаем обновление компоненты
                // Плохой cloneDeep, в след итерации нужно заставлять добавлять cloneDeep им самим
                self.eventBus().emit(Block.EVENTS.FLOW_CDU, {...target}, target);
                return true;
            },
            deleteProperty() {
                throw new Error("Нет доступа");
            }
        });
    }

    _removeEvents() {
        const events: Record<string, () => void> = (this.props as any).events

        if (!events || !this._element) {
            return
        }

        Object.entries(events).forEach(([event, listener]) => {
            this._element!.addEventListener(event, listener)
        })
    }

    _addEvents() {
        const events: Record<string, () => void> = (this.props as any).events

        if(!events) {
            return
        }

        Object.entries(events).forEach(([event, listener]) => {
            this._element!.addEventListener(event, listener)
        })
    }

    _createDocumentElement(tagName) {
        // Можно сделать метод, который через фрагменты в цикле создает сразу несколько блоков
        return document.createElement(tagName);
    }

    show() {
        this.getContent().style.display = "block";
    }

    hide() {
        this.getContent().style.display = "none";
    }
}