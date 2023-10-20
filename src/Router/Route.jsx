import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import AddProducts from "../Pages/AddProducts/AddProducts";
import Nike from "../Components/Nike/Nike";
import Adidas from "../Components/Adidas/Adidas";
import LogIn from "../Pages/LogIn/LogIn";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
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


const Route = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children:[
            {
                path: "/",
                element: <Home></Home>,
                // loader: ()=>fetch("http://localhost:5000/products")
            },
            {
                path: "/product",
                element: <PrivateRoute><AddProducts></AddProducts></PrivateRoute>
            },
            {
                path: "/cart",
                element: <MyCart></MyCart>,
               loader:()=>fetch("http://localhost:5000/store")
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
                loader: ()=>fetch("http://localhost:5000/products")
            },
            {
                path: "/nikeDetails/:id",
                element: <NikeDetails></NikeDetails>,
                loader:({params})=>fetch(`http://localhost:5000/products/${params.id}`)
            },
            {
                path: "/nikeUpdate/:id",
                element: <NikeUpdate></NikeUpdate>,
                loader:({params})=>fetch(`http://localhost:5000/products/${params.id}`)
            },
            {
                path: "/adidas",
                element: <Adidas></Adidas>,
                loader: ()=>fetch("http://localhost:5000/products")
            },
            {
                path:"/adidasDetails/:id",
                element:<AdidasDetails></AdidasDetails>,
                loader:({params})=>fetch(`http://localhost:5000/products/${params.id}`)
            },
            {
                path: "/updateAdidas/:id",
                element: <UpdateAdidas></UpdateAdidas>,
                loader:({params})=>fetch(`http://localhost:5000/products/${params.id}`)

            },
            {
                path: "/gucci",
                element: <Gucci></Gucci>,
                loader: ()=>fetch("http://localhost:5000/products")
            },
            {
                path: "/gucciDetails/:id",
                element:<GucciDetails></GucciDetails>,
                loader:({params})=>fetch(`http://localhost:5000/products/${params.id}`)
            },
            {
                path: "/gucciUpdate/:id",
                element:<GucciUpdate></GucciUpdate>,
                loader:({params})=>fetch(`http://localhost:5000/products/${params.id}`)
            },
            {
                path: "/levis",
                element: <Levis></Levis>,
                loader: ()=>fetch("http://localhost:5000/products")
            },
            {
                path: "/levisDetails/:id",
                element:<LevisDetails></LevisDetails>,
                loader:({params})=>fetch(`http://localhost:5000/products/${params.id}`)
            },
            {
                path: "/levisUpdate/:id",
                element:<LevisUpdate></LevisUpdate>,
                loader:({params})=>fetch(`http://localhost:5000/products/${params.id}`)
            },
            {
                path: "/zara",
                element: <Zara></Zara>,
                loader: ()=>fetch("http://localhost:5000/products")
            },
            {
                path: "/zaraDetails/:id",
                element: <ZaraDetails></ZaraDetails>,
                loader:({params})=>fetch(`http://localhost:5000/products/${params.id}`)
            },
            {
                path: "/zaraUpdate/:id",
                element: <ZaraUpdate></ZaraUpdate>,
                loader:({params})=>fetch(`http://localhost:5000/products/${params.id}`)
            },
            {
                path: "/hm",
                element:<Hm></Hm>,
                loader: ()=>fetch("http://localhost:5000/products")
            },
            {
                path: "/hmDetails/:id",
                element: <HmDetails></HmDetails>,
                loader:({params})=>fetch(`http://localhost:5000/products/${params.id}`) 
            },
            {
                path: "/hmUpdate/:id",
                element: <HmUpdate></HmUpdate>,
                loader:({params})=>fetch(`http://localhost:5000/products/${params.id}`) 
            }
        ]
    }
])

export default Route;