const anchorJS = require('anchor-js')
const Prism = require('./prism')
import VueTippy from 'vue-tippy';

window.anchors = new anchorJS()
window.Vue = require('vue')
window.Vue.use(VueTippy, { animation : 'fade'});

Vue.component('responsive-code-sample', require('./components/ResponsiveCodeSample.vue'))

const app = new Vue({
    el: '#app',
    methods: {
        onShow() {
            alert('onShow');

        },
        onShown() {
            alert('onShown');

        },
        onHide() {
            alert('onHide');

        },
        onHidden() {
            alert('onHidden');
        },
    }
})

Prism.highlightAll()
anchors.options = {placement: 'left', class: 'text-grey-dark'}
anchors.add()
