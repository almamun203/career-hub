import { useLoaderData, useParams, } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { MdAttachMoney } from "react-icons/md";
import { BiTask } from "react-icons/bi";
import { CiMail } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";

const JobDetails = () => {
    const jobs = useLoaderData();
    const {id}= useParams();
    const job=jobs.find(job=>job.id == id);
    const {educational_requirements
,experiences, job_description,job_responsibility
,salary,job_title,location,contact_information} =job;
    console.log(job);

    return (
        <div >
        <div className="justify-center h-40 bg-slate-100  w-full mb-10 flex items-center">
            <h2 className="text-3xl font-semibold">Job Details (Id: 0{id})</h2>
        </div>
        <div className="grid md:grid-cols-5 gap-5">
            <div className="md:col-span-3 text-justify">
               <p className="text-slate-400 text-xs font-medium"><span className="text-lg font-bold text-slate-700">
                Job Description:
                </span>
                   {job_description}
                </p>
               <p className="text-slate-400 text-xs font-medium"><span className="text-slate-700 text-lg font-bold">
                Job Responsibility:
                </span>
                 {job_responsibility}
                </p>
               <p className=" text-slate-400 text-xs font-medium"><span className=" text-slate-700 text-lg font-bold">
                Educational Requirements:
                </span>
                   {educational_requirements}
                </p>
               <p className="text-slate-400 text-xs font-medium"><span className="text-slate-700 text-lg font-bold">
                Experiences:
                </span>
                   {experiences}
                </p>
            </div>
            <div className=" md:col-span-2 bg-slate-200 rounded-md flex flex-col p-4">
                <h2 className="text-lg font-semibold mb-2">Job Details</h2>
                <hr />
                
                    <p className="items-center text-sm flex gap-1">
                        <MdAttachMoney></MdAttachMoney>
                        <span className=" font-medium">Salary:</span>
                        {salary}
                    </p>
                    <p className="items-center mb-2 text-sm flex gap-1">
                        <BiTask></BiTask>
                    <span className=" font-medium">Job Title:</span>
                    {job_title}
                    </p>
              
                    <h2 className="text-lg font-semibold mb-2">Contact Information</h2>

                <hr />
                
                
                 <p className="items-center mb-2 text-sm flex gap-1">
                     <FaPhoneAlt></FaPhoneAlt>
                    <span className=" font-medium">Phone:</span>
                    {contact_information?.phone}
                    </p>
                    <p className="items-center mb-2 text-sm flex gap-1">
                        < CiMail></CiMail>
                    <span className=" font-medium">Email:</span>
                    {contact_information?.email}
                    </p>
                    <p className="items-center mb-2 text-sm flex gap-1">
                    <CiLocationOn></CiLocationOn>
                    <span className=" font-medium">Address:</span>
                    {location}
                    </p>


            </div>
        </div>
        </div>
    );
};

export default JobDetails;