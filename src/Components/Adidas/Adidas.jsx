import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import AdidasBanner from "./AdidasBanner";
import { useEffect, useState } from "react";

const Adidas = () => {
    const allProducts = useLoaderData()
    const [adidasData, setAdidasData] = useState([])

    useEffect(() => {
        const adidasProduct = allProducts.filter(products => products.brandName === "ADIDAS")
        setAdidasData(adidasProduct)
    }, [allProducts])

    return (
        <div className="max-w-screen-xl mx-auto">
            <Navbar></Navbar>
            <AdidasBanner></AdidasBanner>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
                {
                    adidasData.map(adidas => <div key={adidas._id} className="bg-base-100 shadow-xl">
                        <figure className="">
                            <img src={adidas.image} alt="Shoes" className="rounded-t-lg" />
                        </figure>
                        <div className="p-4 space-y-2">
                            <h2 className="text-xl font-semibold text-black">{adidas.brandName}</h2>
                            <p className="font-medium">{adidas.name}</p>
                            <p className="font-medium">{adidas.type}</p>
                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-600" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-600" checked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-600" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-600" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-600" />
                            </div>
                            <p className="font-medium">Price: <span className="text-red-600">${adidas.price}</span></p>
                            <div className="flex gap-8 pt-4">
                                <Link to={`/adidasDetails/${adidas._id}`}>
                                    <button className="rounded-md text-lg font-medium text-white bg-[#ed4242] px-5 py-2">Details</button>
                                </Link>
                                <Link to={`/updateAdidas/${adidas._id}`}>
                                    <button className="rounded-md text-lg font-medium text-white bg-[#ed4242] px-5 py-2">Update</button>
                                </Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Adidas;