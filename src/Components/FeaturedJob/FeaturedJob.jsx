import { useEffect, useState } from "react";
import FeaturedCart from "./FeaturedCart";

const FeaturedJob = () => {
    const [jobs, setJobs] = useState([]);
    const [dataLength, setDataLength] = useState(4);

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data));
    }, [])


    return (
        <div className=" my-28 ">
            <div>
                <h2 className="text-5xl text-center font-bold">Featured Jobs</h2>
                <p className=" text-base text-slate-500 text-center my-6">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
                {
                    jobs.slice(0, dataLength).map(job => <FeaturedCart key={job.id} job={job}></FeaturedCart>)
                }
            </div>
            <div className={dataLength === jobs.length && 'hidden'}>
                <div className="text-center my-16">
                    <button
                        onClick={() => setDataLength(jobs.length)}
                        className="btn  text-white  font-bold bg-gradient-to-r from-blue-400 to-violet-500">See All Jobs</button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedJob;