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
    {
        path: '/about',
        name: 'about',
        component: () => import( './views/about' ),
    },
    {
        path: '/journal',
        name: 'journal',
        component: () => import( './views/journal' ),
    },
    {
        path: '/journal-single-post',
        name: 'journal-single-post',
        component: () => import( './views/journal-single-post' )
    },
    {
        path: '/contacts',
        name: 'contacts',
        component: () => import( './views/contacts' )
    },
    {
        path: '/works',
        name: 'works',
        component: () => import( './views/works' )
    },
    {
        path: '/works-inside/:id',
        name: 'Work details',
        component: () => import( './views/works-inside' )
    },
    {
        path: '/search-results',
        name: 'search-results',
        component: () => import( './views/search-results' )
    },
    {
        path: '/ui',
        name: 'ui',
        component: () => import( './views/ui' )
    },
    {
        path: '/404',
        name: '404',
        component: () => import( './views/404' )
    },
    {
        path: '*',
        redirect: '/404'
    }
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
