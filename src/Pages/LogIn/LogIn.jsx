import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';

const LogIn = () => {
    const [loginError, setLoginError] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    const { loginUser, googleUser } = useContext(AuthContext)

    const location = useLocation()
    const Navigate = useNavigate()

    const handleUserLogin = e => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        setLoginError("")

        if (password.length < 6) {
            setLoginError('Must be 6 or more characters')
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setLoginError('your password should have at least one uppercase characters')
            return;
        }
        else if ((!/[$@$!%*#?&]/.test(password))) {
            setLoginError('your password should have at least one symbols characters')
            return;
        }
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setLoginError('Invalid email')
            return;
        }

        loginUser(email, password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.error(error)
                setLoginError("email do not match")
            })

    }

    const handleGoogleLogin = (googleProvider) => {
        googleUser(googleProvider)
            .then(result => {
                console.log('google login', result.user)
                Navigate(location?.state ? location.state : "/")
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="bg-[#f2f2f2] py-24 px-3">

                <div className="md:w-3/4 lg:w-1/2 mx-auto bg-white p-10 rounded-lg">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl text-[#403F3F] font-semibold">LOGIN</h1>
                    </div>
                    <form onSubmit={handleUserLogin} >
                        <div className="px-3 mt-8">

                            <div className="">
                                <label>
                                    <span className="text-[#403F3F] font-semibold ml-2">Email</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    className="border rounded-lg py-3 px-4 bg-white my-2 w-full" required />
                            </div>
                            <div className="">
                                <label >
                                    <span className="text-[#403F3F] font-semibold ml-2">Password</span>
                                </label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}

                                        name="password"
                                        placeholder="Password"
                                        className="border rounded-lg py-3 px-4 bg-white my-2 w-full" required />
                                    <span className="absolute top-6 right-7" onClick={() => setShowPassword(!showPassword)}>
                                        {
                                            showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                        }
                                    </span>
                                </div>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <button className="rounded-xl text-white text-xl font-medium bg-[#ed4242] py-3 px-6">LOGIN</button>
                            </div>

                        </div>
                    </form>
                    <div className="text-center mt-6">
                        {
                            loginError && <p className="text-red-600">{loginError}</p>
                        }
                    </div>
                    <p className="text-center">OR</p>
                    <div className="">
                        <button onClick={handleGoogleLogin} className="btn w-full border-black my-3 px-6">
                            <FaGoogle></FaGoogle>
                            Sign in with Google
                        </button>
                    </div>

                    <p className="mt-7 text-center text-[#403F3F] font-semibold">Don’t Have An Account ? <Link className="text-[#ed4242]" to="/register">Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default LogIn;