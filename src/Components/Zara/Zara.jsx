import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import ZaraBanner from "./ZaraBanner";


const Zara = () => {
    const allProducts = useLoaderData()
    console.log(allProducts)
    const zaraProduct = allProducts.filter(products => products.brandName === "ZARA")
    console.log(zaraProduct)
    return (
        <div className="max-w-screen-xl mx-auto">
            <Navbar></Navbar>
            <ZaraBanner></ZaraBanner>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
                {
                    zaraProduct.map(zara => <div key={zara._id} className="bg-base-100 shadow-xl">
                        <figure className="">
                            <img src={zara.image} alt="Shoes" className="rounded-t-lg" />
                        </figure>
                        <div className="p-4 space-y-2">
                            <h2 className="text-xl font-semibold text-black">{zara.brandName}</h2>
                            <p className="font-medium">{zara.name}</p>
                            <p className="font-medium">{zara.type}</p>
                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-600" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-600" checked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-600" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-600" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-600" />
                            </div>
                            <p className="font-medium">Price: <span className="text-red-600">${zara.price}</span></p>
                            <div className="flex gap-8 pt-4">
                                <Link to={`/zaraDetails/${zara._id}`}>

                                    <button className="btn btn-primary">Details</button>
                                </Link>
                                <button className="btn btn-primary">Update</button>
                            </div>
                        </div>
                    </div>)
                }

            </div>
        </div>
    );
};

export default Zara;