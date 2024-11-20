import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import PageTitle from "../Components/PageTitle";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const MyProfile = () => {
    const { user, updateUserProfile, authState, setAuthState } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmitMyProfile = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photoUrl = e.target.photoUrl.value;
        updateUserProfile({ displayName: name, photoURL: photoUrl })
        .then(() => {
            setAuthState(!authState);
            toast("User Profile Updated");
            navigate("/myprofile");
            e.target.reset();
        })
        .catch((err) => {
            toast(err.message);
        })
    }
    
    return (
        <div className='space-y-3 p-5'>
            <PageTitle title="Career Counseling | My Profile"></PageTitle>
            <div>
                <div className="footer footer-center bg-primary text-primary-content p-10 rounded-3xl">
                    <aside>
                        <p className="text-2xl font-bold">
                            <span className='text-5xl'> Career Guidance for you to improve your life</span>
                            <br />
                            We provide consultancy services to encourage, manage and boost your career
                        </p>
                        <p>My Profile</p>
                    </aside>
                </div>
            </div>

            <div className='flex justify-center items-center'>
                <div className="card card-compact bg-base-100 w-96 shadow-xl">
                    <figure>
                        <img
                            className="w-full h-[200px]"
                            src={user?.photoURL}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title font-extrabold">Name: {user?.displayName}</h2>
                        <p className="text-gray-400 font-bold">Email: {user?.email}</p>
                        <form onSubmit={handleSubmitMyProfile} className="card-body">
                            <input type="text" name="name" placeholder="update-name" className="input input-bordered" />
                            <input type="text" name="photoUrl" placeholder="update-photo-url" className="input input-bordered" />
                            <button className='btn btn-accent'>Update</button>
                        </form>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default MyProfile;