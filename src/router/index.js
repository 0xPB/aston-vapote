import { createRouter, createWebHistory } from 'vue-router';

import ProductsPage from '@/views/ProductsPage.vue';
import ContactPage from '@/views/ContactPage.vue';
import GuidePage from '@/views/GuidePage.vue';
import AgenciePage from '@/views/AgenciePage.vue';
import BrandsPage from '@/views/BrandsPage.vue';
import LegalNoticePage from '@/views/LegalNoticePage.vue';
import PrivacyPolicyPage from '@/views/PrivacyPolicyPage.vue';

const routes = [
    {
        path: '/',
        redirect: '/produits' // Redirige vers la vraie page d’accueil
    },
    {
        path: '/produits',
        name: 'Products',
        component: ProductsPage,
        meta: { requiresAgeVerification: true }
    },
    {
        path: '/contact',
        name: 'Contact',
        component: ContactPage,
        meta: { requiresAgeVerification: true }
    },
    {
        path: '/guide',
        name: 'Guide',
        component: GuidePage,
        meta: { requiresAgeVerification: true }
    },
    {
        path: '/marques',
        name: 'Brands',
        component: BrandsPage,
        meta: { requiresAgeVerification: true }
    },
    {
        path: '/mentions-legales',
        name: 'LegalNotice',
        component: LegalNoticePage,
        meta: { requiresAgeVerification: true }
    },
    {
        path: '/politique-confidentialite',
        name: 'PrivacyPolicy',
        component: PrivacyPolicyPage,
        meta: { requiresAgeVerification: true }
    },
    {
        path: '/agence',
        name: 'Agencie',
        component: AgenciePage,
        meta: { requiresAgeVerification: true }
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

// ✅ Garde de navigation
router.beforeEach((to, from, next) => {
    const isAgeVerified = localStorage.getItem('isAgeVerified') === 'true';

    if (to.meta.requiresAgeVerification && !isAgeVerified) {
        // Redirige vers /produits avec la modale
        next('/produits');
    } else {
        next();
    }
});

export default router;
