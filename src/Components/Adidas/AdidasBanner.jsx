import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const AdidasBanner = () => {
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
                        <div className="hero h-[60vh] lg:h-[80vh]" style={{ backgroundImage: 'url(https://i.ibb.co/ZTqZysz/Optimized-adidasd.jpg)' }}>
                            <div className=""></div>
                            <div className="hero-content text-center text-neutral-content">
                            <div className=" text-gray-700">
                                    <h1 className="mb-5 text-5xl font-semibold">NEW <br /><span className='text-3xl font-medium'>ARRIVAL</span></h1>
                                    <p className="mb-5 text-6xl font-normal">UPTO <span className='text-[#ed4242]'>30%</span>OFF</p>
                                    <p className="mb-5">New stylish shoes for men</p>
                                    <button className="py-3 px-6 rounded-full bg-gray-700 text-white">SHOP COLLECTION</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="hero h-[60vh] lg:h-[80vh]" style={{ backgroundImage: 'url(https://i.ibb.co/T0KTkX6/modern-blue-sports-shoe-design-close-up-fashionable-generated-by-ai-188544-19682-1.jpg)' }}>
                            <div className=""></div>
                            <div className="hero-content text-center text-neutral-content">
                            <div className=" text-white">
                                    <h1 className="mb-5 text-5xl font-semibold">NEW <br /><span className='text-3xl font-medium'>ARRIVAL</span></h1>
                                    <p className="mb-5 text-6xl font-normal">UPTO <span className='text-[#ed4242]'>30%</span>OFF</p>
                                    <p className="mb-5">New stylish shoes for men</p>
                                    <button className="py-3 px-6 rounded-full bg-gray-700 text-white">SHOP COLLECTION</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="hero h-[60vh] lg:h-[80vh]" style={{ backgroundImage: 'url(https://i.ibb.co/yWZRT3r/Optimized-full-shot-woman-training-with-ball-1.jpg)' }}>
                            <div className="hero-overlay bg-opacity-30"></div>
                            <div className="hero-content text-center text-neutral-content">
                            <div className=" text-white">
                                    <h1 className="mb-5 text-5xl font-semibold">NEW <br /><span className='text-3xl font-medium'>ARRIVAL</span></h1>
                                    <p className="mb-5 text-6xl font-normal">UPTO <span className='text-[#ed4242]'>30%</span>OFF</p>
                                    <p className="mb-5">New stylish shoes for men</p>
                                    <button className="py-3 px-6 rounded-full bg-gray-700 text-white">SHOP COLLECTION</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default AdidasBanner;