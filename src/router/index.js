import { createRouter, createWebHistory } from 'vue-router'
//import { supabase } from '../clients/supabase'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import UnauthorizedView from '../views/UnauthorizedView.vue'

let localUser;

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        }
    ]
});

export default router