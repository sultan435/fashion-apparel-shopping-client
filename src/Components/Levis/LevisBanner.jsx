import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const LevisBanner = () => {
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
                        <div className="hero lg:h-[80vh]" style={{ backgroundImage: 'url(https://i.ibb.co/jgyyWCV/pexels-ray-piedra-1503009.jpg)' }}>
                            <div className="hero-overlay bg-opacity-60"></div>
                            <div className="hero-content text-center text-neutral-content">
                                <div className="max-w-md py-20">
                                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                    <button className="btn btn-primary">Get Started</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="hero lg:h-[80vh]" style={{ backgroundImage: 'url(https://i.ibb.co/sbsKqTL/pexels-aman-jakhar-1124465.jpg)' }}>
                            <div className="hero-overlay bg-opacity-60"></div>
                            <div className="hero-content text-center text-neutral-content">
                                <div className="max-w-md py-20">
                                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                    <button className="btn btn-primary">Get Started</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="hero lg:h-[80vh]" style={{ backgroundImage: 'url(https://i.ibb.co/D9rjbDj/slidev3-02.jpg)' }}>
                            <div className="hero-overlay bg-opacity-60"></div>
                            <div className="hero-content text-center text-neutral-content">
                                <div className="max-w-md py-20">
                                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                    <button className="btn btn-primary">Get Started</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default LevisBanner;