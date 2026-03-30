import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import FindRoomMate from "../pages/FindRoomMate";
import BrowseListings from "../pages/BrowseListings";
import MyListings from "../pages/MyListings";
import Login from "../pages/Login";
import Register from "../pages/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children:[
        {
            index: true,
            Component: Home
        },
        {
            path: '/login',
            Component: Login
        },
        {
            path: '/register',
            Component: Register
        },
        {
            path: '/find_roommate',
            Component: FindRoomMate
        },
        {
            path: '/browse_listings',
            Component: BrowseListings
        },
        {
            path: '/my_listings',
            Component: MyListings
        }
    ]
  },
]);