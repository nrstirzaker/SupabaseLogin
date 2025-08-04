import { createRouter, createWebHistory } from 'vue-router'
//import { supabase } from '../clients/supabase'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import UnauthorizedView from '../views/UnauthorizedView.vue'
import ResetPasswordWithToken from "../views/profile/ResetPasswordWithToken.vue";

let localUser;

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/login',
            name: 'login',
            component: LoginView
        },
        {
            path: '/profile/reset-password-with-token',
            name: 'reset-password1',
            component: ResetPasswordWithToken
        },
        {
            path: '/auth/confirm',
            name: 'reset-password2',
            component: ResetPasswordWithToken
        }
    ]
});

export default router