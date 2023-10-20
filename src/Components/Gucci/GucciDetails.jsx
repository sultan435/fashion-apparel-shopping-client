import { useLoaderData } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import Swal from 'sweetalert2'

const GucciDetails = () => {

    const product = useLoaderData()
    const { name, image, description, type, price, brandName } = product

    const handleDataStore = (name, type, image, brandName, price, description) => {

        const singleProducts = { name, type, image, brandName, price, description };
        console.log(singleProducts);

        fetch("http://localhost:5000/store", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(singleProducts)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.acknowledged) {
                    Swal.fire({
                        title: 'success!',
                        text: 'product cart added successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
                }
            })
    }
    return (
        <div className=" max-w-screen-xl mx-auto">
            <Navbar></Navbar>
            <div className="bg-base-100 shadow-xl">
                    <div className="grid lg:grid-cols-3 gap-6">
                        <div className="lg:col-span-2">
                            <figure className="">
                                <img src={image} alt="Shoes" className=" w-full" />
                            </figure>
                        </div>
                        <div className="px-4">
                            <h2 className="text-xl font-semibold mb-2">{brandName}</h2>
                            <p className="font-medium">{name}</p>
                            <p className="font-medium mt-8 mb-3">${price}</p>
                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-600" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-600" checked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-600" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-600" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-600" />
                            </div>
                            <div className="mt-8 ">
                                <h2 className="underline underline-offset-1">Find your size</h2>
                                <input className="py-2 px-6 w-full border rounded-lg mt-6" type="text" name="size" placeholder="Select size" id="" />
                                <div className="mt-4 flex gap-4 items-center">
                                    <button onClick={() => handleDataStore(name, type, image, brandName, price, description)} className="py-2 rounded-lg w-full border-2 border-slate-900 bg-slate-900  text-white font-semibold">Add To Bag</button>
                                    <button className="border-2 border-slate-900 py-2 px-4 rounded-lg"> Wishlist</button>
                                </div>
                                <div className="mt-8">
                                    <h2 className="">ESTIMATED DELIVERY</h2>
                                    <p className="">Oct 20 - Oct 26</p>
                                </div>
                                <div className="p-4 bg-slate-200 space-y-4 mt-14">
                                    <h3>WELCOME REWARD</h3>
                                    <p>New members enjoy $50 off on their first purchase.</p>
                                    <p className="underline underline-offset-1">Sign up for complimentary membership</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 space-y-2 grid grid-cols-3 pb-6">
                        <div className="col-span-2">
                            <h2 className="text-2xl font-semibold">{brandName}</h2>
                            <p className="font-medium mb-2">{name}</p>
                            <p className="font-medium">{description}</p>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default GucciDetails;