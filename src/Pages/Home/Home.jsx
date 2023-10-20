import { Link } from "react-router-dom";
import Header from "../../Components/Header/Header";
// import { useState } from "react";


const Home = () => {
    // const [state, setState] = useState([])


    return (
        <div className="text-white">
            <Header></Header>
            <div className="">
                <div className="max-w-screen-xl mx-auto mb-20">
                    <h1 className="text-3xl text-gray-500 text-center pt-20 mb-10 font-semibold">Explore our Exclusive Brands</h1>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        <Link to="/nike">
                            <div>
                                <img className="w-36 h-36 mx-auto" src={`https://i.ibb.co/PTG5hnw/Nike-Logo.png`} alt="" />
                                <h1 className="text-3xl text-gray-700 font-medium text-center mt-2">Nike</h1>
                            </div>
                        </Link>
                        <Link to="/adidas">
                            <div>
                                <img className="w-36 h-36 mx-auto" src={`https://i.ibb.co/BnzQNN1/Adidas-logo.png`} alt="" />
                                <h1 className="text-3xl text-gray-700 font-medium text-center mt-2">Adidas</h1>
                            </div>
                        </Link>
                        <Link to="/gucci">
                            <div>
                                <img className="w-36 h-36 mx-auto" src={`https://i.ibb.co/KFWVPks/guccilogo-1.png`} alt="" />
                                <h1 className="text-3xl text-gray-700 font-medium text-center mt-2">Gucci</h1>
                            </div>
                        </Link>
                        <Link to="/levis">
                            <div>
                                <img className="w-36 h-36 mx-auto" src={`https://i.ibb.co/rHvSVqF/levislogo.png`} alt="" />
                                <h1 className="text-3xl text-gray-700 font-medium text-center mt-2">Levis</h1>
                            </div>
                        </Link>
                        <Link to="/zara">
                            <div>
                                <img className="w-36 h-36 mx-auto" src={`https://i.ibb.co/qRGZbwy/zara.png`} alt="" />
                                <h1 className="text-3xl text-gray-700 font-medium text-center mt-2">Zara</h1>
                            </div>
                        </Link>
                        <Link to="/hm">
                            <div>
                                <img className="w-36 h-36 " src={`https://i.ibb.co/Mnc6yVH/hmlogo-1.png`} alt="" />
                                <h1 className="text-3xl text-gray-700 font-medium text-center mt-2">H&M</h1>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;