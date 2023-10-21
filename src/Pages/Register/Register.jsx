import { Link } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from 'sweetalert2'
import { updateProfile } from "firebase/auth";

const Register = () => {
    const [registerError, setRegisterError] = useState('')
    const [success, setSuccess] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    const { registerUser } = useContext(AuthContext)

    const handleUserRegister = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        setRegisterError("")
        setSuccess("")

        if (password.length < 6) {
            setRegisterError('Must be 6 or more characters')
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError('your password should have at least one uppercase characters')
            return;
        }
        else if ((!/[$@$!%*#?&]/.test(password))) {
            setRegisterError('your password should have at least one symbols characters')
            return;
        }

        registerUser(email, password)
            .then(result => {
                console.log(result.user)
                setSuccess('user created successfully')
                Swal.fire({
                    title: 'success!',
                    text: 'You clicked the button!',
                    icon: 'success',
                    confirmButtonText: 'ok'
                })

                updateProfile(result.user, {
                    displayName: name,
                    photoURL: "https://example.com/jane-q-user/profile.jpg"
                })
                    .then(() => console.log("profile update"))
                    .catch()

            })
            .catch(error => {
                console.error(error, "email already in used");
                setRegisterError('email already in used')
            })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="bg-[#f2f2f2] py-24 px-3">
                <div className="md:w-3/4 lg:w-1/2 mx-auto bg-white p-10 rounded-lg">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl text-[#403F3F] font-semibold">Register</h1>
                    </div>
                    <form onSubmit={handleUserRegister} >
                        <div className="px-3 mt-8">
                            <div className="">
                                <label>
                                    <span className="text-[#403F3F] font-semibold ml-2">Name</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    className="border rounded-lg py-3 px-4 bg-white my-2 w-full" required />
                            </div>
                            <div className="">
                                <label>
                                    <span className="text-[#403F3F] font-semibold ml-2">Photo URL</span>
                                </label>
                                <input
                                    type="text"
                                    name="Photo"
                                    placeholder="Photo URL"
                                    className="border rounded-lg py-3 px-4 bg-white my-2 w-full" />
                            </div>
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
                                {
                                    registerError && <p className="text-red-600 font-medium">{registerError}</p>
                                }
                                <div className="my-5">
                                    <input className="ml-2" type="checkbox" name="terms" id="" />
                                    <label >
                                        <a href="#" className="ml-2">I agree all statements in <span>Terms of service</span></a>
                                    </label>
                                </div>
                            </div>
                            <div className="form-control">
                                <button className="rounded-xl text-white text-xl font-medium bg-[#ed4242] py-3 px-6">REGISTER</button>
                            </div>
                            {
                                success && <p className="text-green-600 font-medium">{success}</p>
                            }
                        </div>
                    </form>
                    <p className="mt-7 text-center text-[#403F3F] font-semibold">Have already an account ? <Link className="text-[#ed4242]" to="/login">Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;