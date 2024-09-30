import { AiFillPlaySquare, AiOutlineFileSearch } from "react-icons/ai";
import { IoHome, IoOptions } from "react-icons/io5";
import { TbTools } from "react-icons/tb";
import { NavLink } from "react-router-dom";

const Menus = () => {


    return (
        <div className="fixed bottom-0 w-full items-center justify-center hidden sm:flex z-50">
            <ul className="menu menu-horizontal bg-base-200/60 backdrop-blur rounded-t-lg mt-6 w-full flex justify-between px-4">

                <li>
                    <NavLink to='/result' className="tooltip" data-tip="Result">
                        <AiOutlineFileSearch className="text-2xl" />
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/toolsandcontact' className="tooltip" data-tip="Tools and Contact">
                        <TbTools className="text-2xl" />
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/' className="tooltip" data-tip="Home">
                        <IoHome className="text-2xl" />
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/options' className="tooltip" data-tip="Options">
                        <IoOptions className="text-2xl" />
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/videolectures' className="tooltip" data-tip="Video Lectures">
                        <AiFillPlaySquare className="text-2xl" />
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Menus;