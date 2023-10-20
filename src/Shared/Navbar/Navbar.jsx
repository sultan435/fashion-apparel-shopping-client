import { Link, NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { LiaSearchSolid } from "react-icons/lia";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {

    const { user, logoutUser } = useContext(AuthContext)

    const handleLogout = () => {
        logoutUser()
            .then(() => console.log("successfully logout"))

    }

    const NavLinks = <>
        <li className="">
            <NavLink to="/" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#ed1212] py-2 mr-2 px-3 rounded-lg underline underline-offset-4 " : ""}>Home
            </NavLink>
        </li>
        <li>
            <NavLink to="/product" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#ed1212] py-2 mr-2 px-3 rounded-lg underline underline-offset-4 " : ""}>Add Product
            </NavLink>
        </li>
        <li>
            <NavLink to="/cart" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#ed1212] py-2 mr-2 px-3 rounded-lg underline underline-offset-4 " : ""}>My Cart
            </NavLink>
        </li>
        <li>
            <NavLink to="/login" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#ed1212] py-2 px-3 rounded-lg underline underline-offset-4 " : ""}>Log In
            </NavLink>
        </li>
    </>
    return (
        <div>
            <div className="navbar max-w-screen-xl mx-auto py-8">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-slate-600 text-white mt-3 z-[1] p-2 shadow rounded-box w-52">
                            {NavLinks}
                        </ul>
                    </div>
                    <div className="hidden lg:block">
                        {/* <a className="text-2xl text-black">FASHION<br /><span className="">STYLE</span></a> */}
                        <img className="" src={`https://i.ibb.co/rdhHdbQ/Screenshot-6.png`} alt="" />
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
                                    <p className=" text-base lg:text-lg font-medium">{user.displayName}</p>
                                    <button className="rounded-md text-lg font-medium text-white bg-[#ed4242] py-2 px-4 lg:py-2 lg:px-5" onClick={handleLogout}>SignOut</button>
                                </div>
                                :
                                <Link to="/login"><button className="rounded-md text-white bg-[#ed4242] py-2 px-4 lg:py-2 lg:px-6">Login</button></Link>
                        }
                    </div>
                    <LiaSearchSolid className="text-4xl text-gray-800"></LiaSearchSolid>
                    <AiOutlineShoppingCart className="text-4xl text-gray-800"></AiOutlineShoppingCart>
                </div>
            </div>
        </div>
    );
};

export default Navbar;