import Dialog from './dialog.vue';
import { createApp, h } from 'vue';

export const openDialog = (opts) => {
    const { title, content, ok, cancel } = opts
    const div = document.createElement('div')
    document.body.appendChild(div)
    const close = () => {
        app.unmount(div)
        div.remove()
    }
    const app = createApp({
        render() {
            return h(Dialog, {
                visible: true, ok, cancel,
                'onUpdate:visible': (newVisible) => {
                    if (!newVisible) {
                        close()
                    }
                }
            }, { title: () => title, content: () => content })
        }
    })
    app.mount(div)
}


