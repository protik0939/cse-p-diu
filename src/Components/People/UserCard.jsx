import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import './UserCard.css';

const UserCard = ({ aUser }) => {

    const { user } = useContext(AuthContext);
    if (!aUser || !user) {
        return (
            <div className="flex w-1/4 flex-col gap-4">
                <div className="skeleton h-32 w-full"></div>
                <div className="skeleton h-4 w-28"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
            </div>
        )
    }
    return (
        <div className="userBox">
            {aUser?.classRepresentative === "true" ? <span className="absolute indicator-item badge m-2 text-2xl font-bold p-2">CR</span> : ''}
            <img className="userBoxImage"
                src={aUser.photourl}
                alt="Profile Photo" />
            <div className="">
                <h2 className="">{aUser.name} {user.uid === aUser.uid ? <span>&#40;You&#41;</span> : ''}</h2>
                <p>Section: {aUser.batchNo}_{aUser.section}</p>
                <div className="card-actions justify-center">
                    <Link to={`/profile/${aUser.uid}`}><button className="btn">View Profile</button></Link>
                </div>
            </div>
        </div>
    );
};

export default UserCard;