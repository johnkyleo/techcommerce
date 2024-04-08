import { createBrowserRouter } from "react-router-dom";
import Homepage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import ProductPage from "./components/ProductPage";
import Contactpage from "./components/Contactpage";


const router = createBrowserRouter([

{
    path:'/',
    element: <Homepage/>
},
{
    path:'/about',
    element: <AboutPage/>
},
{
    path:'/products',
    element: <ProductPage/>
},
{
    path:'/contact',
    element: <Contactpage/>
}

])

export default router;