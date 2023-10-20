import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const HmBanner = () => {
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
                        <div className="hero h-[60vh] lg:h-[80vh]" style={{ backgroundImage: 'url(https://i.ibb.co/XSSSVWD/Untitledfhgfh-1.png)' }}>
                            <div className="hero-overlay bg-opacity-20"></div>
                            {/* <div className="hero-content text-center text-neutral-content">
                                <div className="max-w-md py-20">
                                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                    <button className="btn btn-primary">Get Started</button>
                                </div>
                            </div> */}
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="hero h-[60vh] lg:h-[80vh]" style={{ backgroundImage: 'url(https://i.ibb.co/jDLCBfJ/hm-ad-na-prikope-central-prague-czech-republic-europe-BK5-F39-1.jpg)' }}>
                            <div className="hero-overlay bg-opacity-20"></div>
                            <div className="hero-content text-center text-neutral-content">
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
                        <div className="hero h-[60vh] lg:h-[80vh]" style={{ backgroundImage: 'url(https://i.ibb.co/W5xFkYM/Untidsafsdftled-1.png)' }}>
                        <div className="hero-overlay bg-opacity-20"></div>
                            <div className="hero-content text-center text-neutral-content">
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

export default HmBanner;