import { createWebHashHistory, createRouter } from 'vue-router'
import Home from './views/home.vue'
import Doc from './views/doc.vue'

import SwitchDemo from './components/switchDemo.vue'
import ButtonDemo from './components/buttonDemo.vue'
import DialogDemo from './components/dialogDemo.vue'
import TabsDemo from './components/tabsDemo.vue'
import DocDefault from './components/docDefault.vue'

import MarkDown from './components/markdown.vue'
import info from './markdown/info.md'
import install from './markdown/install.md'
import start from './markdown/getStarted.md'

import { h } from 'vue'

const markdownComponent = (content, key) => h(MarkDown, { content, key: key })

const history = createWebHashHistory()
const router = createRouter({
    history,
    routes: [
        { path: '/', component: Home },
        {
            path: '/doc', component: Doc, children: [
                { path: '', redirect: '/doc/info' },
                { path: 'info', component: markdownComponent(info, "info") },
                { path: 'start', component: markdownComponent(start, "start") },
                { path: 'install', component: markdownComponent(install, "install") },
                { path: 'switch', component: SwitchDemo },
                { path: 'button', component: ButtonDemo },
                { path: 'dialog', component: DialogDemo },
                { path: 'tabs', component: TabsDemo },
            ]
        }
    ]
})

export default router
