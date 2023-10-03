import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { saveJobApplication } from "../LocalStorage.js/localStorage";

const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);
    console.log(job);


    const handleAppliedJob = () =>{
        saveJobApplication(idInt);
        toast('Congratulation!! You have successfully Applied the job', {
            position: toast.POSITION.TOP_CENTER
        })
    }
    return (
        <div >
            <div className=" bg-[url(https://i.ibb.co/XD8tQJs/bg1.png)]">
                <h2 className="text-5xl text-center font-bold my-20 ">Job Details</h2>
            </div>
            <div className="flex flex-col ml-10 lg:flex-row">
                <div className=" w-full lg:w-2/3 gap-5 p-7">
                    {/* Job description */}
                    <h3 className="text-lg font-bold my-6">Job Description: <span className=" font-normal text-lg text-slate-600 "> {job.job_description}
                    </span>
                    </h3>

                    {/* Responsibility */}

                    <h3 className="text-lg font-bold my-6">Job Responsibility: <span className=" font-normal text-lg text-slate-600 "> {job.job_responsibility}
                    </span>
                    </h3>

                    {/* Educational Requirment */}

                    <div className="my-6">
                        <h3 className="text-lg font-bold">Educational Requirements: </h3>
                        <p className=" font-normal text-lg text-slate-600 my-6 "> {job.educational_requirements}
                        </p>
                    </div>

                    {/* Experience */}
                    <div className="my-6">
                        <h3 className="text-lg font-bold">Experiences: </h3>
                        <p className=" font-normal text-lg text-slate-600 my-6 "> {job.experiences}
                        </p>
                    </div>
                </div>
                <div className="w-full lg:w-1/3 gap-7 bg-slate-200 p-7">
                    {/* Job Details */}
                    <div>
                        <h2 className=" text-xl font-bold divide-y-4 divide-slate-800">Job Details</h2>
                        {/* salary */}
                        <div className="flex gap-1 mt-6">
                            <div>
                                <img className="w-7 h-7" src={'https://i.ibb.co/pyH0YSk/money.png'} alt="" />
                            </div>
                            <div>
                                <h2 className="text-lg font-semibold">Salary : <span className="text-slate-500">{job.salary}</span> <span className="text-slate-500">per month</span></h2>
                            </div>
                        </div>

                        {/* Job title */}

                        <div className="flex gap-1 my-3">
                            <div>
                                <img className="w-7 h-7" src={'https://i.ibb.co/ws0cgyW/calendar.png'} alt="" />
                            </div>
                            <div>
                                <h2 className="text-lg font-semibold">Job Title : <span className="text-slate-500">{job.job_title}</span> </h2>

                            </div>
                        </div>
                    </div>

                    {/* Contact Information */}

                    <div className="mt-8">
                        <h2 className=" text-xl font-bold">Contact Information</h2>

                        {/* Phone */}

                        <div className="flex gap-1 mt-12">
                            <div>
                                <img className="w-7 h-7" src={'https://i.ibb.co/5vyJh6k/phone.png'} alt="" />
                            </div>
                            <div>
                                <h2 className="text-lg font-semibold">Phone : <span className="text-slate-500">{job.contact_information.phone}</span></h2>
                            </div>
                        </div>

                        {/* Email */}

                        <div className="flex gap-1 mt-4">
                            <div>
                                <img className="w-7 h-7" src={'https://i.ibb.co/8KYWsQt/email.png'} alt="" />
                            </div>
                            <div>
                                <h2 className="text-lg font-semibold">Email : <span className="text-slate-500">{job.contact_information.email}</span></h2>
                            </div>
                        </div>


                        {/* Location */}

                        <div className="flex gap-1 mt-4">
                            <div>
                                <img className="w-7 h-7" src={'https://i.ibb.co/PhJSDJw/location2.png'} alt="" />
                            </div>
                            <div>
                                <h2 className="text-lg font-semibold">Location : <span className="text-slate-500">{job.contact_information.address}</span></h2>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center my-5">
                        <button onClick={handleAppliedJob} className="btn text-white font-semibold bg-gradient-to-r from-blue-400 to-violet-500 w-2/3 ">Apply Now</button>
                    </div>
                </div> 
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;