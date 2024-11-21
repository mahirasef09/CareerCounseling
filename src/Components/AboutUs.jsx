
const AboutUs = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                        src="https://i.ibb.co.com/4sRbHJX/AboutUs.jpg"
                        className="max-w-lg rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">About Us</h1>
                        <p className="py-6">
                        We, Career Experts, situated at Banani, Dhaka, Bangladesh, are a leading institute offering a wide range of career counselling services for all. Our uniquely designed curriculum makes our students employable and future ready. If you have any confusion or doubt regarding any aspect of your career, we will help you with our effective career counselling services. Our professional team works harmoniously in unison, pushing the frontiers in growth and quality in imparting education.
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;