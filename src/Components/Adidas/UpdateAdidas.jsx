import { useLoaderData } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import Swal from 'sweetalert2'

const UpdateAdidas = () => {

    const adidas = useLoaderData()
    const { _id, name, image, description, type, price, brandName, rating } = adidas;

    const handleUpdateAdidas = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const image = form.image.value;
        const brandName = form.brandName.value.toUpperCase();
        const price = form.price.value;
        const type = form.type.value;
        const rating = form.rating.value;
        const description = form.description.value;
        const product = { name, image, brandName, price, type, rating, description }

        fetch(`https://fashion-apparel-server-delta.vercel.app/products/${_id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Update adidas added successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }
            })
    }
    return (
        <div>
            <div className="bg-[#f2f2f2]">
                <Navbar></Navbar>
                <div className=' py-16 px-4 lg:px-28 max-w-screen-xl mx-auto '>
                    <h1 className='text-5xl text-[#374151] mb-8 text-center'>Update Adidas Product</h1>
                    <form onSubmit={handleUpdateAdidas} className='mt-10'>
                        <div className='flex gap-6'>
                            <div className='w-1/2'>
                                <label >
                                    <span className="text-lg pl-1">Name</span>
                                </label>
                                <label>
                                    <input type="text" name='name' defaultValue={name} className="border rounded-lg py-3 px-4 bg-white my-2 w-full" />
                                </label>
                            </div>
                            <div className='w-1/2'>
                                <label >
                                    <span className="text-lg pl-1">Brand Name</span>
                                </label>
                                <label>
                                    <input type="text" name='brandName' defaultValue={brandName} className="border rounded-lg py-3 px-4 bg-white my-2 w-full" />
                                </label>
                            </div>
                        </div>
                        <div className='flex gap-6'>
                            <div className='w-1/2'>
                                <label >
                                    <span className=" text-lg pl-1">Price</span>
                                </label>
                                <label>
                                    <input type="text" name='price' defaultValue={price} className="border rounded-lg py-3 px-4 bg-white my-2 w-full" />
                                </label>
                            </div>
                            <div className='w-1/2'>
                                <label >
                                    <span className="text-lg pl-1">Type</span>
                                </label>
                                <label>
                                    <input type="text" name='type' defaultValue={type} className="border rounded-lg py-3 px-4 bg-white my-2 w-full" />
                                </label>
                            </div>
                        </div>
                        <div className='flex gap-6'>
                            <div className='w-1/2'>
                                <label >
                                    <span className=" text-lg pl-1">Image</span>
                                </label>
                                <label>
                                    <input type="text" name='image' defaultValue={image} className="border rounded-lg py-3 px-4 bg-white my-2 w-full" />
                                </label>
                            </div>
                            <div className='w-1/2'>
                                <label >
                                    <span className=" text-lg pl-1">Rating</span>
                                </label>
                                <label>
                                    <input type="text" name='rating' defaultValue={rating} className="border rounded-lg py-3 px-4 bg-white my-2 w-full" />
                                </label>
                            </div>
                        </div>
                        <div className='flex gap-6'>
                            <div className='w-full'>
                                <label >
                                    <span className="text-lg pl-1">Short Description</span>
                                </label>
                                <textarea className="w-full border rounded-lg py-3 px-4 bg-white my-2" name="description" defaultValue={description} id="" cols="30" rows="3"></textarea>
                            </div>
                        </div>
                        <input type="submit" value="Update Product" className='py-3 mt-4 cursor-pointer rounded-md w-full border bg-[#ed4242]  text-white text-lg font-semibold' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateAdidas;