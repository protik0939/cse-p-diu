import { FcBusinessman, FcConferenceCall, FcNook, FcViewDetails } from "react-icons/fc";
import DateAndTime from "../Home/Suboptions/DateAndTime";
import { Link } from "react-router-dom";
import { IoLogOutOutline } from "react-icons/io5";


const diumain = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh68gRiHd4m2_bZm0oWNzHijWQVa3Uh7u28GRv5HEJ_aCrKUWLqv0jbdifEF9YMmTC7vjtcxbQl4v-TRNviep9V4fIlG5P15madUaJptvEJkeBObsRct9WysHrJgfwyftcLMSvnBGhFJXcKUhrHFF-9jqr9QgrOB8u4ntMcRwyRUecOS3cXowaQzulFepA/s1600/diu.webp';
const diupti = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiJarCyEryErXANzNw2tka6BRWcJ5-LgYE2Fnv70Wj0DYI11mrPjPvc_g6SVfTZJpAmPazoheP92fkDI3LgDOSDhCcC1LNLjk4otzkYTLJBH5HlqXL3HSIE2FYxelFz6mtqX48ny9OB98P9XbOjtpUE4i9KWACdZ7I7dGY5vEzBoZUBCkGO_vVGm0eD3K4/s1600/diupti.webp';
const diulogo = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhGywNbhtm8M68wzGZ8QVw6ESROwoddy_M3X2MWv3RYgQIbbfVkCQUaTa2BCgpPivVpukSV8bnCDE6BY0OI_GAt1tv8dWbHiMn_Mre5yWlEqorHCDXKlF3JQQS401703FCAvpvnUmrgibZjF9O-rQuBlYE5snUXbqZkwJlcL_MDFjLF31_hkVxGM2nIbzc/s1600/diu.webp';
const blclogo = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjCOecoYMjcrQXqRgfgzeo1XiHvDtLhzLvFPDA5GkUd0n4vbz589RuBFA0qkfeX2LWyXgFl0xtV5Hv5bv5M4LDaQBK0Y_zWdoMg7W_jj704HirIeMKKtTj2_q38jqQpW2n3RRxQfxAmFqjt9mWONDcNi8105E1jQ4_UO2E1SWty08H1ONONC-F9Ds2VhV8/s1600/blc.webp';
const diulibrarylogo = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgdfrpSpwDEUoRM5SmCX59E-wQeQJOgHYKujplEE7wHL8U9G-7rqYZe4EMDSJ3j69IBolpzXPL41vadlpdeRTvujzwsRvN3QbJNEET98JKEv5je6xMUnkxOmRfgN9Pt2afZGljfneiA7oTpertcdgaIuSQrx6BHRBIywTk9Lj-6CN5FblNHn6Cp0sUoAtw/s1600/diu%20library.webp';







const RightNavBar = () => {
    return (
        <div>
            <div className="w-full rounded-3xl shadow-lg p-4">
                <DateAndTime></DateAndTime>
            </div>

            <div className="w-full rounded-3xl shadow-lg p-4">
                <h2 className="my-2 font-bold">Options</h2>
                <div>
                    <Link to='/people'>
                        <div className="flex items-center w-full rounded-2xl shadow-lg p-3 cursor-pointer hover:bg-black/30 transition duration-150 mt-2 ease-in-out space-x-4">
                            <FcConferenceCall></FcConferenceCall>
                            <h2>People</h2>
                        </div>
                    </Link>

                    <Link to='/routine'>
                        <div className="flex items-center w-full rounded-2xl shadow-lg p-3 cursor-pointer hover:bg-black/30 transition duration-150 mt-2 ease-in-out space-x-4">
                            <FcNook></FcNook>
                            <h2>Routine</h2>
                        </div>
                    </Link>

                    <Link to='/allcr'>
                        <div className="flex items-center w-full rounded-2xl shadow-lg p-3 cursor-pointer hover:bg-black/30 transition duration-150 mt-2 ease-in-out space-x-4">
                            <FcBusinessman></FcBusinessman>
                            <h2>All CR</h2>
                        </div>
                    </Link>

                </div>
            </div>

            <div className="w-full rounded-3xl shadow-lg p-4">
                <div className="my-2 font-bold flex items-center"><h2>Others</h2><IoLogOutOutline className="ml-2"></IoLogOutOutline></div>
                <div>

                    <Link to='/diumain'>
                        <div className="flex items-center w-full rounded-2xl shadow-lg p-3 cursor-pointer hover:bg-black/30 transition duration-150 mt-2 ease-in-out space-x-4">
                            <img className="w-4" src={diumain} alt="" />
                            <h2>DIU</h2>
                        </div>
                    </Link>

                    <Link to='/studentportal'>
                        <div className="flex items-center w-full rounded-2xl shadow-lg p-3 cursor-pointer hover:bg-black/30 transition duration-150 mt-2 ease-in-out space-x-4">
                            <img className="w-4" src={diulogo} alt="" />
                            <h2>DIU Student Portal</h2>
                        </div>
                    </Link>

                    <Link to='/blc'>
                        <div className="flex items-center w-full rounded-2xl shadow-lg p-3 cursor-pointer hover:bg-black/30 transition duration-150 mt-2 ease-in-out space-x-4">
                            <img className="w-4" src={blclogo} alt="" />
                            <h2>BLC</h2>
                        </div>
                    </Link>


                    <Link to='/diunotice'>
                        <div className="flex items-center w-full rounded-2xl shadow-lg p-3 cursor-pointer hover:bg-black/30 transition duration-150 mt-2 ease-in-out space-x-4">
                            <FcViewDetails></FcViewDetails>
                            <h2>DIU Notice</h2>
                        </div>
                    </Link>

                    <Link to='/diulibrary'>
                        <div className="flex items-center w-full rounded-2xl shadow-lg p-3 cursor-pointer hover:bg-black/30 transition duration-150 mt-2 ease-in-out space-x-4">
                            <img className="w-4" src={diulibrarylogo} alt="" />
                            <h2>DIU Library</h2>
                        </div>
                    </Link>

                    <Link to='/diuinternship'>
                        <div className="flex items-center w-full rounded-2xl shadow-lg p-3 cursor-pointer hover:bg-black/30 transition duration-150 mt-2 ease-in-out space-x-4">
                            <img className="w-4 rounded-2xl" src={diupti} alt="" />
                            <h2>DIU Internship</h2>
                        </div>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default RightNavBar;