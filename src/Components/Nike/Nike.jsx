import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import NikeBanner from "./NikeBanner";

const Nike = () => {
    const nikeData = useLoaderData()
    console.log(nikeData);
    const nikeProduct = nikeData.filter(nike => nike.brandName === "NIKE")
    
    return (
        <div className="max-w-screen-xl mx-auto">
            <Navbar></Navbar>
            <NikeBanner></NikeBanner>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
                {
                    nikeProduct.map(nike => <div key={nike._id} className="bg-base-100 shadow-xl">
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

                                <button className="btn btn-primary">Details</button>
                            </Link>
                            <button className="btn btn-primary">Update</button>
                        </div>
                    </div>
                </div>)
                    // nikeProduct.map(nike => <div key={nike._id} className="bg-base-100 shadow-xl">
                    //     <figure className="">
                    //         <img src={nike.image} alt="Shoes" className="rounded-t-lg w-full h-72" />
                    //     </figure>
                    //     <div className="p-4 space-y-2">
                    //         <h2 className="text-xl font-semibold">Brand Name : {nike.brandName}</h2>
                    //         <p className="font-medium">Name:{nike.name}</p>
                    //         <p className="font-medium">Type:{nike.type}</p>
                    //         <div className="rating">
                    //             <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-600" />
                    //             <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-600" checked />
                    //             <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-600" />
                    //             <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-600" />
                    //             <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-600" />
                    //         </div>
                    //         <p className="font-medium">Price: <span className="text-red-600">${nike.price}</span></p>
                    //         <div className="flex gap-8 pt-4">
                    //            <Link to={`/nikeDetails/${nike._id}`}>
                    //            <button  className="btn btn-primary">Details</button>
                    //            </Link>
                    //             <button className="btn btn-primary">Update</button>
                    //         </div>
                    //     </div>
                    // </div>)
                }

            </div>
        </div>
    );
};

export default Nike;