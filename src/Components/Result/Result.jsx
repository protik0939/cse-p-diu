import { useEffect, useState } from "react";
import ResultCard from "./ResultCard";
import '../Home/Home.css';
import Skeleton from "react-loading-skeleton";

const Result = () => {
    const [semesters, setSemesters] = useState([]);
    const [selectedSemester, setSelectedSemester] = useState('');
    const [studentInfo, setStudentInfo] = useState(null); // Initialize as null to differentiate between no data and empty data
    const [loading, setLoading] = useState(false); // New loading state

    useEffect(() => {
        const fetchSemesters = async () => {
            try {
                const response = await fetch('https://cse-p-diu-server.vercel.app/secure-api/semesterList');
                const data = await response.json();
                setSemesters(data);
            } catch (error) {
                console.error('Error fetching semesters:', error);
            }
        };
        fetchSemesters();
    }, []);


    const handleChange = (event) => {
        setSelectedSemester(event.target.value);
    };


    const fetchStudentInfo = async (e) => {
        e.preventDefault();
        setLoading(true);
        const sId = e.target.sId.value;

        try {
            const response = await fetch(`https://cse-p-diu-server.vercel.app/secure-api/studentInfo?studentId=${sId}`);
            const data = await response.json();
            setStudentInfo(data);
        } catch (error) {
            console.error('Error fetching student info:', error);
        } finally {
            setLoading(false); // Set loading to false after fetching data
        }
    };

    return (
        <div className="w-full flex sm:flex-col">
            <div className="flex h-screen items-center justify-center w-1/3 sm:w-full sm:h-auto sm:mt-16">
                <div className="py-4" />
                <div className="hero-content flex-col justify-start w-full">
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={fetchStudentInfo} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Student ID</span>
                                </label>
                                <input type="text" name="sId" placeholder="Student ID" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Select Semester</span>
                                </label>
                                <select
                                    className="select select-bordered w-full max-w-xs"
                                    id="semester-select"
                                    value={selectedSemester}
                                    onChange={handleChange}
                                >
                                    <option disabled selected value="">Select Semester</option>
                                    {semesters.length === 0 ?
                                        <>
                                            <option className="p-20" disabled value="loading.....">
                                                <span className="loading loading-ring loading-lg">Loading......</span>
                                            </option>
                                        </>
                                        :
                                        (semesters.map((semester) => (
                                            <option
                                                key={semester.semesterId}
                                                value={semester.semesterId}
                                            >
                                                {`${semester.semesterName} ${semester.semesterYear} (${semester.semesterId})`}
                                            </option>
                                        )))}
                                </select>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn" type="submit" value="Check Result" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="w-2/3 sm:w-full py-[80px] p-5 h-screen sm:h-auto overflow-y-scroll overlay-scrollbar">
                {loading ? (
                    
                    <div className="w-full p-20">
                        <div className="text-center text-white">
                            <Skeleton height={25} width="30%" style={{ marginTop: '0px', background: '#1d232a' }} baseColor="#1d232a" highlightColor="#323c47" />
                        </div>
                        <Skeleton height={15} width="48%" style={{ marginTop: '50px', background: '#1d232a' }} baseColor="#1d232a" highlightColor="#323c47" />
                        <Skeleton height={15} width="45%" style={{ marginTop: '5px', background: '#1d232a' }} baseColor="#1d232a" highlightColor="#323c47" />
                        <Skeleton height={15} width="30%" style={{ marginTop: '5px', background: '#1d232a' }} baseColor="#1d232a" highlightColor="#323c47" />
                        <Skeleton height={15} width="25%" style={{ marginTop: '5px', background: '#1d232a' }} baseColor="#1d232a" highlightColor="#323c47" />
                        <Skeleton height={15} width="20%" style={{ marginTop: '5px', background: '#1d232a' }} baseColor="#1d232a" highlightColor="#323c47" />
                        <Skeleton height={15} width="26%" style={{ marginTop: '5px', background: '#1d232a' }} baseColor="#1d232a" highlightColor="#323c47" />
                        <Skeleton height={15} width="23%" style={{ marginTop: '5px', background: '#1d232a' }} baseColor="#1d232a" highlightColor="#323c47" />
                        <Skeleton height={15} width="60%" style={{ marginTop: '5px', background: '#1d232a' }} baseColor="#1d232a" highlightColor="#323c47" />
                        <Skeleton height={15} width="53%" style={{ marginTop: '5px', background: '#1d232a' }} baseColor="#1d232a" highlightColor="#323c47" />
                        <Skeleton height={15} width="50%" style={{ marginTop: '5px', background: '#1d232a' }} baseColor="#1d232a" highlightColor="#323c47" />
                        <Skeleton height={15} width="55%" style={{ marginTop: '5px', background: '#1d232a' }} baseColor="#1d232a" highlightColor="#323c47" />
                        <Skeleton height={15} width="33%" style={{ marginTop: '5px', background: '#1d232a' }} baseColor="#1d232a" highlightColor="#323c47" />
                        <Skeleton height={15} width="38%" style={{ marginTop: '5px', background: '#1d232a' }} baseColor="#1d232a" highlightColor="#323c47" />
                    </div>
                ) : (
                    studentInfo && <ResultCard key={studentInfo.studentId} semester={selectedSemester} sdata={studentInfo} />
                )}
            </div>
        </div>
    );
};

export default Result;
