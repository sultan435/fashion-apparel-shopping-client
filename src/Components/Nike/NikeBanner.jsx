import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const NikeBanner = () => {
    return (
        <div>
            <div>
                <Swiper
                    spaceBetween={0}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>
                        <div className="hero lg:h-[80vh]" style={{ backgroundImage: 'url(https://i.ibb.co/hHGy3Zp/Optimized-nike-banner1-2.jpg)' }}>
                            <div className=""></div>
                            <div className="hero-content text-center">
                                <div className=" text-white">
                                    <h1 className="mb-5 text-5xl font-semibold">NEW <br /><span className='text-3xl font-medium'>ARRIVAL</span></h1>
                                    <p className="mb-5 text-6xl font-normal">UPTO <span className='text-[#ed4242]'>30%</span>OFF</p>
                                    <p className="mb-5">New stylish shoes for men</p>
                                    <button className="py-3 px-6 rounded-full bg-gray-700">SHOP COLLECTION</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="hero lg:h-[80vh]" style={{ backgroundImage: 'url(https://i.ibb.co/KLdW21Q/maxresdefault-1.jpg)' }}>
                            <div className=""></div>
                            <div className=" text-center">
                                <div className=" text-white">
                                    <h1 className="mb-5 text-5xl font-semibold">NEW <br /><span className='text-3xl font-medium'>ARRIVAL</span></h1>
                                    <p className="mb-5 text-6xl font-normal">UPTO <span className='text-[#ed4242]'>30%</span>OFF</p>
                                    <p className="mb-5">New stylish shoes for men</p>
                                    <button className="py-3 px-6 rounded-full bg-gray-700">SHOP COLLECTION</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="hero lg:h-[80vh]" style={{ backgroundImage: 'url(https://i.ibb.co/y0dc7qr/Optimized-nike-44-2.jpg)' }}>
                            <div className=""></div>
                            <div className="text-center ">
                                <div className=" text-white">
                                    <h1 className="mb-5 text-5xl font-semibold">NEW <br /><span className='text-3xl font-medium'>ARRIVAL</span></h1>
                                    <p className="mb-5 text-6xl font-normal">UPTO <span className='text-[#ed4242]'>30%</span>OFF</p>
                                    <p className="mb-5">New stylish shoes for men</p>
                                    <button className="py-3 px-6 rounded-full bg-gray-700">SHOP COLLECTION</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default NikeBanner;