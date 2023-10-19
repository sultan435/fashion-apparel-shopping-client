import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import AdidasBanner from "./AdidasBanner";


const Adidas = () => {
    const allProducts = useLoaderData()
    console.log(allProducts)
    const adidasProduct = allProducts.filter(products => products.brandName === "ADIDAS")
    console.log(adidasProduct)
    return (
        
        <div className="max-w-screen-xl mx-auto">
            <Navbar></Navbar>
            <AdidasBanner></AdidasBanner>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
                {
                    adidasProduct.map(adidas => <div key={adidas._id} className="bg-base-100 shadow-xl">
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

export default Adidas;