import { useContext } from "react";
import { RiDiscussLine } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { FaUserTie } from "react-icons/fa";

const NavBar = () => {
    const { user, userLogout } = useContext(AuthContext);

    const links = <>
        <NavLink to={"/"}><a>Home</a></NavLink>
        <NavLink to={"/myprofile"}><a>My Profile</a></NavLink>
    </>

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {
                                links
                            }
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl font-extrabold"><RiDiscussLine></RiDiscussLine>Career Counseling</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex gap-10 menu menu-horizontal px-1">
                        {
                            links
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="flex gap-2 items-center">
                        <div>
                            {
                                user && user?.email ? <div className="flex gap-2 items-center">
                                    <img className="w-16 rounded-full" src={user?.photoURL} alt="" />
                                    <p>{user?.displayName}</p>
                                </div> : <FaUserTie></FaUserTie>
                            }
                        </div>
                        <div>
                            {
                                user && user?.email ? <button onClick={userLogout} className="btn btn-neutral">Log Out</button> : <Link to={"/auth/login"} className="btn btn-info">Login</Link>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;