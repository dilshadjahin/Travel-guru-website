import { Link, NavLink } from "react-router-dom";
import logo from '../../../assets/travel-logo-removebg-preview.png'
import { navItem } from "../../../../public/data";
import { useState } from "react";


const Navbar = ({color}) => {

    const [search, setSearch] = useState('');

    return (
        <div className="navbar bg-transparent absolute  z-10 max-w-7xl mx-auto ml-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                    {navItem.map((item, index)=> (
                        <NavLink key={index} className={`${color}`}>{item.item}</NavLink>
                    ))}
                    
                    </ul>
                </div>
                {/* <a className="btn btn-ghost text-white text-xl">daisyUI</a> */}
                <img src={logo} alt="" className="w-[160px] h-[80px] " />

                <div className="form-control" setSearch={setSearch}>
                    <input type="text" placeholder="Search your destination" className="input input-bordered w-24 md:w-auto" />
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className={` menu menu-horizontal px-1 gap-6 font-semibold text-base`}>
                    {navItem.map((item, index)=> (
                        <NavLink key={index} className={`${color}`} to={item.link}>{item.item}</NavLink>
                    ))}
                </ul>
            </div>
            <div className="navbar-end">
               <Link to = '/login' className="rounded font-semibold bg-[#F9A51A] px-8 py-2">Login</Link>
                
            </div>
        </div>
    );
};

export default Navbar;