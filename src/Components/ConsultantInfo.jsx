
import { useLoaderData, useParams } from 'react-router-dom';
import PageTitle from './PageTitle';
import { useState } from 'react';

const ConsultantInfo = () => {
    const { id } = useParams();
    const data = useLoaderData();
    const consultant = data.find(consultant => consultant.id === parseInt(id));
    const [feedback, setFeedback] = useState("");

    const handleFeedback = (e) => {
        e.preventDefault();
        const currentFeedback = e.target.feedback.value;
        console.log(currentFeedback);
        setFeedback(currentFeedback);
    }

    return (
        <div className='space-y-3 p-5'>
            <PageTitle title="Career Counseling | Consultant Info"></PageTitle>
            <div>
                <div className="footer footer-center bg-primary text-primary-content p-10 rounded-3xl">
                    <aside>
                        <p className="text-2xl font-bold">
                            <span className='text-5xl'> Career Guidance for you to improve your life</span>
                            <br />
                            We provide consultancy services to encourage, manage and boost your career
                        </p>
                        <p>Service Details</p>
                    </aside>
                </div>
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
                        <h2 className="card-title font-extrabold">Consultant Name: {consultant?.counselor}</h2>
                        <p className="text-gray-400 font-bold">Service Name: {consultant?.serviceName}</p>
                        <p><span className='font-bold'>Brief Description:</span> {consultant?.briefDescription}</p>
                        <p><span className='font-bold'>Duration:</span> {consultant?.duration}</p>
                        <p><span className='font-bold'>Category:</span> {consultant?.category}</p>
                        <p><span className='font-bold'>Rating:</span> {consultant?.rating}</p>
                        <p><span className='font-bold'>Price:</span> {consultant?.price}</p>
                        <form onSubmit={handleFeedback} className="card-body">
                            <input type="text" name="feedback" placeholder="Your feedback" className="input input-bordered" />
                            <button className='btn btn-accent'>Feedback</button>
                        </form>
                        {
                            feedback && <p className='text-center'><span className='font-bold'>Your Feedback:</span> {feedback}</p>
                        }
                    </div>
                </div>
            </div>


        </div>
    );
};

export default ConsultantInfo;