import { Link } from "react-router-dom";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaWhatsappSquare } from "react-icons/fa";


const Footer = () => {
    return (
        <div className="bg-[#f2f2f2]">
            <footer className='max-w-screen-xl mx-auto px-3 ' >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-center text-gray-900 md:text-left pt-12 lg:pt-20 pb-12">
                    <div className='mb-10'>
                        <div className='flex gap-1 justify-center md:justify-start  items-center mb-6'>
                            <div>
                                {/* <span><AiOutlineDoubleRight className='text-[#c147bb] text-3xl '></AiOutlineDoubleRight></span> */}
                            </div>
                            <div className='text-3xl font-semibold'><img src={`https://i.ibb.co/rdhHdbQ/Screenshot-6.png`} alt="" /></div>
                        </div>
                        <p className='text-xl font-medium mb-4'>Best For Shopping</p>
                        <p>Sed the used temp <br /> insididuntut labre dolore magna</p>
                        <div className='flex justify-center md:justify-start  items-center gap-4 mt-5'>
                            <span className='text-2xl'><FaFacebook></FaFacebook></span>
                            <span className='text-2xl'><FaInstagram></FaInstagram></span>
                            <span className='text-2xl'><FaTwitter></FaTwitter></span>
                            <span className='text-2xl'><FaLinkedin></FaLinkedin></span>
                            <span className='text-2xl'><FaWhatsappSquare></FaWhatsappSquare></span>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h2 className="text-2xl font-medium mb-6">Get to Know Us</h2>
                        </div>
                        <div className='space-y-5 mb-10 flex flex-col'>
                            <Link href="">About</Link>
                            <Link href="">News & Blog</Link>
                            <Link href="">Careers</Link>
                            <Link href="">Contact Us</Link>
                        </div>
                    </div>
                    <nav className='mb-10'>
                        <header className="text-2xl font-medium  mb-6">Customer Service</header>
                        <div className='flex flex-col space-y-4'>
                            <Link>Help Center</Link>
                            <Link>Accessibility</Link>
                            <Link>Feedback</Link>
                            <Link>Payment Method</Link>
                        </div>
                    </nav>
                    <div>
                        <header className="text-2xl font-medium  mb-6">Orders & Returns</header>
                        <div className='flex flex-col space-y-4'>
                            <Link>Track Order</Link>
                            <Link>Shipping & Delivery</Link>
                            <Link>Return & Exchange</Link>
                            <Link>Price Match Guarantee</Link>
                        </div>
                    </div>
                </div>
                <hr />
                <div>
                    <footer className="p-5 text-neutral-content">
                        <aside>
                            <p className='text-center text-gray-900 text-sm'>Copyright &copy; 2023 - All right reserved</p>
                        </aside>
                    </footer>
                </div>
            </footer>
        </div>
    );
};

export default Footer;