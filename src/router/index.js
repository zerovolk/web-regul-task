import {createRouter, createWebHistory} from "vue-router";
import ListAndMap from "@/components/views/ListAndMap";

const routes = [
    {
        path: '/',
        name: 'ListAndMap',
        component: ListAndMap
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router