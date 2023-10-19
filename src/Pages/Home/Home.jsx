import { Link } from "react-router-dom";
import Header from "../../Components/Header/Header";
// import { useState } from "react";


const Home = () => {
    // const [state, setState] = useState([])


    return (
        <div className="text-white">
            <Header></Header>
            <div className="">
                <div className="max-w-screen-xl mx-auto">
                    <h1 className="text-5xl text-black text-center pt-10 font-semibold">BRAND</h1>
                    <div className="flex gap-8 py-10  justify-between">
                        <Link to="/nike">
                            <div>
                                <img className="w-36 h-36" src={`https://i.ibb.co/Xyw1Q90/nike.png`} alt="" />
                                <h1 className="text-3xl text-black font-semibold text-center mt-2">Nike</h1>
                            </div>
                        </Link>
                        <Link to="/adidas">
                            <div>
                                <img className="w-36 h-36" src={`https://i.ibb.co/hXNnKhg/adidas.png`} alt="" />
                                <h1 className="text-3xl text-black font-semibold text-center mt-2">Adidas</h1>
                            </div>
                        </Link>
                        <Link to="/gucci">
                            <div>
                                <img className="w-36 h-36" src={`https://i.ibb.co/YL8ng2t/gucci.png`} alt="" />
                                <h1 className="text-3xl text-black font-semibold text-center mt-2">Gucci</h1>
                            </div>
                        </Link>
                        <Link to="/levis">
                            <div>
                                <img className="w-36 h-36" src={`https://i.ibb.co/1RQPxYT/levis.png`} alt="" />
                                <h1 className="text-3xl text-black font-semibold text-center mt-2">Levis</h1>
                            </div>
                        </Link>
                        <Link to="/zara">
                            <div>
                                <img className="w-36 h-36" src={`https://i.ibb.co/f48FBfW/zara.png`} alt="" />
                                <h1 className="text-3xl text-black font-semibold text-center mt-2">Zara</h1>
                            </div>
                        </Link>
                        <Link to="/hm">
                            <div>
                                <img className="w-36 h-36" src={`https://i.ibb.co/4sY91R5/h-m.png`} alt="" />
                                <h1 className="text-3xl text-black font-semibold text-center mt-2">H&M</h1>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;