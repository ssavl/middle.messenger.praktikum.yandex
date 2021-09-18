import Block from "./modules/Block";
import Home from './components/pages/Home'
import Login from './components/pages/Login'

export function render(query: string, block: Block) {
    const root = document.querySelector(query)

    if (!root) {
        throw new Error('Root not found')
    }

    root.innerHTML = ''
    root.appendChild(block.getContent())

    return root
}

// app - это класс div в корне DOM-дерева
render('#app', new Home())