
import AboutUs from "../Components/AboutUs";
import Gallery from "../Components/Gallery";
import PageTitle from "../Components/PageTitle";
import Services from "../Components/Services";
import Slider from "../Components/Slider";

const Home = () => {
    return (
        <div className="mx-auto space-y-20 md:space-y-5">
            <PageTitle title="Career Counseling | Home"></PageTitle>
            <Slider></Slider>
            <Services></Services>
            <AboutUs></AboutUs>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;