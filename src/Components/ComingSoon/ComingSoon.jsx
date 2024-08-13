import { FcSettings } from "react-icons/fc";
import { Link } from "react-router-dom";
import './ComingSoon.css'

const ComingSoon = () => {
    return (
        <div>
            <div className="w-full h-screen flex flex-col items-center justify-center">
                <FcSettings className="text-[100px] mt-6 spin" />
                <FcSettings className="text-[50px] ml-24 mb-6 spin" />
                <h2 className="font-bold text-2xl">This feature is under construction! Stay tuned....</h2>
                <h2 className="font-bold">Go to <Link to='/'><button className="btn ml-2 font-bold">Home</button></Link></h2>
            </div>
        </div>
    );
};

export default ComingSoon;