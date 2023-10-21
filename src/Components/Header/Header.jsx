import Banner from "../../Shared/Banner/Banner";
import Navbar from "../../Shared/Navbar/Navbar";

const Header = () => {
    return (
        <div className=" min-h-screen bg-no-repeat bg-cover bg-center text-black" style={{backgroundImage: 'url(https://i.ibb.co/7NjR6ky/Untitled-3-1.png)'}}>
            <Navbar></Navbar>
            <Banner></Banner>
        </div>
    );
};

export default Header;