import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const TimelineSkeleton = () => {
    return (
        <div className="w-full rounded-3xl shadow-lg p-4">
            <div className='flex justify-between w-full'>
                <Skeleton height={30} width="200px" style={{ marginTop: '10px', background: '#1d232a' }} baseColor="#1d232a" highlightColor="#323c47" />
                <Skeleton height={30} width="30px" style={{ marginTop: '10px', background: '#1d232a' }} baseColor="#1d232a" highlightColor="#323c47" />
            </div>
            <Skeleton height={400} width="100%" style={{ marginTop: '10px', background: '#1d232a' }} baseColor="#1d232a" highlightColor="#323c47" />
            <div className='flex justify-center'>
                <Skeleton height={60} width="200px" style={{ marginTop: '10px', background: '#1d232a' }} baseColor="#1d232a" highlightColor="#323c47" />
            </div>
            <Skeleton height={100} width="100%" style={{ marginTop: '10px', background: '#1d232a' }} baseColor="#1d232a" highlightColor="#323c47" />
        </div>
    );
};

export default TimelineSkeleton;
