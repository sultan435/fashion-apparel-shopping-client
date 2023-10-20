import { Link, useLoaderData } from "react-router-dom";
import Header from "../../Components/Header/Header";


import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';


const Home = () => {
    // const [state, setState] = useState([])
    const allProducts = useLoaderData()
    console.log(allProducts);


    return (
        <div className="text-white">
            <Header></Header>
            <div className="bg-[#f2f2f2]">
                <div className="max-w-screen-xl mx-auto pb-20">
                    <h1 className="text-3xl text-slate-700 text-center pt-20 mb-10 font-semibold">Explore our Exclusive Brands</h1>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        <Link to="/nike">
                            <div className="shadow-md">
                                <img className="w-36 h-36 mx-auto" src={`https://i.ibb.co/PTG5hnw/Nike-Logo.png`} alt="" />
                                <h1 className="text-3xl text-slate-700 font-medium text-center mt-2">Nike</h1>
                            </div>
                        </Link>
                        <Link to="/adidas">
                            <div className="shadow-md">
                                <img className="w-36 h-36 mx-auto" src={`https://i.ibb.co/BnzQNN1/Adidas-logo.png`} alt="" />
                                <h1 className="text-3xl text-slate-700 font-medium text-center mt-2">Adidas</h1>
                            </div>
                        </Link>
                        <Link to="/gucci">
                            <div className="shadow-md">
                                <img className="w-36 h-36 mx-auto" src={`https://i.ibb.co/KFWVPks/guccilogo-1.png`} alt="" />
                                <h1 className="text-3xl text-slate-700 font-medium text-center mt-2">Gucci</h1>
                            </div>
                        </Link>
                        <Link to="/levis">
                            <div className="shadow-md">
                                <img className="w-36 h-36 mx-auto" src={`https://i.ibb.co/rHvSVqF/levislogo.png`} alt="" />
                                <h1 className="text-3xl text-slate-700 font-medium text-center mt-2">Levis</h1>
                            </div>
                        </Link>
                        <Link to="/zara">
                            <div className="shadow-md">
                                <img className="w-36 h-36 mx-auto" src={`https://i.ibb.co/qRGZbwy/zara.png`} alt="" />
                                <h1 className="text-3xl text-slate-700 font-medium text-center mt-2">Zara</h1>
                            </div>
                        </Link>
                        <Link to="/hm">
                            <div className="shadow-md">
                                <img className="w-36 h-36 " src={`https://i.ibb.co/Mnc6yVH/hmlogo-1.png`} alt="" />
                                <h1 className="text-3xl text-slate-700 font-medium text-center mt-2">H&M</h1>
                            </div>
                        </Link>
                    </div>
                </div>
                {/* <div>
                    <h1>FEATURED PRODUCTS</h1>
                    <div className="max-w-screen-xl mx-auto pb-20 grid gap-6 grid-cols-3 ">
                        {
                            allProducts.map(products => <div key={products._id} className="bg-base-100 rounded-lg shadow-xl">
                                <figure className="">
                                    <img src={products.image} alt="Shoes" className="rounded-t-lg" />
                                </figure>
                                <div className="p-4 space-y-2">

                                    <p className="font-medium">{products.name}</p>

                                    <p className="font-medium"><span className="text-red-600">${products.price}</span></p>
                                    <div className="flex gap-8 pt-4">
                                        <Link>
                                            <button className="rounded-md text-lg font-medium text-white bg-[#ed4242] px-5 py-2">Details</button>
                                        </Link>
                                        <Link>
                                            <button className="rounded-md text-lg font-medium text-white bg-[#ed4242] px-5 py-2">Update</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>)
                        }

                    </div>
                </div> */}
            </div>
            <div className="bg-[#f2f2f2]">
                <div className="max-w-screen-xl mx-auto text-center py-20">
                    <div className="text-slate-900 pb-10">
                        <h1 className="text-3xl text-slate-700 pb-4 font-semibold">FEATURED PRODUCT</h1>
                        <hr />
                        <p className="pt-4 text-slate-500">Bring called seed first of third give itself now ment</p>
                    </div>
                    <div className="grid grid-cols-1  lg:grid-cols-3 lg:gap-6">
                        <div className="shadow-md pb-10 p-4">
                            <img className="w-full" src={`https://i.ibb.co/LnGbpxf/Optimized-Untitlfgdgered.jpg`} alt="" />
                            <div className="text-slate-900 pt-4">
                                <h3>LATEST MEN SNEAKER</h3>
                                <p>$89.00</p>
                            </div>
                        </div>
                        <div className="shadow-md pb-10 p-4 ">
                            <img className="w-full" src={`https://i.ibb.co/kqJgXZs/Optimized-Untitdfaled.jpg`} alt="" />
                            <div className="text-slate-900 pt-4">
                                <h3>Kids Mini Backpack (11L)</h3>
                                <p>$46.00</p>
                            </div>
                        </div>
                        <div className="shadow-md pb-10 p-4">
                            <img className="w-full" src={`https://i.ibb.co/vX8PXCz/Optimized-Unsafdtitled.jpg`} alt="" />
                            <div className="text-slate-900 pt-4">
                                <h3>Big Kids Long-Sleeve Top</h3>
                                <p>$39.00</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="bg-[#f2f2f2]">
                <div className="max-w-screen-xl mx-auto py-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="text-center relative">
                        <img className="w-full h-[262px]" src={`https://i.ibb.co/w0KyhMr/home-V8-01.jpg`} alt="" />
                        <p className=" absolute top-16 right-52 text-[#ed4242] font-semibold text-3xl">MAN <br /> <span className="text-slate-700 font-medium">SHOES</span></p>
                    </div>
                    <div className="text-center relative">
                        <img className="w-full h-[262px]" src={`https://i.ibb.co/LP3kK4W/home-V8-02.jpg`} alt="" />
                        <p className=" absolute top-16 right-32 text-[#ed4242] font-semibold text-4xl">COLLECTION</p>
                    </div>
                </div>
            </div>
            <div className="bg-[#f8f5ee]">
                <div className="text-slate-700 max-w-screen-xl text-center mx-auto py-20">
                    <Swiper
                        spaceBetween={0}
                        slidesPerView={1}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide>
                            <div className="max-w-lg mx-auto">
                                <h2 className="text-4xl text-slate-700 pb-12 font-semibold">Customer Testimonial</h2>
                                <p className="text-slate-600">Everybody is different, which is why we offer styles for every body. Laborum fuga incidunt laboriosam voluptas iure, delectus dignissimos facilis neque nulla earum.</p>
                                <div className="flex items-center justify-center gap-5 py-8">
                                    <img className="w-20 h-20 rounded-full" src={`https://i.ibb.co/4S95mqp/author.jpg`} alt="" />
                                    <div className="text-left">
                                        <h4 className="text-xs pb-1">Petey Cruiser</h4>
                                        <p>Designer at Colorlib</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="max-w-lg mx-auto">
                                <h2 className="text-4xl text-slate-700 pb-12 font-semibold">Customer Testimonial</h2>
                                <p className="text-slate-600">Everybody is different, which is why we offer styles for every body. Laborum fuga incidunt laboriosam voluptas iure, delectus dignissimos facilis neque nulla earum.</p>
                                <div className="flex items-center justify-center gap-5 py-8">
                                    <img className="w-20 h-20 rounded-full" src={`https://i.ibb.co/4S95mqp/author.jpg`} alt="" />
                                    <div className="text-left">
                                        <h4 className="text-xs pb-1">Petey Cruiser</h4>
                                        <p>Designer at Colorlib</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="max-w-lg mx-auto">
                                <h2 className="text-4xl text-slate-700 pb-12 font-semibold">Customer Testimonial</h2>
                                <p className="text-slate-600">Everybody is different, which is why we offer styles for every body. Laborum fuga incidunt laboriosam voluptas iure, delectus dignissimos facilis neque nulla earum.</p>
                                <div className="flex items-center justify-center gap-5 py-8">
                                    <img className="w-20 h-20 rounded-full" src={`https://i.ibb.co/4S95mqp/author.jpg`} alt="" />
                                    <div className="text-left">
                                        <h4 className="text-xs pb-1">Petey Cruiser</h4>
                                        <p>Designer at Colorlib</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        
                    </Swiper>

                </div>
            </div>
        </div>
    );
};

export default Home;