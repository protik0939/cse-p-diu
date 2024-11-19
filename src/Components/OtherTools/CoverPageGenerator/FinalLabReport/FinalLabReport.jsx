import { PDFDownloadLink, pdf } from "@react-pdf/renderer";
import { useContext, useEffect, useState } from "react";
import waterMark from "../../../../assets/wateramark.png";  // Replace with the correct path to your watermark image
import headerLogo from "../../../../assets/headerlogo.png";
import FinalLabReportDocument from "./FinalLabReportDocument";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../../../Providers/AuthProvider";

const FinalLabReport = () => {

    
    const currentDate = new Date();
    const day = currentDate.getDate().toString().padStart(2, '0'); // Ensures 2 digits for the day
    const month = currentDate.toLocaleString('en-US', { month: 'long' }); // Full month name
    const monthInInt = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear(); // Full year
    const yearLastTwo = currentDate.getFullYear().toString().slice(-2);
    const formattedDate = `${day} ${month}, ${year}`;

    const season = monthInInt >= 1 && monthInInt <= 6 ? 'Spring' : 'Fall';
    const seasonYear = `${season}-${yearLastTwo}`;

    const [userInfo, setUserInfo] = useState(false);

    const [formData, setFormData] = useState({
        courseCode: "",
        courseTitle: "",
        expNo: "",
        teacherName: "",
        department: "",
        name: "",
        studentId: "",
        section: "",
        semester: seasonYear,
        yourDept: "",
        submissionDate: formattedDate,
        headerLogo: headerLogo,
        waterMark: waterMark,
    });

    const [submitted, setSubmitted] = useState(false);
    const [pdfUrl, setPdfUrl] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        setSubmitted(true);

        const blob = await pdf(<FinalLabReportDocument formData={formData} />).toBlob();
        const url = URL.createObjectURL(blob);
        setPdfUrl(url);
    };

    const { user } = useContext(AuthContext);
    useEffect(() => {
        if (user?.uid) {
            fetch(`https://cse-p-diu-server.vercel.app/users/uid/${user?.uid}`)
                .then(res => res.json())
                .then(data => {
                    setUserInfo(data);
                    // console.log(data);

                    // Set formData fields explicitly
                    setFormData(prevFormData => ({
                        ...prevFormData,
                        name: userInfo?.name, // Update name explicitly
                        studentId: userInfo?.studentId,
                        section: `${userInfo?.batchNo}_${userInfo?.section}`, // Set section based on data
                    }));
                })
                .catch(error => {
                    console.log(`Something went wrong: ${error}`);
                });
        }
    }, [user?.uid, userInfo]);

    return (
        <div className="my-20">
            <Helmet>
                <title>Final Lab Report | CSE P DIU</title>
            </Helmet>
            {pdfUrl ? ''
                :
                <h1 className="text-center text-2xl p-4 font-bold">
                    Final Lab Report Cover Page
                </h1>}
            {!submitted ? (
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-3 p-4 sm:grid-cols-1 text-center justify-center items-center">
                        <div className="mt-10 flex flex-col p-2">
                            <label>
                                <h1 className="text-left">Course Code:</h1>
                                <input
                                    className="input input-bordered w-full"
                                    type="text"
                                    name="courseCode"
                                    value={formData.courseCode}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                        </div>
                        <div className="mt-10 flex flex-col p-2">
                            <label>
                                <h1 className="text-left">Course Title:</h1>
                                <input
                                    className="input input-bordered w-full"
                                    type="text"
                                    name="courseTitle"
                                    value={formData.courseTitle}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                        </div>
                        <div className="mt-10 flex flex-col p-2">
                            <label>
                                <h1 className="text-left">Teacher Name:</h1>
                                <input
                                    className="input input-bordered w-full"
                                    type="text"
                                    name="teacherName"
                                    value={formData.teacherName}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                        </div>
                        <div className="mt-10 flex flex-col p-2">
                            <label>
                                <h1 className="text-left">Teacher Department:</h1>
                                <input
                                    className="input input-bordered w-full"
                                    type="text"
                                    name="department"
                                    value={formData.department}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                        </div>
                        <div className="mt-10 flex flex-col p-2">
                            <label>
                                <h1 className="text-left">Your Name:</h1>
                                <input
                                    className="input input-bordered w-full"
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                        </div>
                        <div className="mt-10 flex flex-col p-2">
                            <label>
                                <h1 className="text-left">Student ID:</h1>
                                <input
                                    className="input input-bordered w-full"
                                    type="text"
                                    name="studentId"
                                    value={formData.studentId}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                        </div>
                        <div className="mt-10 flex flex-col p-2">
                            <label>
                                <h1 className="text-left">Section:</h1>
                                <input
                                    className="input input-bordered w-full"
                                    type="text"
                                    name="section"
                                    value={formData.section}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                        </div>
                        <div className="mt-10 flex flex-col p-2">
                            <label>
                                <h1 className="text-left">Semester:</h1>
                                <input
                                    className="input input-bordered w-full"
                                    type="text"
                                    name="semester"
                                    value={formData.semester}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                        </div>
                        <div className="mt-10 flex flex-col p-2">
                            <label>
                                <h1 className="text-left">Department:</h1>
                                <input
                                    className="input input-bordered w-full"
                                    type="text"
                                    name="yourDept"
                                    value={formData.yourDept}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                        </div>
                        <div className="mt-10 flex flex-col p-2">
                            <label>
                                <h1 className="text-left">Submission Date:</h1>
                                <input
                                    className="input input-bordered w-full"
                                    type="text"
                                    name="submissionDate"
                                    value={formData.submissionDate}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                        </div>
                    </div>

                    <div className="text-center mt-10">
                        <button className="mt-10 btn" type="submit">Generate PDF</button>
                    </div>
                </form>
            ) : (
                <div className="flex items-center justify-center h-[30vw]">
                    
                    {pdfUrl && (
                        <iframe
                            className="w-full h-screen top-0 fixed"
                            src={pdfUrl}
                            title="PDF Preview"
                        />
                    )}

                    <PDFDownloadLink
                        className="btn fixed bottom-10 left-10 sm:bottom-20"
                        document={<FinalLabReportDocument formData={formData} />}
                        fileName={`Final-Lab-Report_${formData.name}_${formData.studentId}_${formData.submissionDate}`}
                    >
                        {({ loading }) =>
                            loading ? <span className="flex space-x-2 justify-center items-center"><h1>Please Wait...</h1><span className="loading loading-ring loading-lg"/></span> : "Download PDF"
                        }
                    </PDFDownloadLink>
                </div>
            )}
            <div className="sm:mb-[60px]" />
        </div>
    );
};

export default FinalLabReport;
