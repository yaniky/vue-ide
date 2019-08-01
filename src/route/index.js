import Router from "vue-router";

const router = new Router({
    mode: "history",
    routes: [
        {
            path: "/hellow",
            component: () => import("../page/Hellow.vue")
        }
    ]
});

export default router;