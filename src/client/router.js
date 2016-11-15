import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

module.exports = new Router({
  mode: 'hash',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/home', component: require('./views/home') },
    { path: '/loading', component: require('./views/loading') },
    { path: '/switch', component: require('./views/switch') },
    { path: '/icons', component: require('./views/icons') },
    { path: '/tip', component: require('./views/tip') },
    { path: '/checkbox', component: require('./views/checkbox') },
    { path: '/radio', component: require('./views/radio') },
    { path: '/input', component: require('./views/input') },
    { path: '/button', component: require('./views/button') },
    { path: '/lightbox', component: require('./views/lightbox') },
    { path: '/grid', component: require('./views/grid') },
    { path: '*', redirect: '/home' },
  ],
})
