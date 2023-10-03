import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../LocalStorage.js/localStorage";
import AppliedCard from "./AppliedCard";

const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [appliedJobs, setAppliedJobs] = useState([])
    useEffect( () => {
        const storedJobIds = getStoredJobApplication();
        if(jobs.length > 0){
            const jobsApplied = [];
            for (const id of storedJobIds) {
                const job = jobs.find(job => job.id === id);
                if(job){
                    jobsApplied.push(job)
                }
            }
            setAppliedJobs(jobsApplied);
        }
    },[])
    return (
        <div>
            <div>
                <h2 className=" text-4xl font-bold text-center my-16">Job I applied: {appliedJobs.length}</h2>
            </div>
            <div>
                {
                    appliedJobs.map(job => <AppliedCard key={job.id} job ={job}></AppliedCard>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;