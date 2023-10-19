import Vue from 'vue';
import Vuex from 'vuex';
import App from './App';
import BootstrapVue from 'bootstrap-vue';
import router from './router';
import 'animate.css';
import VAnimateCss from 'v-animate-css';
import store from './store';
import smoothscroll from 'smoothscroll-polyfill';
smoothscroll.polyfill();

Vue.mixin({
    methods: {
        scrollToSection: function (target){
            if (this.supportsSmoothScrolling()) {
                return;
            }
            document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
        },
        supportsSmoothScrolling: function()  {
            const body = document.body;
            const scrollSave = body.style.scrollBehavior;
            body.style.scrollBehavior = 'smooth';
            const hasSmooth = getComputedStyle(body).scrollBehavior === 'smooth';
            body.style.scrollBehavior = scrollSave;
            return hasSmooth;
        },
        SmoothVerticalScrolling: function(element, time, position) {
            let eTop = element.getBoundingClientRect().top;
            let eAmt = eTop / 100;
            let curTime = 0;
            while (curTime <= time) {
                window.setTimeout(SVS_B, curTime, eAmt, position);
                curTime += time / 100;
            }
        },
        SVS_B: function(eAmt, position) {
            if (position === "center" || position === "")
            window.scrollBy(0, eAmt / 2);
            if (position === "top")
            window.scrollBy(0, eAmt);
        }
    }
});

Vue.use( Vuex );
Vue.use( VAnimateCss );
Vue.use( BootstrapVue );

Vue.config.productionTip = false;

export default new Vue( {
    store,
    router,
    render: h => h( App )
} ).$mount( '#app' );
