import { useContext, useRef } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import PageTitle from "./PageTitle";

const ForgotPassword = () => {
    const {userEmail, handleForgotPassword} = useContext(AuthContext);

    const resetClicked = (e) =>{
        e.preventDefault();
        handleForgotPassword(userEmail);
    }

    return (
        <div className="min-h-screen flex justify-center items-center">
            <PageTitle title="Career Counseling | forgot password"></PageTitle>
            <div className="card bg-gray-100 w-full max-w-lg shrink-0 p-10 rounded-3xl shadow-2xl">
                <h3 className='text-2xl font-semibold text-center'>Forgot Password don't worry</h3>
                <form className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" value={userEmail} placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button onClick={resetClicked} className="btn btn-neutral">Reset</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ForgotPassword;