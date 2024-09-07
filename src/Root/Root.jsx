import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Menus from "../Components/Menus/Menus";
const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Menus></Menus>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;