
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    
    return (
        <div className='text-center space-y-5 p-5'>
            <h1 className='text-6xl font-bold '>Page not found</h1>
            <h2 className='text-4xl font-bold text-red-500'>Status: 404</h2>
            <p className='font-bold'>Error Message: {error.statusText || error.message}</p>
            <Link to="/"><button className='btn btn-sm mt-5'>Go to Home</button></Link>
        </div>
    );
};

export default ErrorPage;