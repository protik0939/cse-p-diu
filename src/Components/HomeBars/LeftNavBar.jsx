import { AiOutlineFileSearch } from "react-icons/ai";
import { FcCalculator, FcDocument, FcKindle, FcStart } from "react-icons/fc";
import { IoLogoGooglePlaystore, IoLogoWindows } from "react-icons/io5";
import { MdPhoneCallback, MdPrivacyTip } from "react-icons/md";
import { PiQuestionMarkDuotone } from "react-icons/pi";
import { Link } from "react-router-dom";

const LeftNavBar = () => {
    return (
        <div>
            <div className="w-full rounded-3xl shadow-lg p-4">
                <h2 className="my-2 font-bold">Tools</h2>
                <Link to='/coverpagegenerator'><div className="flex items-center w-full mt-2 rounded-2xl shadow p-3 cursor-pointer hover:bg-black/30 transition duration-150 ease-in-out space-x-4">
                    <FcDocument />
                    <h2>Cover Page Generator</h2>
                </div></Link>


                <Link to='/classnotes'><div className="flex items-center w-full mt-2 rounded-2xl shadow p-3 cursor-pointer hover:bg-black/30 transition duration-150 ease-in-out space-x-4">
                    <FcKindle />
                    <h2>Class Notes</h2>
                </div></Link>
                <Link to='/videolectures'><div className="flex items-center w-full mt-2 rounded-2xl shadow p-3 cursor-pointer hover:bg-black/30 transition duration-150 ease-in-out space-x-4">
                    <FcStart />
                    <h2>Video Lectures</h2>
                </div></Link>

                <Link to='/howmarksineed'><div className="flex items-center w-full mt-2 rounded-2xl shadow p-3 cursor-pointer hover:bg-black/30 transition duration-150 ease-in-out space-x-4">
                    <PiQuestionMarkDuotone />
                    <h2>How marks I need?</h2>
                </div></Link>

                <Link to='/cgpacalculator'><div className="flex items-center w-full mt-2 rounded-2xl shadow p-3 cursor-pointer hover:bg-black/30 transition duration-150 ease-in-out space-x-4">
                    <FcCalculator />
                    <h2>CGPA Calculator</h2>
                </div></Link>
                <Link to='/result'><div className="flex items-center w-full mt-2 rounded-2xl shadow p-3 cursor-pointer hover:bg-black/30 transition duration-150 ease-in-out space-x-4">
                    <AiOutlineFileSearch />
                    <h2>Result</h2>
                </div></Link>
            </div>
            <div className="w-full rounded-3xl shadow-lg p-4">
                <h2 className="my-2 font-bold">Events</h2>
                <div className="flex items-center justify-center w-full h-[200px] rounded-2xl bg-[#00000030] shadow p-3 cursor-pointer transition duration-150 ease-in-out space-x-4">
                    <h2>Empty</h2>
                </div>
            </div>

            <div className="w-full rounded-3xl shadow-lg p-4">
                <h2 className="my-2 font-bold">About us</h2>
                <Link to='/downloadandroidapp'>
                    <div className="flex items-center w-full mt-2 rounded-2xl shadow p-3 cursor-pointer hover:bg-black/30 transition duration-150 ease-in-out space-x-4">
                        <IoLogoGooglePlaystore />
                        <h2>Download Android app</h2>

                    </div>
                </Link>

                <Link to='/downloadwindowsapp'>
                    <div className="flex items-center w-full mt-2 rounded-2xl shadow p-3 cursor-pointer hover:bg-black/30 transition duration-150 ease-in-out space-x-4">
                        <IoLogoWindows />
                        <h2>Download windows app</h2>
                    </div>
                </Link>

                <Link to='/privacypolicy'>
                    <div className="flex items-center w-full mt-2 rounded-2xl shadow p-3 cursor-pointer hover:bg-black/30 transition duration-150 ease-in-out space-x-4">
                        <MdPrivacyTip />
                        <h2>Privacy Policy</h2>
                    </div>
                </Link>

                <Link to='/contactus'>
                    <div className="flex items-center w-full mt-2 rounded-2xl shadow p-3 cursor-pointer hover:bg-black/30 transition duration-150 ease-in-out space-x-4">
                        <MdPhoneCallback />
                        <h2>Contact us</h2>
                    </div>
                </Link>



            </div>


        </div >
    );
};

export default LeftNavBar;


