import Vue from '@vue/compat/dist/vue.esm-bundler.js'
import { Navbar } from 'buefy'
Vue.use(Navbar)

document.addEventListener('DOMContentLoaded', () => {
    const el = document.getElementById('app')
    new Vue({
        el
    })
})
