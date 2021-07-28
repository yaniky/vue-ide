import Router from "vue-router";

const router = new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            redirect: "/hellow"
        },
        {
            path: "/hellow",
            name: "Hellow",
            component: () => import("../page/Hellow.vue")
        }
    ]
});

export default router;