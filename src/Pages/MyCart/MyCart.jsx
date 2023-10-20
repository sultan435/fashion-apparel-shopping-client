import { useLoaderData } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";

const MyCart = () => {

    const cartData = useLoaderData()

    return (
        <div>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 gap-6 my-10 max-w-screen-xl mx-auto">

                {
                    cartData.map(cart => <div key={cart._id} className="bg-base-100 shadow-xl">
                        <figure className="">
                            <img src={cart.image} alt="Shoes" className="rounded-t-lg w-full h-72" />
                        </figure>
                        <div className="p-4 space-y-2">
                            <h2 className="text-xl font-semibold">{cart.brandName}</h2>
                            <p className="font-medium">{cart.name}</p>
                            <p className="font-medium">{cart.type}</p>
                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-600" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-600" checked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-600" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-600" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-600" />
                            </div>
                            <p className="font-medium">{cart.price}<span className="text-red-600">$</span></p>
                            <div className="flex gap-8 pt-4">
                                <button className="btn btn-primary">Delete</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MyCart;