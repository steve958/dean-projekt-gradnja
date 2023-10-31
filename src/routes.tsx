import { createHashRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Renovation from "./pages/Renovation";
import Construction from "./pages/Construction";
import Realestate from "./pages/Realestate";
import SingleRealestate from "./pages/SingleRealestate";

export const router = createHashRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/renovation',
                element: <Renovation />
            },
            {
                path: '/construction',
                element: <Construction />
            },
            {
                path: '/realestate',
                element: <Realestate />
            },
            {
                path: '/realestate/:id',
                element: <SingleRealestate />
            }

        ],
    },
]);
