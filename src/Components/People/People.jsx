import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
// import UserCard from "./UserCard";
import { useContext, useEffect, useState } from "react";
import './UserCard.css';
import { Helmet } from "react-helmet";
// import UserCard from "./UserCard";

const People = () => {

    const [userInfo, setUserInfo] = useState([])
    const [loadingUser, setLoadingUser] = useState(true);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch('https://cse-p-diu-server.vercel.app/users')
            .then(res => res.json())
            .then(data => {
                setUserInfo(data)
                setLoadingUser(false)
            })
            .catch(error => {
                console.log(`Something went wrong: ${error}`)
            })
    });

    const skeletonItems = Array(8).fill(null);
    if (loadingUser) {
        return (

            <div className="w-full">
                <Helmet>
                    <title>People | CSE P DIU</title>
                </Helmet>
                <div className="py-9" />
                <div className="w-full flex justify-center">
                    <div className="skeleton h-10 w-1/3"></div>
                </div>
                <div className="flex flex-wrap">

                    {skeletonItems.map((_, index) => (
                        <div className="flex flex-wrap flex-col w-1/4 sm:w-1/2 gap-4 p-2" key={index}>
                            <div className="skeleton w-full aspect-square rounded-none"></div>
                            <div className="skeleton h-2 w-28"></div>
                            <div className="skeleton h-2 w-24"></div>
                            <div className="w-full flex justify-center">
                                <div className="skeleton h-10 w-1/3"></div>
                            </div>
                        </div>
                    ))}

                </div>

                <div className="py-9" />
            </div>
        )
    }

    return (
        <div>
            <div className="py-9" />
            <h2 className="text-center text-white font-bold text-1xl">CSE P DIU Users</h2>
            <div className="flex flex-wrap">
                {
                    userInfo.map(aUser => (
                        <div className="userBox" key={aUser?.uId}>
                            {aUser?.classRepresentative === "true" ? <span className="absolute indicator-item badge m-2 text-2xl font-bold p-2">CR</span> : ''}
                            <div className="flex justify-center items-center shadow-lg w-full sm:w-full aspect-square sm:h-auto overflow-hidden bg-[#ffffff10] sm:bg-[#ffffff00]">
                                <img className="w-full h-full object-cover"
                                    src={aUser.photourl}
                                    alt="Profile Photo" />
                            </div>
                            <div className="">
                                <h2 className="">{aUser.name} {user?.uid === aUser.uid ? <span>&#40;You&#41;</span> : ''}</h2>
                                <p>Section: {aUser.batchNo}_{aUser.section}</p>
                                <div className="card-actions justify-center">
                                    <Link to={`/profile/${aUser?.uid}`}><button className="btn">View Profile</button></Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="sm:mb-[60px] mb-[60px]" />
        </div>
    );
};

export default People;