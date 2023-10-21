import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import NikeBanner from "./NikeBanner";
import { useEffect, useState } from "react";

const Nike = () => {
    const allProducts = useLoaderData()
    const [nikeData, setNikeData] = useState([])

    useEffect(() => {
        const nikeProduct = allProducts.filter(nike => nike.brandName === "NIKE")
        setNikeData(nikeProduct)
    }, [allProducts])

    return (
        <div className="max-w-screen-xl mx-auto">
            <Navbar></Navbar>
            <NikeBanner></NikeBanner>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
                {
                    nikeData.map(nike => <div key={nike._id} className="bg-base-100 shadow-xl">
                        <figure className="">
                            <img src={nike.image} alt="Shoes" className="rounded-t-lg" />
                        </figure>
                        <div className="p-4 space-y-2">
                            <h2 className="text-xl font-semibold text-black">{nike.brandName}</h2>
                            <p className="font-medium">{nike.name}</p>
                            <p className="font-medium">{nike.type}</p>
                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-600" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-600" checked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-600" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-600" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-600" />
                            </div>
                            <p className="font-medium">Price: <span className="text-red-600">${nike.price}</span></p>
                            <div className="flex gap-8 pt-4">
                                <Link to={`/nikeDetails/${nike._id}`}>
                                    <button className="rounded-md text-lg font-medium text-white bg-[#ed4242] px-5 py-2">Details</button>
                                </Link>
                                <Link to={`/nikeUpdate/${nike._id}`}>
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

export default Nike;