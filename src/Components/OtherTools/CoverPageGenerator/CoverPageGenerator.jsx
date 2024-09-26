import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const CoverPageGenerator = () => {
    return (
        <div className="w-full h-screen flex flex-wrap p-2 pt-16 sm:pb-16">
            <Helmet>
                <title>Cover Page Generator | CSE P DIU</title>
            </Helmet>
            <Link to='/coverpagegenerator/assignment' className="w-1/2 h-1/2 p-2">
                <div className="border border-[#30363c] flex items-center justify-center font-bold w-full h-full rounded-[20px] cursor-pointer hover:text-2xl hover:bg-[#ffffff03] text-center p-6 transition duration-200 shadow-lg">
                    Assignment
                </div>
            </Link>
            <Link to='/coverpagegenerator/labreport' className="w-1/2 h-1/2 p-2">
                <div className="border border-[#30363c] flex items-center justify-center font-bold w-full h-full rounded-[20px] cursor-pointer hover:text-2xl hover:bg-[#ffffff03] text-center p-6 transition duration-200 shadow-lg">
                    Lab Report
                </div>
            </Link>
            <Link to='/coverpagegenerator/finallabreport' className="w-1/2 h-1/2 p-2">
                <div className="border border-[#30363c] flex items-center justify-center font-bold w-full h-full rounded-[20px] cursor-pointer hover:text-2xl hover:bg-[#ffffff03] text-center p-6 transition duration-200 shadow-lg">
                    Final Lab Report
                </div>
            </Link>
            <Link to='/coverpagegenerator/labreportindex' className="w-1/2 h-1/2 p-2">
                <div className="border border-[#30363c] flex items-center justify-center font-bold w-full h-full rounded-[20px] cursor-pointer hover:text-2xl hover:bg-[#ffffff03] text-center p-6 transition duration-200 shadow-lg">
                    Index
                </div>
            </Link>
        </div>
    );
};

export default CoverPageGenerator;
