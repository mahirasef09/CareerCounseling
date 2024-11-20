import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import PageTitle from "./PageTitle";


const Register = () => {
    const { createNewUser, setUser, updateUserProfile } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = new FormData(e.target);
        const name = form.get("name");
        const photoUrl = form.get("photoUrl");
        const email = form.get("email");
        const password = form.get("password");
        const terms = e.target.terms.checked;

        const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
        if (!passwordRegex.test(password)) {
            setErrorMessage("Password must have one Uppercase, one Lowercase Letter and at least 6 characters");
            toast("Password must have one Uppercase, one Lowercase Letter and at least 6 characters");
            return;
        }

        if (!terms) {
            setErrorMessage("Plz accept our terms & conditions");
            toast("Plz accept our terms & conditions");
            return;
        }

        createNewUser(email, password)
            .then((result) => {
                const currentUser = result.user;
                setUser(currentUser);
                e.target.reset();
                toast("Registration Successful");
                updateUserProfile({ displayName: name, photoURL: photoUrl })
                    .then(() => {
                        navigate("/")
                    })
                    .catch((err) => {
                        toast(err.message)
                    })
            })
            .catch((err) => {
                toast(err.message);
                e.target.reset();
            });
    }

    return (
        <div className='min-h-screen flex justify-center items-center'>
            <PageTitle title="Career Counseling | Register"></PageTitle>
            <div className="card bg-gray-100 w-full max-w-lg shrink-0 p-10 rounded-3xl shadow-2xl">
                <h3 className='text-2xl font-semibold text-center'>Register your account</h3>
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="name" className="input input-bordered"/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name="photoUrl" placeholder="photo-url" className="input input-bordered"/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
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
                    </div>
                    <div className="form-control">
                        <label className="label justify-start gap-2 cursor-pointer">
                            <input type="checkbox" name="terms" className="checkbox" />
                            <span className="label-text text-red-600 font-semibold">Accept Our Terms & Conditions</span>
                        </label>
                    </div>
                    {
                        errorMessage && <p className='text-red-600 mx-auto my-3 p-3'>{errorMessage}</p>
                    }
                    <div className="form-control mt-6">
                        <button className="btn btn-neutral">Register</button>
                    </div>
                </form>
                <p className='text-center font-semibold'>Already Have An Account ? <Link className='text-blue-500' to={"/auth/login"}>Login</Link></p>

            </div>
        </div>
    );
};

export default Register;