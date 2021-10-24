import get from '../functions/get';
import { Props } from '../../modules/Block';

const Templator = {
    compile(tmpl: string, ctx = {}): string {
        const regExp = /{{(.*?)}}/gi;
        let innerTmpl = tmpl;
        const matches = Array.from(tmpl.matchAll(regExp))
        matches.forEach(arr => {
            const tmplValue = arr[1].trim();
            const data = get(ctx, tmplValue) as string;
            const idDate = tmplValue.includes('.time')
            let dataForTmpl
            if (idDate) {
                const date = new Date(data)
                const today = new Date()
                if (date.toDateString() === today.toDateString()) {
                    dataForTmpl = new Date(data).toLocaleTimeString().slice(0, -3)
                } else {
                    dataForTmpl = new Date(data).toLocaleDateString()
                }

            } else {
                dataForTmpl = data === undefined || data === null ? '' : data;
            }

            innerTmpl = innerTmpl.replace(new RegExp(arr[0], 'gi'), dataForTmpl);
        })

        return innerTmpl;
    },

    getCompiledParent(tmpl: string, ctx: Props): Element {
        const innerTmpl = this.compile(tmpl, ctx);
        const domParser = new DOMParser();
        const htmlTmpl: Element = domParser.parseFromString(innerTmpl, 'text/html')
            .body.children[0];
        if (htmlTmpl.children.length) {
            htmlTmpl.innerHTML = '';
        }
        return htmlTmpl;
    },
    getCompiledChildren(tmpl: string, ctx: Props): HTMLCollection {
        return this.compileToHtml(tmpl, ctx).children;
    },

    compileToHtml(tmpl: string, ctx: Props): Element {
        let innerTmpl = tmpl;

        innerTmpl = this.compile(innerTmpl, ctx);

        const domParser = new DOMParser();
        const htmlTmpl: Element = domParser.parseFromString(innerTmpl, 'text/html')
            .body.children[0];
        if (ctx.components) {
            htmlTmpl.querySelectorAll('[data-component]').forEach((node) => {
                if (ctx.components !== undefined && node instanceof HTMLElement) {
                    const componentContent = ctx.components[
                        node.dataset.component as string
                        ];
                    if (componentContent !== undefined) {
                        if (Array.isArray(componentContent)) {
                            const div = document.createDocumentFragment()
                            div.append(...componentContent.map((component) => component.getContent()))
                            node.replaceWith(div);
                        } else {
                            node.replaceWith(componentContent.getContent());
                        }
                    }
                }
            });
        }

        return htmlTmpl;
    },
};

export default Templator;