import Block from "../Block";

// tmpl - принимаем контекст, возвращаем строку
// props - контекст
export default function compile(tmpl: (ctx: any) => string, props: any): DocumentFragment {
    const fragment = document.createElement('template')
    const components: Record<string, Block> = {}

    // Заменяю все компоненты в контексте на заглушки
    Object.entries(props).forEach(([name, value]) => {
        if(value instanceof Block) {

            // Сохраняю компоненты
            components[value.id] = value
            props[name] = `<div id='id-${value.id}'></div>`
        }
    })
    // Рендерю шаблоны
    fragment.innerHTML = tmpl(props)

    // Заменяю заглушки на компоненты
    Object.entries(components).forEach(([id, component]) => {

        // Ищем заглушку по id
        const stub = fragment.content.querySelector(`#id-${id}`)

        if (!stub) {
            return
        }
        // Заменяем заглушку на component._element
        stub.replaceWith(component.getContent())
    })
    return fragment.content
}


