import { NavLink } from "react-router-dom";

const Header = () => {

    const links = <>
        <li className="text-lg font-semibold"><NavLink to = "/">Home</NavLink></li>
        <li className="text-lg font-semibold"><NavLink to = "/jobs">Jobs</NavLink></li>
        <li className="text-lg font-semibold"><NavLink to = "/statistics">Statistics</NavLink></li>
        <li className="text-lg font-semibold"><NavLink to = "/applied">Applied Jobs</NavLink></li>
        <li className="text-lg font-semibold"><NavLink to = "/blogs">Blogs</NavLink></li>
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <img src="https://i.ibb.co/6NC7gsN/Career-Hub.png" alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn text-white font-semibold bg-gradient-to-r from-blue-500 to-violet-600">Start Applying</a>
            </div>
        </div>
    );
};

export default Header;