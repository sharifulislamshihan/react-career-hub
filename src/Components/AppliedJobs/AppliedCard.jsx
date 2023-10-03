import { Link } from "react-router-dom";
const AppliedCard = ({ job }) => {
    const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
    return (
        <div>
            <div className=" flex justify-between p-7">
                <div className="grid grid-cols-2 ">
                    <div>
                        <img className="my-5" src={logo} alt="" />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-gray-600 mb-1 ">
                            {job_title}
                        </h2>
                        <h3 className="text-slate-600 text-base mb-3">{company_name}</h3>
                        <div className="flex gap-4 mb-3">
                            <button className="btn btn-outline btn-primary btn-sm font-bold">{remote_or_onsite}</button>
                            <button className="btn btn-outline btn-primary btn-sm font-bold">{job_type}</button>
                        </div>
                        <div className="flex gap-2 my-2">
                            {/* Location */}
                            <div className="flex gap-1">
                                <img className=" w-6 h-6 " src="https://i.ibb.co/PhJSDJw/location2.png" alt="" />
                                <p className="text-slate-500 text-base font-semibold">{location}</p>
                            </div>
                            {/* Salary */}
                            <div className="flex gap-1">
                                <img className=" w-6 h-6 " src="https://i.ibb.co/pyH0YSk/money.png" alt="" />
                                <p className="text-slate-500 text-base font-semibold ">Salary : {salary}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <Link to={`/job/${id}`}>
                        <a className="btn text-white font-semibold bg-gradient-to-r from-blue-400 to-violet-500">View Details</a>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AppliedCard;