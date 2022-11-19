import {createWebHistory, createRouter} from "vue-router";
import HomeView from "@/views/HomeView";
import ProductsCatalog from "@/views/ProductsCatalog";
import confirmOrder from "@/views/NewOrder";
import ProductsCart from "@/views/ProductsCart";
import ProductView from "@/views/ProductView";
import ProfileView from "@/views/ProfileView";
import LoginView from "@/views/LoginView";
import SignUpView from "@/views/SignUpView";


const routes = [
    {
        path: "/",
        name: "HomeView",
        component: HomeView,
    },
    {
        path: "/catalog",
        name: "ProductsCatalog",
        component: ProductsCatalog,
    },
    {
        path: "/confirm-order",
        name: "confirmOrder",
        component: confirmOrder,
    },
    {
        path: "/cart",
        name: "ProductsCart",
        component: ProductsCart,
    },
    {
        path: "/product",
        name: "ProductView",
        component: ProductView,
    },
    {
        path: "/profile",
        name: "ProfileView",
        component: ProfileView,
    },
    {
        path: "/login",
        name: "LoginView",
        component: LoginView,
    },
    {
        path: "/signup",
        name: "SignUpView",
        component: SignUpView,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;