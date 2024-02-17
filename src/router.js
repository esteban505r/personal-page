import Vue from 'vue';
import VueRouter from 'vue-router';
import VueMeta from 'vue-meta';

Vue.use( VueRouter );
Vue.use( VueMeta );

const routes = [
    {
        path: '/',
        name: 'index',
        component: () => import( './views/index' ),
    },

];

const router = new VueRouter( {
    routes,
    scrollBehavior( to, from, savedPosition ) {
        if ( to.hash ) {
            return {
                selector: to.hash,
                behavior: 'smooth'
            }
        } else if ( savedPosition ) {
            return savedPosition;
        } else {
            return {
                x: 0,
                y: 0
            }
        }
    },
    mode: 'history'
} );

export default router;
