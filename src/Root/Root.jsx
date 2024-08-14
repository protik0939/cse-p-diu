import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import SpotifyPlayer from "../Components/SpotifyPlayer/SpotifyPlayer";



const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <SpotifyPlayer></SpotifyPlayer>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;