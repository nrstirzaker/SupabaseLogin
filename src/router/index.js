import { createRouter, createWebHistory } from 'vue-router'
import { supabase } from '../client/supabase.js'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import SecretView from '../views/SecretView.vue'
import UnauthorizedView from '../views/UnauthorizedView.vue'
import ResetForgottenPassword from "../views/profile/ResetForgottenPassword.vue";

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
            path: '/profile/reset-forgotten-password',
            name: 'reset-password',
            component: ResetForgottenPassword
        },
        {
            path: '/secret',
            name: 'secret',
            meta: {requiresAuth: true},
            component: SecretView
        },
        {
            path: '/unauthorized',
            name: 'unauthorizedView',
            component: UnauthorizedView
        }

    ]
});

//getUser
async function getUser(next){
    localUser = await supabase.auth.getSession()
    if (!localUser.data.session) {
        next("/unauthorized")
    }else{
        next();
    }
}

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth){
        console.log("requires auth")
        getUser(next)
    }else{
        next()
    }
})

export default router