import { useLoaderData } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";




const MyCart = () => {
    
    const cartData = useLoaderData()
    // console.log(cartData)
    

    

    return (
        <div>
            <Navbar></Navbar>
            <div className="grid grid-cols-3 gap-6 my-10 max-w-screen-xl mx-auto">

               {
                cartData.map(cart => <div key={cart._ic} className="bg-base-100 shadow-xl">
                <figure className="">
                    <img src={cart.image} alt="Shoes" className="rounded-t-lg w-full h-72" />
                </figure>
                <div className="p-4 space-y-2">
                    <h2 className="text-xl font-semibold">Brand Name : </h2>
                    <p className="font-medium">Name:{cart.name}</p>
                    <p className="font-medium">Type:{cart.type}</p>
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-600" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-600" checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-600" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-600" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-600" />
                    </div>
                    <p className="font-medium">Price: <span className="text-red-600">$</span></p>
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