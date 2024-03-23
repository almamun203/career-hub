import { useEffect, useState } from "react";
import Job from "../Job/Job";


const FeaturedJobs = () => {

const [jobs,setJobs]=useState([]);

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
        <div>
            {
                jobs.map((job)=><Job
                key={job.id}
                job={job}
                ></Job>)
            }
        </div>
        </div>
    );
};

export default FeaturedJobs;