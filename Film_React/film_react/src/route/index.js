import DetailsMovie from "../container/HomeTemplate/DetailsMovie";
import ListMoviePage from "../container/HomeTemplate/ListMoviePage";
// import Login from "./Login"


const routeHome = [
    {
        exact: true,
        path: "/",
        component: ListMoviePage
    },
    {
        exact: false,
        path:"/detail/:id",
        component: DetailsMovie
    },
    // {
    //     exact: true,
    //     path:"/login",
    //     component: Login
    // }
]

export {routeHome}