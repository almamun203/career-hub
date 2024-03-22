import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="flex flex-col gap-10 justify-center text-center pt-24 ">
           <h2 className="text-4xl text-blue-400 font-bold"> Oops!!</h2>
           <Link to='/'><button className="btn btn-sm btn-warning">Home</button></Link>
        </div>
    );
};

export default ErrorPage;