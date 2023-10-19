import { Link, NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { LiaSearchSolid } from "react-icons/lia";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {

    const {user, logoutUser} = useContext(AuthContext)

    const handleLogout = () =>{
        logoutUser()
        .then(() => console.log("successfully logout"))
        
    }

    const NavLinks =<>
    <li className="mr-8"><NavLink to="/">Home</NavLink></li>
    <li className="mr-8"><NavLink to="/product">Add Product</NavLink></li>
    <li className="mr-8"><NavLink to="/cart">My Cart</NavLink></li>
    <li><NavLink to="/login">Log In</NavLink></li>
    </>
    return (
        <div>
            <div className="navbar max-w-screen-xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                           {NavLinks}
                        </ul>
                    </div>
                    <div className="text-center">
                    <a className="text-2xl">FASHION<br /><span className="">STYLE</span></a>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                       {NavLinks}
                    </ul>
                </div>
                <div className="navbar-end gap-3 text-2xl">
                    <div>
                        {
                            user ?
                            <div className="flex items-center gap-3">
                                    <p className="text-xl font-medium">{user.displayName}</p>
                                    <button className="rounded-md text-lg font-medium text-white bg-[#d628b6] py-2 px-4 lg:py-2 lg:px-5" onClick={handleLogout}>SignOut</button>
                                </div>
                                :
                                <Link to="/login"><button className="rounded-md text-white bg-[#d628b6] py-2 px-4 lg:py-2 lg:px-6">Login</button></Link>
                        }
                    </div>
                    <LiaSearchSolid></LiaSearchSolid>
                    <AiOutlineShoppingCart></AiOutlineShoppingCart>
                </div>
            </div>
        </div>
    );
};

export default Navbar;