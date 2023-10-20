import { useLoaderData } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import { useState } from "react";
import Swal from 'sweetalert2'

const MyCart = () => {

    const loadedUser = useLoaderData()
    const [users, setUsers] = useState(loadedUser)

    const handleDelete = (id) => {
        console.log(id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/store/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const deleted = users.filter(user => user._id !== id)
                            setUsers(deleted)
                        }
                    })
               
            }
        })


    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 gap-6 my-10 max-w-screen-xl mx-auto">

                {
                    users.map(cart => <div key={cart._id} className="bg-base-100 shadow-xl">
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
                            <p className="font-medium">${cart.price}</p>
                            <div className="flex gap-8 pt-4">
                                <button onClick={() => handleDelete(cart._id)} className="rounded-md text-lg font-medium text-white bg-[#ed4242] px-5 py-2">Delete</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MyCart;