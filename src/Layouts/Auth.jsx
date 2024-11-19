import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";

const Auth = () => {
    return (
        <div>
            <header>
                <NavBar></NavBar>
            </header>
            <Outlet></Outlet>
        </div>
    );
};

export default Auth;