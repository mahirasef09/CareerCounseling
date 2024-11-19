import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import Services from "../Components/Services";
import Slider from "../Components/Slider";

const Home = () => {
    return (
        <div className="mx-auto space-y-5">
            <header>
                <NavBar></NavBar>
            </header>
            <main>
                <Slider></Slider>
                <Services></Services>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Home;