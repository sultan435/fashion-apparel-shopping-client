import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import LevisBanner from "./LevisBanner";


const Levis = () => {
    const allProducts = useLoaderData()
    console.log(allProducts)
    const levisProduct = allProducts.filter(products => products.brandName === "LEVI'S")
    console.log(levisProduct)
    return (
        <div className="max-w-screen-xl mx-auto">
            <Navbar></Navbar>
            <LevisBanner></LevisBanner>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
                {
                    levisProduct.map(levis => <div key={levis._id} className="bg-base-100 shadow-xl">
                        <figure className="">
                            <img src={levis.image} alt="Shoes" className="rounded-t-lg" />
                        </figure>
                        <div className="p-4 space-y-2">
                            <h2 className="text-xl font-semibold text-black">{levis.brandName}</h2>
                            <p className="font-medium">{levis.name}</p>
                            <p className="font-medium">{levis.type}</p>
                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-600" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-600" checked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-600" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-600" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-600" />
                            </div>
                            <p className="font-medium">Price: <span className="text-red-600">${levis.price}</span></p>
                            <div className="flex gap-8 pt-4">
                                <Link to={`/levisDetails/${levis._id}`}>
                                    <button className="rounded-md text-lg font-medium text-white bg-[#ed4242] px-5 py-2">Details</button>
                                </Link>
                                <Link to={`/levisUpdate/${levis._id}`}>
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

export default Levis;