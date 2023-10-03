
const Banner = () => {
    return (
        <div className="flex flex-col lg:flex-row mx-8 lg:mx-12 my-5 lg:my-24">
            <div className="w-1/2 bg-[https://i.ibb.co/ZzZfYSR/bg2.png] my-auto">
                <h2 className=" text-7xl font-bold">
                    One Step <br />
                    Closer To Your <br />
                    <span className="text-[#7E90FE]">Dream Job</span>
                </h2>
                <p className=" mt-6 mb-8 text-slate-500 ">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>

                <button
                    className="btn  text-white  font-bold bg-gradient-to-r from-blue-400 to-violet-500">Get Started</button>
            </div>
            <div className="-h-10">
                <img src="https://i.ibb.co/gdCvK0s/user.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;