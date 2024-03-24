import PropTypes from 'prop-types';
import { CiLocationOn } from "react-icons/ci";
import { MdAttachMoney } from "react-icons/md";
import { Link } from 'react-router-dom';
const Job = ({job}) => {
    const{logo,job_title,company_name,job_type,location,remote_or_onsite,salary,id}=job;

    return (
        <div className='border-2 rounded-md mt-5 p-5 hover:outline-2  hover:outline-double hover:outline-indigo-400'>
            
            <img src={logo} alt="" />
            <h2 className='font-bold'>{job_title}</h2>
            <h2 className='text-sm font-semibold
             text-slate-700'>{company_name}</h2>
            <div className='flex gap-3 my-2'>
            <p className='text-xs  font-medium  border-2 rounded-sm border-fuchsia-400 text-fuchsia-400 px-2 py-1'>{job_type}</p>
            <p className='text-xs  font-medium border-2 rounded-sm border-fuchsia-400 text-fuchsia-400 px-2 py-1'>{remote_or_onsite}</p>
            </div>
            <div className='flex gap-3 font-semibold'>
            <p className='text-xs flex gap-1 items-center'> <span><CiLocationOn></CiLocationOn></span>
            {location}</p>
            <p className='text-xs flex gap-1 items-center'><span><MdAttachMoney></MdAttachMoney></span>
            {salary}</p>
            </div>
           <Link to={`/job/${id}`}>
           <button className="btn bg-indigo-400 text-white  btn-sm mt-2">View Details</button>
           </Link>
        </div>
    );
};

Job.propTypes={
    job:PropTypes.object
}

export default Job;