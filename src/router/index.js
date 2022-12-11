import {createRouter, createWebHashHistory} from 'vue-router';
import Home from '@/components/Home.vue';
import About from '@/components/About.vue';
import Posts from '@/components/Posts.vue';

const routes = [
    {path: '/', component: Home},
    {path: '/posts', component: Posts},
    {path: '/about', component: About},
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;