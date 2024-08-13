import Skeleton from "react-loading-skeleton";

const ProfileSkeleton = () => {
    return (
        <div>
            <div className="w-full rounded-3xl shadow-lg p-4">
                <Skeleton height="65vh" width="100%" style={{ marginTop: '10px', background: '#1d232a' }} baseColor="#1d232a" highlightColor="#323c47" />
                <div className='flex justify-between w-full'>
                    <Skeleton height={50} width="200px" style={{ marginTop: '10px', background: '#1d232a' }} baseColor="#1d232a" highlightColor="#323c47" />
                    <Skeleton height={50} width="30px" style={{ marginTop: '10px', background: '#1d232a' }} baseColor="#1d232a" highlightColor="#323c47" />
                </div>

            </div>
        </div>
    );
};

export default ProfileSkeleton;