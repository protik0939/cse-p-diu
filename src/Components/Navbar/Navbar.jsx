import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Skeleton from "react-loading-skeleton";
import Logo from '../../assets/CSE_P_DIU_logo.svg';
import { IoIosContact, IoMdLogIn, IoMdLogOut } from "react-icons/io";
import { ImProfile } from "react-icons/im";
import '../Home/Home.css';
import Swal from "sweetalert2";
import './Navbar.css'


const Navbar = () => {

    const { logOut, user } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);


    const [photoUrl, setPhotoUrl] = useState('');
    const uid = user?.uid;
    useEffect(() => {
        if (uid) {
            fetch(`https://cse-p-diu-server.vercel.app/users/uid/${uid}`)
                .then(res => res.json())
                .then(data => {
                    setPhotoUrl(data.photourl);
                    setLoading(false);
                })
                .catch(err => {
                    console.error('Error fetching user data:', err);
                    setLoading(false);
                });
        }
    }, [uid, photoUrl]);

    const handleLogOut = () => {
        logOut();
        Swal.fire({
            position: "top-end",
            toast: true,
            title: "logged Out",
            showConfirmButton: false,
            color: '#ffffff',
            background: '#00ff0090',
            timer: 2000,
            timerProgressBar: true,
            width: 'auto',
        });
    }



    return (
        <div className="fixed flex w-full justify-center items-center h-[70px] sm:h-auto top-0 z-10">
            <div className={`flex justify-between w-[98%] sm:w-full sm:h-[60px] items-center  bg-black/10 backdrop-blur-md p-2 px-6 rounded-2xl sm:rounded-none transition duration-700 ease-in-out`}>
                <NavLink to='/'><div>
                    <img className="w-[80px]" src={Logo} alt="" />
                </div>
                </NavLink>
                <ul className="flex menu menu-horizontal justify-center items-center space-x-2 p-0">

                    <li><NavLink
                        to="/"
                        className="sm:hidden"
                    >Home</NavLink></li>


                    <li><NavLink
                        to="/people"
                        className="sm:hidden"
                    >People</NavLink></li>


                    <li><NavLink
                        to="/videolectures"
                        className="sm:hidden"
                    >Video Lecture</NavLink></li>


                    <li> <NavLink
                        to="/result"
                        className="sm:hidden"
                    >Result</NavLink></li>


                    <li className="relative cursor-pointer">
                        <div className="dropdown dropdown-end flex items-center">
                            <div tabIndex={0} className={`avatar ${user ? '' : 'items-center justify-center'}`}>
                                {user ? '' : <Link to='/login'><h1 className="bg-base-100 p-1 px-2 rounded-full font-bold text-[#49b863]">Log in</h1></Link>}
                                <div className="w-8 rounded-[10px]">
                                    {user ? (loading ?
                                        <Skeleton height="100%" width="100%" style={{ marginTop: '0px', background: '#1d232a00' }} baseColor="#1d232a" highlightColor="#323c47" />
                                        :
                                        <img
                                            alt=""
                                            src={photoUrl} />) :
                                        <IoIosContact className="text-[2rem]" />}
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow top-[30px]">
                                {user ?
                                    <div className="w-full m-y-8">
                                        <div className="flex justify-center items-center space-x-8">
                                            <Link to={`/profile/${user?.uid}`}><button>
                                                <div className="flex flex-col items-center hover:scale-110">
                                                    <ImProfile className="text-3xl" /><h1 className="text-[8px]">Profile</h1>
                                                </div>

                                            </button>
                                            </Link>

                                            <button onClick={handleLogOut}>
                                                <div className="flex flex-col items-center hover:scale-110">
                                                    <IoMdLogOut className="text-3xl" /><h1 className="text-[8px]">LogOut</h1>
                                                </div>
                                            </button>
                                        </div>
                                    </div> :
                                    <li className="flex justify-center items-center mb-4 font-bold"><Link className="sm:p-3" to='/login'><IoMdLogIn />Login</Link></li>
                                }
                                {/* <li><Link to='/login'>Login</Link></li> */}

                            </ul>
                        </div>
                    </li>
                    {/* : <NavLink
                            to="/login"
                            className="">
                            <li>Log in</li>
                        </NavLink> */}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;