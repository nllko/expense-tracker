import { createRouter, createWebHistory } from "vue-router";
import HomePage from '../views/HomePage.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage
    },
    {
        path: '/budget',
        name: 'Budget',
        component: () => import('../views/BudgetPage.vue')
    },
    {
        path: '/planner',
        name: 'Planner',
        component: () => import('../views/PlannerPage.vue')
    },
    {
        path: '/debts',
        name: 'Debts',
        component: () => import('../views/DebtsPage.vue')
    },
    {
        path: '/settings',
        name: 'Settings',
        component: () => import('../views/SettingsPage.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router