
import { useLoaderData, useParams } from 'react-router-dom';

const ConsultantInfo = () => {
    const { id } = useParams();
    const data = useLoaderData();
    const consultant = data.find(consultant => consultant.id === parseInt(id));

    return (
        <div className='space-y-3 p-5'>
            <div>
                <footer className="footer footer-center bg-primary text-primary-content p-10 rounded-3xl">
                    <aside>
                        <p className="text-2xl font-bold">
                            <span className='text-5xl'> Career Guidance for you to improve your life</span>
                            <br />
                            We provide consultancy services to encourage, manage and boost your career
                        </p>
                        <p>Our Consultants</p>
                    </aside>

                </footer>
            </div>

            <div className='flex justify-center items-center'>
                <div className="card card-compact bg-base-100 w-96 shadow-xl">
                    <figure>
                        <img
                            className="w-full h-[200px]"
                            src={consultant?.imageUrl}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title font-extrabold">Counselor Name: {consultant?.counselor}</h2>
                        <p className="text-gray-400 font-bold">Service Name: {consultant?.serviceName}</p>
                        <p><span className='font-bold'>Brief Description:</span> {consultant?.briefDescription}</p>
                        <p><span className='font-bold'>Duration:</span> {consultant?.duration}</p>
                        <p><span className='font-bold'>Category:</span> {consultant?.category}</p>
                        <p><span className='font-bold'>Rating:</span> {consultant?.rating}</p>
                        <p><span className='font-bold'>Price:</span> {consultant?.price}</p>
                        <button className='btn btn-accent'>Feedback</button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default ConsultantInfo;