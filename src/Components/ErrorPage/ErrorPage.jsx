import { FcDislike } from "react-icons/fc";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="w-full h-screen flex flex-col items-center justify-center">
            <FcDislike className="text-[100px] my-6" />
            <h2 className="font-bold text-2xl">Error! Not Found!</h2>
            <h2 className="font-bold">Go to <Link to='/'><button className="btn ml-2 font-bold">Home</button></Link></h2>
        </div>
    );
};

export default ErrorPage;