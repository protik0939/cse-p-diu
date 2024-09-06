import { useState } from "react";
import { BiDownArrow, BiUpArrow } from "react-icons/bi";
import { IoLogOutOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const VideoLectures = () => {
    const [isChecked, setIsChecked] = useState(null);
    const [currentlyPlaying, setCurrentlyPlaying] = useState("mCmlobVDp3o");
    const [expandedLectures, setExpandedLectures] = useState(null);

    const courses_video = [

        {
            courseCode: "CSE311",
            courseTitle: "Database Management System",
            lectureVideos: [
                {
                    lecCode: "cse311-l0",
                    lecNo: "L-0",
                    lecName: "Introduction to Database 1",
                    subLectures: [
                        { type: "docs", title: "Lecture-0 Slide", id: "https://drive.google.com/file/d/1ylQh4BHNdF1npymAS3w-SgNgYjPFF1JB/view?usp=drive_link" },
                        { type: "video", title: "0-1 | What is data?", id: "pg12U1BAnoA" },
                        { type: "video", title: "0-2.1 | What is information?", id: "2AvIOzVJMCM" },
                        { type: "video", title: "0-2.2 | Characteristics of Informtation", id: "WiqWNUUCy50" },
                        { type: "video", title: "0-3.1 | What is metadata?", id: "L0vOg18ncWE" },
                        { type: "video", title: "0-3.2 | Categories of Metadata", id: "EQdW8upjlUI" },
                        { type: "video", title: "0-4 | Types of Data", id: "NirI_nTaIJQ" },
                        { type: "video", title: "0-5 | File System VS DBMS", id: "oznPOXyqn3w" },

                    ],
                },
                {
                    lecCode: "cse311-l1",
                    lecNo: "L-1",
                    lecName: "Data Integrity",
                    subLectures: [
                        { type: "docs", title: "Lecture-1 Slide", id: "https://drive.google.com/file/d/1m4iGcDRexh3Gd78ftB7iPZcuLZK1GGi3/view?usp=drive_link" },
                        { type: "video", title: "1-1 | Data Integrity and Types", id: "VA6-5AfW5bw" },
                    ],
                },
                {
                    lecCode: "cse311-l2",
                    lecNo: "L-2",
                    lecName: "Introduction to SQL",
                    subLectures: [
                        { type: "docs", title: "Lecture-2", id: "https://drive.google.com/file/d/1NBuAHNSRtsmMw-H06ztBN_HWYlhfY_pp/view?usp=drive_link" },
                        { type: "video", title: "2-1 | Basic SQL Concepts", id: "zsjvFFKOm3c" },
                        { type: "video", title: "2-2 | Types of Query Language", id: "vUj-kUEC_oA" },
                        { type: "video", title: "2-3.1 | Creating Table", id: "ZBkNHg3v5zs" },
                        { type: "video", title: "2-3.2 | Insert Data", id: "R4n0W7cS0_c" },
                        { type: "video", title: "2-3.3 | Selecting Data", id: "_rUYAQWn6q8" },
                        { type: "video", title: "2-3.4 | Updating Data", id: "MjI-1ZT68gM" },
                        { type: "video", title: "2-3.5 | Deleting Data", id: "N-71W3crRmM" },
                    ],
                },
                {
                    lecCode: "cse311-l3",
                    lecNo: "L-3",
                    lecName: "Data Mapping and Database Administrator",
                    subLectures: [
                        { type: "docs", title: "Lecture-3 & 4 Slide", id: "https://drive.google.com/file/d/1UpyC1RfIRMa5OyQ7_D9WADSBLf_mOy0w/view?usp=drive_link" },
                        { type: "video", title: "3-1 | What is data Mapping?", id: "g7DTd_jqPzs" },
                        { type: "video", title: "3-2.1 | Data Migration", id: "9L-L8dXP3MM" },
                        { type: "video", title: "3-2.2 | Data Migration", id: "Kq4QgbhkqyE" },
                        { type: "video", title: "3-2.3 | Data Transformation", id: "xwiJiXWg_Ps" },
                        { type: "video", title: "3-2.4 | Data Warehouse", id: "NphMcnU8ymU" },
                        { type: "video", title: "3-3 | DataBase Administrator", id: "fO5tDyOY5Fw" },
                    ],
                },
                {
                    lecCode: "cse311-l4",
                    lecNo: "L-4",
                    lecName: "ER Diagram",
                    subLectures: [
                        { type: "docs", title: "Lecture-3 & 4 Slide", id: "https://drive.google.com/file/d/1UpyC1RfIRMa5OyQ7_D9WADSBLf_mOy0w/view?usp=drive_link" },
                        { type: "video", title: "4-1 | ER Diagram", id: "G0XffHxohqY" },
                        { type: "video", title: "4-2 | ER Model", id: "gbVev8RuZLg" },
                        { type: "video", title: "4-3 | ER Diagram Symbols", id: "S4cBelRt2D8" },
                        { type: "video", title: "4-4 | Types of Entity", id: "3ia2B7W2ETY" },
                        { type: "video", title: "4-4 | Types of Attributes", id: "79XdTzaD7XI" },
                        { type: "video", title: "4-5.1 | Types of Relationship and one to one", id: "jHRfpEdNKQs" },
                        { type: "video", title: "4-5.2 | One to many and Many to one", id: "-f9jsqA3-IU" },
                        { type: "video", title: "4-5.3 | Many to many", id: "yCxixT7476g" },
                        { type: "video", title: "4-6.1 | ER Diagram Excercise (Part-1)", id: "l9BRmq7pgZ8" },
                        { type: "video", title: "4-6.2 | ER Diagram Excercise (Part-2)", id: "BexmtjyRp6I" },
                    ],
                },
            ],
        },

        {
            courseCode: "CSE335",
            courseTitle: "Computer Architecture and Organization",
            lectureVideos: [
                {
                    lecCode: "cse335-l1",
                    lecNo: "L-1",
                    lecName: "Computing and Computers",
                    subLectures: [
                        { type: "docs", title: "Lecture-1 Slide", id: "https://docs.google.com/presentation/d/1SjOxFoq0IT2zSmFcOHwIP3GO63m5pw8u/edit?usp=sharing&ouid=102067286472980191666&rtpof=true&sd=true" },
                        { type: "video", title: "1-1 | Full Computing and Computers", id: "N2yBfBLYT8Q" },
                        
                    ],
                },
                {
                    lecCode: "cse335-l2",
                    lecNo: "L-2",
                    lecName: "Evolution of Computers",
                    subLectures: [
                        { type: "docs", title: "Lecture-2 Slide", id: "https://docs.google.com/presentation/d/1Sb9hOY4CCdFbC5NrRgaweFj-qhcwk-DH/edit?usp=sharing&ouid=102067286472980191666&rtpof=true&sd=true" },
                        { type: "video", title: "2-1 | Mechanical & Electronic Computer", id: "q3jOzHAuvTE" },
                        { type: "video", title: "2-2 | Generations of Computers", id: "NqgpZ_v4Ne8" },
                        
                    ],
                },
                {
                    lecCode: "cse335-l3",
                    lecNo: "L-3",
                    lecName: "Design Methodology",
                    subLectures: [
                        { type: "docs", title: "Lecture-3 Slide", id: "https://docs.google.com/presentation/d/1Xg7MUhVodR3L_K42f42QLMaBmAsHCx7F/edit?usp=sharing&ouid=102067286472980191666&rtpof=true&sd=true" },
                        { type: "video", title: "3-1 | System design, representation and Versus Behaviour", id: "sCFuTXhaLcE" },
                        { type: "video", title: "3-2 | Hardware description language", id: "nXAqlXCYgFQ" },
                        { type: "video", title: "3-3 | The Gate Level", id: "9_C8kl6q6BQ" },
                        { type: "video", title: "3-4 | The Processor Level", id: "ftjtQIxM0N4" },
                        { type: "video", title: "3-5 | Full Design Methodology", id: "D2cm8LED1bg" },
                    ],
                },
            ],
        },

    ];

    const handleToggleCourse = (courseCode) => {
        setIsChecked((prevState) => (prevState === courseCode ? null : courseCode));
        setExpandedLectures(null); // Close all lectures when switching courses
    };

    const handleToggleLecture = (lecCode) => {
        setExpandedLectures((prevState) => (prevState === lecCode ? null : lecCode));
    };

    return (
        <div>
            <div className="h-screen w-full pt-[65px]">
                <div className=" h-full w-full flex sm:flex-col p-1">
                    <div className="w-1/2 h-full sm:h-1/2 sm:w-full">
                        <iframe
                            className="w-full h-full rounded-lg"
                            src={`https://www.youtube.com/embed/${currentlyPlaying}?autoplay=1&rel=0`}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"
                            allowFullScreen
                        ></iframe>
                    </div>

                    <div className="space-y-2 w-1/2 sm:w-full h-auto p-4 overflow-y-auto">
                        {courses_video.map((course) => (
                            <div key={course.courseCode} className="bg-gray-800 collapse">
                                <input
                                    type="checkbox"
                                    className="peer"
                                    checked={isChecked === course.courseCode}
                                    onChange={() => handleToggleCourse(course.courseCode)}
                                />
                                <div className="collapse-title bg-grey-800 text-neutral-50 peer-checked:bg-gray-500 peer-checked:text-neutral-50">
                                    <div className="flex justify-between items-center">
                                        <div>
                                            {course.courseTitle} ({course.courseCode})
                                        </div>
                                        <div>
                                            {isChecked === course.courseCode ? <BiUpArrow /> : <BiDownArrow />}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col space-y-2 collapse-content text-neutral-50 bg-gray-500 peer-checked:text-neutral-50 overflow-y-auto peer-checked:h-fit">
                                    {isChecked === course.courseCode &&
                                        course.lectureVideos.map((vidList) => (
                                            <div key={vidList.lecNo} className="bg-gray-800 collapse">
                                                <input
                                                    type="checkbox"
                                                    className="peer"
                                                    checked={expandedLectures === vidList.lecCode}
                                                    onChange={() => handleToggleLecture(vidList.lecCode)}
                                                />
                                                <div className="collapse-title bg-grey-900 text-neutral-50 peer-checked:bg-gray-700 peer-checked:text-neutral-50">
                                                    <div className="flex justify-between items-center">
                                                        <div>
                                                            {vidList.lecNo} - {vidList.lecName}
                                                        </div>
                                                        <div>
                                                            {expandedLectures === vidList.lecCode ? (
                                                                <BiUpArrow />
                                                            ) : (
                                                                <BiDownArrow />
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col space-y-2 collapse-content text-neutral-50 bg-gray-800 peer-checked:bg-gray-700 peer-checked:text-neutral-50">
                                                    {expandedLectures === vidList.lecCode &&
                                                        vidList.subLectures.map((subLecture, index) => (
                                                            subLecture.type === "video" ? (
                                                                <button
                                                                    key={index}
                                                                    className="btn w-full text-left"
                                                                    onClick={() => setCurrentlyPlaying(subLecture.id)}
                                                                >
                                                                    <div className="flex items-center space-x-4">
                                                                        <div>{subLecture.title}</div>
                                                                        {subLecture.id === currentlyPlaying && (
                                                                            <span className="loading loading-bars loading-xs"></span>
                                                                        )}
                                                                    </div>
                                                                </button>
                                                            ) : subLecture.type === "docs" ? (
                                                                <Link to={subLecture.id}
                                                                    key={index}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="btn btn-accent w-full text-left"
                                                                >
                                                                    <div className="flex items-center space-x-4">
                                                                        <div>{subLecture.title}</div>
                                                                        <IoLogOutOutline /> {/* Example icon for docs */}
                                                                    </div>
                                                                </Link>
                                                            ) : null
                                                        ))}
                                                </div>
                                            </div>
                                        ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoLectures;
