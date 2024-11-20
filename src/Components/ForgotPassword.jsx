import { useContext, useRef } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const ForgotPassword = () => {
    const {handleForgotPassword} = useContext(AuthContext);
    const emailRef = useRef();
    

    // const handleForgotPassword = () => {
    //     const emailAddress = emailRef.current.value;
    //     if (!emailAddress) {
    //         toast("Please provide a valid email address");
    //     }

    //     else {
    //         sendPasswordResetEmail(auth, emailAddress)
    //         .then(()=>{
    //             toast("Password Reset email sent, please check your email");
    //         })
    //     }
    // }

    const resetClicked = (e) =>{
        e.preventDefault();
        const emailAddress = emailRef.current.value;
        handleForgotPassword(emailAddress);
    }

    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="card bg-gray-100 w-full max-w-lg shrink-0 p-10 rounded-3xl shadow-2xl">
                <h3 className='text-2xl font-semibold text-center'>Forgot Password don't worry</h3>
                <form className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" ref={emailRef} placeholder="email" className="input input-bordered" required />
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