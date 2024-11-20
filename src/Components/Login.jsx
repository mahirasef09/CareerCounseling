import { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import PageTitle from "./PageTitle";

const Login = () => {
    const { userLogin, signInUserWithGoogle, setUser, setUserEmail } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const emailRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        setUserEmail(email);
        const password = e.target.password.value;

        userLogin(email, password)
            .then((result) => {
                const currentUser = result.user;
                setUser(currentUser);
                toast("Login Successful");
                e.target.reset();
                navigate(location?.state ? location.state : "/");
            })
            .catch((err) => {
                toast(err.message);
                e.target.reset();
            });
    }

    const handleGoogleSignIn = () => {
        signInUserWithGoogle()
            .then(result => {
                const currentUser = result.user;
                setUser(currentUser);
                toast("Login Successful with Google");
                navigate(location?.state ? location.state : "/");
            })
            .catch(err => {
                toast(err.message);
            })
    }

    return (
        <div className='min-h-screen flex justify-center items-center'>
            <PageTitle title="Career Counseling | Login"></PageTitle>
            <div className="card bg-gray-100 w-full max-w-lg shrink-0 p-10 rounded-3xl shadow-2xl">
                <h3 className='text-2xl font-semibold text-center'>Login your account</h3>
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" ref={emailRef} placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="relative form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type={showPassword ? "text" : "password"} name="password" placeholder="password" className="input input-bordered" required />
                        <p
                            onClick={() => setShowPassword(!showPassword)}
                            className='btn btn-xs absolute right-4 top-12'>
                            {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                        </p>
                        <label className="label">
                            <button onClick={handleSubmit}>
                                <Link to={"/auth/forgotpassword"} className="label-text-alt link link-hover">Forgot password?</Link>
                            </button>

                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-neutral">Login</button>
                    </div>
                    <div className="form-control mt-6">
                        <button onClick={handleGoogleSignIn} className="btn btn-success">Login with Google</button>
                    </div>
                </form>
                <p className='text-center font-semibold'>Don’t Have An Account ? <Link className='text-blue-500' to={"/auth/register"}>Register</Link></p>
            </div>
        </div>
    );
};

export default Login;