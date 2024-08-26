import React from "react"
import Demo from "@/pages/demo";
import Detail from "@/pages/demo/detail";
import Layout from "@/pages/layout";
import Movie from "@/pages/movie";
import Home from "@/pages/home";
// import My from "@/pages/my";
import NotFound from "../pages/404";
import Login from "../pages/login";
import RouterAuth from "../components/auth-router";

// 懒加载该页面
const My = React.lazy(() => import("@/pages/my"))

export const routes = [
    {
        path: "/",
        element: <RouterAuth><Layout /></RouterAuth>,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "movie",
                element: <Movie />
            },
            {
                path: "my",
                element: <My />
            },
        ]
    },
    {
        path: "/demo",
        element: <Demo />
    },
    {
        path: "/demo-detail",
        element: <Detail />
    },
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "*",
        element: <NotFound />
    }
]