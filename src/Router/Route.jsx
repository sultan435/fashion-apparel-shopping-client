import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import AddProducts from "../Pages/AddProducts/AddProducts";
import Nike from "../Components/Nike/Nike";
import Adidas from "../Components/Adidas/Adidas";
import LogIn from "../Pages/LogIn/LogIn";
import Register from "../Pages/Register/Register";
// import PrivateRoute from "./PrivateRoute";
import NikeDetails from "../Components/Nike/NikeDetails";
import MyCart from "../Pages/MyCart/MyCart";
import AdidasDetails from "../Components/Adidas/AdidasDetails";
import Gucci from "../Components/Gucci/Gucci";
import GucciDetails from "../Components/Gucci/GucciDetails";
import Levis from "../Components/Levis/Levis";
import LevisDetails from "../Components/Levis/LevisDetails";
import Zara from "../Components/Zara/Zara";
import ZaraDetails from "../Components/Zara/ZaraDetails";
import Hm from "../Components/Hm/Hm";
import HmDetails from "../Components/Hm/HmDetails";
import UpdateAdidas from "../Components/Adidas/UpdateAdidas";
import GucciUpdate from "../Components/Gucci/GucciUpdate";
import NikeUpdate from "../Components/Nike/NikeUpdate";
import HmUpdate from "../Components/Hm/HmUpdate";
import ZaraUpdate from "../Components/Zara/ZaraUpdate";
import LevisUpdate from "../Components/Levis/LevisUpdate";
import Error from "../Components/Error/Error";
import PrivateRoute from "./PrivateRoute";


const Route = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement:<Error></Error>,
        children:[
            {
                path: "/",
                element: <Home></Home>,
                loader: ()=>fetch("https://fashion-apparel-server-delta.vercel.app/products")
            },
            {
                path: "/product",
                element: <PrivateRoute><AddProducts></AddProducts></PrivateRoute>
            },
            {
                path: "/cart",
                element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
               loader:()=>fetch("https://fashion-apparel-server-delta.vercel.app/store")
            },
            {
                path: "/login",
                element: <LogIn></LogIn>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/nike",
                element: <Nike></Nike>,
                loader: ()=>fetch("https://fashion-apparel-server-delta.vercel.app/products")
            },
            {
                path: "/nikeDetails/:id",
                element: <PrivateRoute><NikeDetails></NikeDetails></PrivateRoute>,
                loader:({params})=>fetch(`https://fashion-apparel-server-delta.vercel.app/products/${params.id}`)
            },
            {
                path: "/nikeUpdate/:id",
                element: <PrivateRoute><NikeUpdate></NikeUpdate></PrivateRoute>,
                loader:({params})=>fetch(`https://fashion-apparel-server-delta.vercel.app/products/${params.id}`)
            },
            {
                path: "/adidas",
                element: <Adidas></Adidas>,
                loader: ()=>fetch("https://fashion-apparel-server-delta.vercel.app/products")
            },
            {
                path:"/adidasDetails/:id",
                element:<PrivateRoute><AdidasDetails></AdidasDetails></PrivateRoute>,
                loader:({params})=>fetch(`https://fashion-apparel-server-delta.vercel.app/products/${params.id}`)
            },
            {
                path: "/updateAdidas/:id",
                element: <PrivateRoute><UpdateAdidas></UpdateAdidas></PrivateRoute>,
                loader:({params})=>fetch(`https://fashion-apparel-server-delta.vercel.app/products/${params.id}`)

            },
            {
                path: "/gucci",
                element: <Gucci></Gucci>,
                loader: ()=>fetch("https://fashion-apparel-server-delta.vercel.app/products")
            },
            {
                path: "/gucciDetails/:id",
                element:<PrivateRoute><GucciDetails></GucciDetails></PrivateRoute>,
                loader:({params})=>fetch(`https://fashion-apparel-server-delta.vercel.app/products/${params.id}`)
            },
            {
                path: "/gucciUpdate/:id",
                element:<PrivateRoute><GucciUpdate></GucciUpdate></PrivateRoute>,
                loader:({params})=>fetch(`https://fashion-apparel-server-delta.vercel.app/products/${params.id}`)
            },
            {
                path: "/levis",
                element: <Levis></Levis>,
                loader: ()=>fetch("https://fashion-apparel-server-delta.vercel.app/products")
            },
            {
                path: "/levisDetails/:id",
                element:<PrivateRoute><LevisDetails></LevisDetails></PrivateRoute>,
                loader:({params})=>fetch(`https://fashion-apparel-server-delta.vercel.app/products/${params.id}`)
            },
            {
                path: "/levisUpdate/:id",
                element:<PrivateRoute><LevisUpdate></LevisUpdate></PrivateRoute>,
                loader:({params})=>fetch(`https://fashion-apparel-server-delta.vercel.app/products/${params.id}`)
            },
            {
                path: "/zara",
                element: <Zara></Zara>,
                loader: ()=>fetch("https://fashion-apparel-server-delta.vercel.app/products")
            },
            {
                path: "/zaraDetails/:id",
                element: <PrivateRoute><ZaraDetails></ZaraDetails></PrivateRoute>,
                loader:({params})=>fetch(`https://fashion-apparel-server-delta.vercel.app/products/${params.id}`)
            },
            {
                path: "/zaraUpdate/:id",
                element: <PrivateRoute><ZaraUpdate></ZaraUpdate></PrivateRoute>,
                loader:({params})=>fetch(`https://fashion-apparel-server-delta.vercel.app/products/${params.id}`)
            },
            {
                path: "/hm",
                element:<Hm></Hm>,
                loader: ()=>fetch("https://fashion-apparel-server-delta.vercel.app/products")
            },
            {
                path: "/hmDetails/:id",
                element: <PrivateRoute><HmDetails></HmDetails></PrivateRoute>,
                loader:({params})=>fetch(`https://fashion-apparel-server-delta.vercel.app/products/${params.id}`) 
            },
            {
                path: "/hmUpdate/:id",
                element: <PrivateRoute><HmUpdate></HmUpdate></PrivateRoute>,
                loader:({params})=>fetch(`https://fashion-apparel-server-delta.vercel.app/products/${params.id}`) 
            }
        ]
    }
])

export default Route;