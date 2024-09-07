import { useLoaderData } from "react-router-dom";
import UserCard from "./UserCard";
// import UserCard from "./UserCard";

const People = () => {

    const userInfo = useLoaderData();

    return (
        <div>
            <div className="py-9" />
            <h2 className="text-center text-white font-bold text-1xl">CSE P DIU Users</h2>
            <div className="flex flex-wrap">
                {
                    userInfo.map(aUser => <UserCard key={aUser.uid} aUser={aUser}></UserCard>)
                }
            </div>
            <div className="sm:mb-[60px] mb-[60px]" />
        </div>
    );
};

export default People;