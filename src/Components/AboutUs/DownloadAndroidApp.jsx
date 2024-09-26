import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import './glowStyle.css';

const DownloadAndroidApp = () => {
    return (
        <div className="flex sm:flex-col w-full h-screen">
            <div className="py-[65px]" />
            <Helmet>
                <title>Android App | CSE P DIU</title>
            </Helmet>

            {/* Left Side with Image */}
            <div className="flex justify-center items-center w-1/2 sm:w-full h-full sm:h-1/2 relative">
                <div className="absolute w-1/4 h-1/2 z-0 blur-[70px] bg-gradient-to-r from-[#49b863] to-[#166fb8] animate-glow-spread" />
                <img
                    className="z-10 p-5"
                    src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgSWbgy92JvbJLlxXPGAgSwO57Ek0CdUov9Zc-bMiQU4wRMpviPYOzckOi9HPCkZfa1P2a4vOs0GBgVmSu-4_Nk1ugJNYVN8qXMysC0k9kN_-CkENgryzK5SZzRoVn6WmPMUjuOTxvpbSeq0PNvE63rsS0ZKyt8Gk-shvFj17bzhxaTpGWFG1leo7FVAA0I/s1600/csepdiuad.webp"
                    alt="CSE P DIU"
                />
            </div>

            {/* Right Side with Button */}
            <div className="flex justify-center items-center w-1/2 sm:w-full h-full sm:h-1/2 relative">
                <Link
                    className="z-10"
                    target="_blank"
                    to="https://drive.google.com/file/d/1efRUGjbMRJ1vvHBnUD2dA6SuIaD0k2NS/view?usp=drive_link"
                >
                    <button className="btn border-none shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer bg-gradient-to-r text-[#ffffff] from-[#49b863] to-[#166fb8]">
                        Download Apk file
                    </button>
                </Link>
                <div className="absolute w-1/4 h-1/2 z-0 blur-[70px] bg-gradient-to-r from-[#166fb8] to-[#49b863] animate-glow-spread" />
            </div>
            <div className="sm:py-[65px]" />
        </div>
    );
};

export default DownloadAndroidApp;
