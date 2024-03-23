import { useEffect, useState } from "react";
import Job from "../Job/Job";


const FeaturedJobs = () => {

const [jobs,setJobs]=useState([]);

const [dataLength,setDataLength]=useState(4);

useEffect(()=>{
    fetch('jobs.json')
    .then(res=>res.json())
    .then(data=>setJobs(data));
},[])


    return (
        <div>
            <div>
             <h2 className="font-bold  my-4 text-4xl text-center">Featured Jobs</h2>
            <p className="text-center text-sm text-slate-400 font-medium">Explore thousands of job opportunities with all the information you need.Its your future.</p>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 sm:justify-center gap-x-5 ">
            {
                jobs.slice(0,dataLength).map((job)=><Job
                key={job.id}
                job={job}
                ></Job>)
            }
        </div>
        <div className="text-center my-4">
            <button className=" btn bg-indigo-400 text-white btn-sm " onClick={()=>setDataLength()}>Show All Jobs</button>
        </div>
        </div>
    );
};

export default FeaturedJobs;