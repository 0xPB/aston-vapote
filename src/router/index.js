import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import ProductsPage from '@/views/ProductsPage.vue';
import ContactPage from '@/views/ContactPage.vue';
import AgeVerification from '@/components/AgeVerification.vue';
import GuidePage from '@/views/GuidePage.vue';
import BrandsPage from '@/views/BrandsPage.vue';
import AgenciesPage from "@/views/AgenciesPage.vue";
import LegalNoticePage from '@/views/LegalNoticePage.vue'
import PrivacyPolicyPage from '@/views/PrivacyPolicyPage.vue'

const routes = [
    {
        path: '/',
        component: AgeVerification
    },
    {
        path: '/home',
        component: HomePage,
        meta: { requiresAgeVerification: true }
    },
    {
        path: '/produits',
        component: ProductsPage,
        meta: { requiresAgeVerification: true }
    },
    {
        path: '/contact',
        component: ContactPage,
        meta: { requiresAgeVerification: true }
    },
    {
        path: '/guide',
        component: GuidePage,
        meta: { requiresAgeVerification: true }
    },
    {
        path: '/marques',
        component: BrandsPage,
        meta: { requiresAgeVerification: true }
    },
    {
        path: '/etablissements',
        component: AgenciesPage,
        meta: { requiresAgeVerification: true }
    },
    {
        path: '/mentions-legales',
        component: LegalNoticePage,
        meta: {requiresAgeVerification: true}
    },
    {
        path: '/politique-confidentialite',
        component: PrivacyPolicyPage,
        meta: { requiresAgeVerification: true }
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

// Garde de navigation globale
router.beforeEach((to, from, next) => {
    const isAgeVerified = localStorage.getItem('isAgeVerified');

    if (to.matched.some(record => record.meta.requiresAgeVerification)) {
        if (isAgeVerified) {
            next();
        } else {
            next('/');
        }
    } else {
        next();
    }
});

export default router;
