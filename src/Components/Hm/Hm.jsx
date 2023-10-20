import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import HmBanner from "./HmBanner";


const Hm = () => {
    const allProducts = useLoaderData()
    console.log(allProducts)
    const hmProduct = allProducts.filter(products => products.brandName === "H&M")
    console.log(hmProduct)
    return (
        <div className="max-w-screen-xl mx-auto">
            <Navbar></Navbar>
            <HmBanner></HmBanner>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
                {
                    hmProduct.map(hm => <div key={hm._id} className="bg-base-100 shadow-xl">
                        <figure className="">
                            <img src={hm.image} alt="Shoes" className="rounded-t-lg" />
                        </figure>
                        <div className="p-4 space-y-2">
                            <h2 className="text-xl font-semibold text-black">{hm.brandName}</h2>
                            <p className="font-medium">{hm.name}</p>
                            <p className="font-medium">{hm.type}</p>
                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-600" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-600" checked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-600" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-600" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-600" />
                            </div>
                            <p className="font-medium">Price: <span className="text-red-600">${hm.price}</span></p>
                            <div className="flex gap-8 pt-4">
                                <Link to={`/hmDetails/${hm._id}`}>
                                    <button className="btn btn-primary">Details</button>
                                </Link>
                                <Link to={`/hmUpdate/${hm._id}`}>
                                    <button className="btn btn-primary">Update</button>
                                </Link>
                            </div>
                        </div>
                    </div>)
                }

            </div>
        </div>
    );
};

export default Hm;