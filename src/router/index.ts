import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Login from '../views/Login.vue';
import '../style.css';
import Subestacoes from '../components/subestacoes/Subestacoes.vue';
import FormSubestacao from '../components/subestacoes/FormSubestacao.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path:'/login',
        name: 'Login',
        component: Login
    },
    {
        path:'/subestacao',
        name: 'Subestacoes',
        component: Subestacoes
    },
    {
        path:'/formSubestacao',
        name: 'FormSubestacao',
        component: FormSubestacao
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router;
