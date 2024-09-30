import Skeleton from "react-loading-skeleton";
import PropTypes from 'prop-types';
import { useEffect, useState } from "react";

const ResultCard = ({ sdata, semester }) => {


    const [resultLoading, setResultLoading] = useState(false);
    const [resultFull, setResultFull] = useState([]);


    useEffect(() => {
        const fetchStudentResult = async () => {
            setResultLoading(true);
            try {
                const response = await fetch(`https://cse-p-diu-server.vercel.app/results/${semester}/${sdata?.studentId}`);
                const data = await response.json();
                setResultFull(data);
                setResultLoading(false);
            } catch (error) {
                console.error('Error fetching semesters:', error);
                setResultLoading(false);
            }
        };
        fetchStudentResult();
    }, [sdata?.studentId, semester]);


    function calculateTotalCredits(courses) {
        return courses.reduce((total, course) => total + course.totalCredit, 0);
    }
    function calculateCreditsForGrades(courses) {
        const validGrades = ["A+", "A", "A-", "B+", "B", "B-", "C+", "C", "D"];
        return courses.reduce((total, course) => {
            if (validGrades.includes(course.gradeLetter)) {
                return total + course.totalCredit;
            }
            return total;
        }, 0);
    }

    function getGradeFromCGPA(cgpa) {
        if (cgpa >= 4.00) {
            return "A+";
        } else if (cgpa >= 3.75) {
            return "A";
        } else if (cgpa >= 3.50) {
            return "A-";
        } else if (cgpa >= 3.25) {
            return "B+";
        } else if (cgpa >= 3.00) {
            return "B";
        } else if (cgpa >= 2.75) {
            return "B-";
        } else if (cgpa >= 2.50) {
            return "C+";
        } else if (cgpa >= 2.25) {
            return "C";
        } else if (cgpa >= 2.00) {
            return "D";
        } else {
            return "F";
        }
    }

    function getRemarksFromCGPA(cgpa) {
        if (cgpa >= 4.00) {
            return "Outstanding";
        } else if (cgpa >= 3.75) {
            return "Excellent";
        } else if (cgpa >= 3.50) {
            return "Very Good";
        } else if (cgpa >= 3.25) {
            return "Good";
        } else if (cgpa >= 3.00) {
            return "Satisfactory";
        } else if (cgpa >= 2.75) {
            return "Above Average";
        } else if (cgpa >= 2.50) {
            return "Average";
        } else if (cgpa >= 2.25) {
            return "Below Average";
        } else if (cgpa >= 2.00) {
            return "Pass";
        } else {
            return "Fail";
        }
    }



    return (
        <div className="w-full rounded-[40px] shadow-2xl p-5 h-auto">
            {sdata === null ? (
                <div></div>
            ) : (
                <>
                    <h1 className="text-4xl font-bold text-center p-10 rsct:p-2">Result Sheet </h1>
                    <div className="p-6 rsct:text-[12px]  rsct:p-2]">
                        <h2><span className="infoTitle">Student name:</span> {sdata.studentName}</h2>
                        <h2><span className="infoTitle">Student Id: </span>{sdata.studentId}</h2>
                        <h2><span className="infoTitle">Campus: </span>{sdata.campusName} ({sdata.fkCampus})</h2>
                        <h2><span className="infoTitle">Batch ID: </span>{sdata.batchId}</h2>
                        <h2><span className="infoTitle">Batch: </span>{sdata.batchNo}</h2>
                        <h2><span className="infoTitle">Program Credit: </span>{sdata.programCredit}</h2>
                        <h2><span className="infoTitle">Program ID: </span>{sdata.programId}</h2>
                        <h2><span className="infoTitle">Program name: </span>{sdata.programName} ({sdata.progShortName})</h2>
                        <h2><span className="infoTitle">Program type: </span>{sdata.programType}</h2>
                        <h2><span className="infoTitle">Department: </span>{sdata.departmentName} ({sdata.deptShortName})</h2>
                        <h2><span className="infoTitle">Faculty: </span>{sdata.facultyName} ({sdata.facShortName})</h2>
                        <h2><span className="infoTitle">Admission semester: </span>{sdata.semesterName} ({sdata.semesterId})</h2>
                        <h2><span className="infoTitle">Shift: </span>{sdata.shift}</h2>
                    </div>
                    <div className="p-6  rsct:p-2">
                        {resultLoading ?
                            (
                                <div className="w-full p-20">
                                    <div className="text-center">
                                        <Skeleton height={40} width="30%" style={{ marginTop: '0px', background: '#1d232a' }} baseColor="#1d232a" highlightColor="#323c47" />
                                    </div>
                                    <Skeleton height={15} width="100%" style={{ marginTop: '50px', background: '#1d232a' }} baseColor="#1d232a" highlightColor="#323c47" />
                                    <Skeleton height={15} width="100%" style={{ marginTop: '5px', background: '#1d232a' }} baseColor="#1d232a" highlightColor="#323c47" />
                                    <Skeleton height={15} width="100%" style={{ marginTop: '5px', background: '#1d232a' }} baseColor="#1d232a" highlightColor="#323c47" />
                                    <Skeleton height={15} width="100%" style={{ marginTop: '5px', background: '#1d232a' }} baseColor="#1d232a" highlightColor="#323c47" />
                                    <Skeleton height={15} width="100%" style={{ marginTop: '5px', background: '#1d232a' }} baseColor="#1d232a" highlightColor="#323c47" />
                                    <Skeleton height={15} width="100%" style={{ marginTop: '5px', background: '#1d232a' }} baseColor="#1d232a" highlightColor="#323c47" />
                                    <Skeleton height={15} width="100%" style={{ marginTop: '5px', background: '#1d232a' }} baseColor="#1d232a" highlightColor="#323c47" />
                                    <Skeleton height={15} width="100%" style={{ marginTop: '5px', background: '#1d232a' }} baseColor="#1d232a" highlightColor="#323c47" />
                                    <Skeleton height={15} width="100%" style={{ marginTop: '5px', background: '#1d232a' }} baseColor="#1d232a" highlightColor="#323c47" />
                                    <div className="text-center">
                                        <Skeleton height={15} width="20%" style={{ marginTop: '80px', background: '#1d232a' }} baseColor="#1d232a" highlightColor="#323c47" />
                                        <Skeleton height={15} width="30%" style={{ marginTop: '5px', background: '#1d232a' }} baseColor="#1d232a" highlightColor="#323c47" />
                                        <Skeleton height={15} width="40%" style={{ marginTop: '5px', background: '#1d232a' }} baseColor="#1d232a" highlightColor="#323c47" />
                                        <Skeleton height={15} width="40%" style={{ marginTop: '5px', background: '#1d232a' }} baseColor="#1d232a" highlightColor="#323c47" />
                                    </div>
                                </div>
                            )
                            : (
                                <div>
                                    <h1 className="text-center w-full py-6 text-2xl font-bold my-5">CGPA - {resultFull[0]?.cgpa} ({getGradeFromCGPA(resultFull[0]?.cgpa)})</h1>

                                    {/* Column headings */}
                                    <div className="grid grid-cols-9 font-bold text-center rsct:text-[12px]">
                                        <h2 className="col-span-2">Course ID</h2>
                                        <h2 className="col-span-4">Course Title</h2>
                                        <h2 className="col-span-1 text-center">Credit</h2>
                                        <h2 className="col-span-1 text-center">Grade</h2>
                                        <h2 className="col-span-1 text-center">Point</h2>
                                    </div>

                                    {/* Data rows */}
                                    {resultFull.map((r, index) => (
                                        <div className="grid grid-cols-9 mt-3 text-center  rsct:text-[12px]" key={index}>
                                            <h1 className="col-span-2">{r.customCourseId}</h1>
                                            <h1 className="col-span-4">{r.courseTitle}</h1>
                                            <h1 className="col-span-1 text-center">{r.totalCredit}</h1>
                                            <h1 className="col-span-1 text-center">{r.gradeLetter}</h1>
                                            <h1 className="col-span-1 text-center">{r.pointEquivalent}</h1>
                                        </div>
                                    ))}

                                    <h1 className="text-center mt-20">SGPA: {resultFull[0]?.cgpa} ({getGradeFromCGPA(resultFull[0]?.cgpa)})</h1>
                                    <h1 className="text-center">Remarks: {getRemarksFromCGPA(resultFull[0]?.cgpa)}</h1>
                                    <h1 className="text-center">Total Credit Taken: {calculateTotalCredits(resultFull)}</h1>
                                    <h1 className="text-center">Total Credit earned: {calculateCreditsForGrades(resultFull)}</h1>
                                </div>
                            )
                        }
                    </div>

                </>
            )}





        </div>
    );
};


ResultCard.propTypes = {
    sdata: PropTypes.object.isRequired,
    semester: PropTypes.string.isRequired,
}

export default ResultCard;
