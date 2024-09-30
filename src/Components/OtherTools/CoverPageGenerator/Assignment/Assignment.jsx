import { PDFDownloadLink } from "@react-pdf/renderer";
import { useContext, useEffect, useState } from "react";
import waterMark from "../../../../assets/wateramark.png";  // Replace with the correct path to your watermark image
import headerLogo from "../../../../assets/headerlogo.png";  // Replace with the correct path to your header logo
import AssignmentDocument from "./AssignmentDocument";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../../../Providers/AuthProvider";

const Assignment = () => {


    const [userInfo, setUserInfo] = useState(false);

    const [formData, setFormData] = useState({
        topicName: "",
        courseCode: "",
        courseTitle: "",
        teacherName: "",
        department: "",
        name: "",
        studentId: "",
        section: "",
        semester: "",
        yourDept: "",
        submissionDate: "",
        headerLogo: headerLogo,
        waterMark: waterMark,
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
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
                <title>Assignment | CSE P DIU</title>
            </Helmet>
            <h1 className="text-center text-2xl p-4 font-bold">
                Assignment Cover Page
            </h1>
            {!submitted ? (
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-3 sm:grid-cols-1 p-4 text-center justify-center items-center">
                        <div className="mt-10 flex flex-col p-2">
                            <label>
                                <h1 className="text-left">Topic</h1>
                                <input
                                    className="input input-bordered w-full "
                                    type="text"
                                    name="topicName"
                                    value={formData.topicName}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                        </div>
                        <div className="mt-10 flex flex-col p-2">
                            <label>
                                <h1 className="text-left">Course Code:</h1>
                                <input
                                    className="input input-bordered w-full "
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
                                    className="input input-bordered w-full "
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
                                    className="input input-bordered w-full "
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
                                    className="input input-bordered w-full "
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
                                    className="input input-bordered w-full "
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
                                    className="input input-bordered w-full "
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
                                    className="input input-bordered w-full "
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
                                    className="input input-bordered w-full "
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
                                    className="input input-bordered w-full "
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
                                    className="input input-bordered w-full "
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
                        <button className="btn" type="submit">Generate PDF</button>
                    </div>
                </form>
            ) : (
                <div className="flex items-center justify-center h-[30vw]">
                    <PDFDownloadLink
                        className="btn"
                        document={<AssignmentDocument formData={formData} />}
                        fileName={`Assignment_${formData.name}_${formData.studentId}_${formData.submissionDate}`}
                    >
                        {({ loading }) =>
                            loading ? <span className="loading loading-ring loading-lg"></span> : "Download PDF"
                        }
                    </PDFDownloadLink>
                </div>
            )}
            <div className="sm:mb-[60px]" />
        </div>
    );
};

export default Assignment;
