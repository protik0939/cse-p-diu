import { Helmet } from "react-helmet";
import './glowStyle.css'

const DownloadWindowsApp = () => {
    return (
        <div className="flex sm:flex-col w-full h-screen">
            <div className="py-[65px]" />
            <Helmet>
                <title>Windows App | CSE P DIU</title>
            </Helmet>

            {/* Left Side with Image */}
            <div className="flex justify-center items-center w-1/2 sm:w-full h-full sm:h-1/2 relative">
                <div className="absolute w-1/4 h-1/2 blur-[70px] z-0 bg-gradient-to-r from-[#49b863] to-[#166fb8] animate-glow-spread" />
                <img
                    className="z-10 p-5 sm:p-0"
                    src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgSWbgy92JvbJLlxXPGAgSwO57Ek0CdUov9Zc-bMiQU4wRMpviPYOzckOi9HPCkZfa1P2a4vOs0GBgVmSu-4_Nk1ugJNYVN8qXMysC0k9kN_-CkENgryzK5SZzRoVn6WmPMUjuOTxvpbSeq0PNvE63rsS0ZKyt8Gk-shvFj17bzhxaTpGWFG1leo7FVAA0I/s1600/csepdiuad.webp"
                    alt="CSE P DIU"
                />
            </div>

            {/* Right Side with Button */}
            <div className="flex justify-center items-center w-1/2 sm:w-full h-full sm:h-1/2 relative">
                    <img
                        className="z-10 p-5 shadow-2xl sm:p-0"
                        src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh0s9noMLdHiwwWtsJ-FVXdc5-aVsNLRQ6tgZk9EklmbocfMQvqCuDSA8SQVm8snCwLhG50fNGj0HMaxNzXbehT9HFhuv-aCulW5I2sym6vx5FfaG9bcghUEbSq_Fi2-eLVEoNFV2qSV7UfpHCQm_oucPrITOKnAbIp_dVnWoLGljrrggqAcD9_tpSKHxJJ/s1600/winins.webp"
                        alt="CSE P DIU"
                    />
                <div className="absolute w-1/4 h-1/2 blur-[70px] z-0 bg-gradient-to-r from-[#166fb8] to-[#49b863] animate-glow-spread" />
            </div>
            <div className="sm:py-[65px]" />
        </div>
    );
};

export default DownloadWindowsApp;
