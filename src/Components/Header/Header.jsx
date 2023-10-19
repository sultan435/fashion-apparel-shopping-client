import Banner from "../../Shared/Banner/Banner";
import Navbar from "../../Shared/Navbar/Navbar";


const Header = () => {
    return (
        <div className=" min-h-screen bg-no-repeat bg-cover bg-center" style={{backgroundImage: 'url(https://i.ibb.co/hMM1Wsv/slidev3-03.jpg)'}}>
            <Navbar></Navbar>
            <Banner></Banner>
        </div>
    );
};

export default Header;