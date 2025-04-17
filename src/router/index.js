import { createRouter, createWebHashHistory } from 'vue-router';

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
        redirect: '/produits'
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
    },
    // Fallback vers produits pour toute URL inconnue
    {
        path: '/:catchAll(.*)',
        redirect: '/produits'
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;
