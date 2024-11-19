import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./counselingData.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    return (
        <div className="space-y-5 p-3">
            <h3 className="text-4xl text-center font-extrabold">Our Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {
                    services.map(singleService => <ServiceCard key={singleService.id} singleService={singleService}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;