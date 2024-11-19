
const ServiceCard = ({ singleService }) => {
    return (
        <div>
            <div className="card card-compact bg-base-100 w-96 shadow-xl">
                <figure>
                    <img
                        className="w-full h-[200px]"
                        src={singleService.imageUrl}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Counselor Name: {singleService.counselor}</h2>
                    <p className="font-semibold">Service Name: {singleService.serviceName}</p>
                    <p>Category: {singleService.category}</p>
                    <p>Price: {singleService.price}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-accent">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;