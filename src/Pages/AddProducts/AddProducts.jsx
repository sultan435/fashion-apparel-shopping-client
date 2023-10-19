import Navbar from "../../Shared/Navbar/Navbar";


const AddProducts = () => {

    const handleProduct = event => {
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
        console.log(product);

        fetch("http://localhost:5000/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    alert('User added successfully')
                }
                form.reset()
            })
    }
    return (
        <div>
            <div className="bg-[#F4F3F0]">
                <Navbar></Navbar>
                <div className=' py-16 px-28 max-w-screen-xl mx-auto '>
                    <h1 className='text-5xl text-[#374151] mb-8 text-center'>Add New Product</h1>
                    <form onSubmit={handleProduct} className='mt-10'>
                        {/* form quantity row*/}
                        <div className='flex gap-6'>
                            <div className='w-1/2'>
                                <label >
                                    <span className="text-lg">Name</span>
                                </label>
                                <label>
                                    <input type="text" name='name' placeholder="Enter Name" className="border rounded-lg py-3 px-4 bg-white my-2 w-full" />
                                </label>
                            </div>
                            <div className='w-1/2'>
                                <label >
                                    <span className="text-lg">Brand Name</span>
                                </label>
                                <label>
                                    <input type="text" name='brandName' placeholder="Enter Brand Name" className="border rounded-lg py-3 px-4 bg-white my-2 w-full" />
                                </label>
                            </div>

                        </div>
                        {/* form supplier row*/}
                        <div className='flex gap-6'>
                            <div className='w-1/2'>
                                <label >
                                    <span className=" text-lg">Price</span>
                                </label>
                                <label>
                                    <input type="text" name='price' placeholder="Enter Price" className="border rounded-lg py-3 px-4 bg-white my-2 w-full" />
                                </label>
                            </div>
                            <div className='w-1/2'>
                                <label >
                                    <span className="text-lg">Type</span>
                                </label>
                                <label>
                                    <input type="text" name='type' placeholder="Enter Type" className="border rounded-lg py-3 px-4 bg-white my-2 w-full" />
                                </label>
                            </div>
                        </div>
                        {/* form category row*/}
                        <div className='flex gap-6'>
                            <div className='w-1/2'>
                                <label >
                                    <span className=" text-lg">Image</span>
                                </label>
                                <label>
                                    <input type="text" name='image' placeholder="Enter Image Url" className="border rounded-lg py-3 px-4 bg-white my-2 w-full" />
                                </label>
                            </div>
                            <div className='w-1/2'>
                                <label >
                                    <span className=" text-lg">Rating</span>
                                </label>
                                <label>
                                    <input type="text" name='rating' placeholder="Enter Rating" className="border rounded-lg py-3 px-4 bg-white my-2 w-full" />
                                </label>
                            </div>
                        </div>

                        {/* form photo url row*/}
                        <div className='flex gap-6'>
                            <div className='w-full'>
                                <label >
                                    <span className="text-lg">Short Description</span>
                                </label>
                                <textarea className="w-full border rounded-lg py-3 px-4 bg-white my-2" name="description" id="" cols="30" rows="3"></textarea>
                                {/* <label>
                                    <input type="text" name='description' placeholder="Enter Short Description" className="border rounded-lg py-3 px-4 bg-white my-2 w-full" />
                                </label> */}
                            </div>
                        </div>
                        <input type="submit" value="Add Product" className='py-2 mt-4 cursor-pointer rounded-md w-full border bg-[#D2B48C] border-[#331A15] text-[#331A15] font-semibold' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProducts;