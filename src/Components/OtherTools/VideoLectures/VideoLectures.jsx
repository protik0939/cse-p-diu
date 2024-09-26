import { useState } from "react";
import { Helmet } from "react-helmet";
import { BiDownArrow, BiUpArrow } from "react-icons/bi";
import { IoLogOutOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const VideoLectures = () => {
    const [isChecked, setIsChecked] = useState(null);
    const [currentlyPlaying, setCurrentlyPlaying] = useState("");
    const [expandedLectures, setExpandedLectures] = useState(null);

    const courses_video = [
        
        {
            courseCode: "CSE221",
            courseTitle: "Object Oriented Programming - II",
            lectureVideos: [
                {
                    lecCode: "cse221-l1",
                    lecNo: "L-1",
                    lecName: "Introduction to Python Programming",
                    subLectures: [
                        { type: "docs", title: "Lecture-1 Slide", id: "https://drive.google.com/file/d/1A-Og7PWCyrk2PG91nqOgKw6EW2qbb7gT/view?usp=drive_link" },
                        { type: "video", title: "1.1 | Introduction and History of python", id: "Ri1Lgdew8Ds" },
                        { type: "video", title: "1.2 | Environment Setup (Optional)", id: "31QmsNeiDKI" },
                        { type: "video", title: "1.3 | Syntax of Python", id: "eol9EzchLbA" },
                        { type: "video", title: "1.4 | Variables in Python", id: "rvnp9F9dB1U" },
                        { type: "video", title: "1.5 | Operators", id: "6QOH6auuAUs" },
                        { type: "video", title: "1.6 | Python User Input", id: "KtozLrR_0X8" },
                    ],
                },
                {
                    lecCode: "cse221-l2",
                    lecNo: "L-2",
                    lecName: "Control Statements in Python",
                    subLectures: [
                        { type: "docs", title: "Lecture-2 Slide", id: "https://drive.google.com/file/d/1MbHhjW9rxcfDi1BLQHU0O9ov49X6Cvyb/view?usp=sharing" },
                        { type: "video", title: "2.1 | Introduction and History of python", id: "gkV14SRCD-4" },
                    ],
                },
                {
                    lecCode: "cse221-l3",
                    lecNo: "L-3",
                    lecName: "Python Function",
                    subLectures: [
                        { type: "docs", title: "Lecture-3 Slide", id: "https://drive.google.com/file/d/13L24aVk2DE9JY49c_s_P8mHJzbVXLSN4/view?usp=drive_link" },
                        { type: "video", title: "3.1 | Python Functions", id: "wLie11bgbSI" },
                    ],
                },
                {
                    lecCode: "cse221-l4",
                    lecNo: "L-4",
                    lecName: "Python Function",
                    subLectures: [
                        { type: "docs", title: "Lecture-4 Slide", id: "https://drive.google.com/file/d/1cghMuoU8AdJdTeJCyVX5hWnWHYY2C7_K/view?usp=sharing" },
                        { type: "video", title: "4.1 | Python Sequences", id: "lFi3aenAfZU" },
                    ],
                },
            ],
        },
        
        {
            courseCode: "CSE315",
            courseTitle: "Introduction to data science",
            lectureVideos: [
                {
                    lecCode: "cse315-l1",
                    lecNo: "W-1 L-1",
                    lecName: "Introduction to Data Science",
                    subLectures: [
                        { type: "docs", title: "W1L1 Slide", id: "https://docs.google.com/presentation/d/1unwBEhGBsl9R_ZYPGuZ-nCsAxtypoqiH/edit?usp=sharing&ouid=107570650630946017419&rtpof=true&sd=true" },
                        { type: "video", title: "1-1 | What is data science?", id: "uIUvpJdYgSA" },
                        { type: "video", title: "1-2 | Data vs Information", id: "yFSEf6TOzDQ" },
                        { type: "video", title: "1-3 | AI vs ML vs DL vs DS", id: "k2P_pHQDlp0" },
                        { type: "video", title: "1-4 | Data Science Life Cycle", id: "4Cp6PkBKqX4" },
                    ],
                },
                {
                    lecCode: "cse315-l2",
                    lecNo: "W-1 L-2",
                    lecName: "Introduction to data",
                    subLectures: [
                        { type: "docs", title: "W1L2 Slide", id: "https://docs.google.com/presentation/d/11SbXfJFTS4_Aj0PiHMYErIZfotOSE_Q5/edit?usp=sharing&ouid=107570650630946017419&rtpof=true&sd=true" },
                        { type: "video", title: "2-1 | Types of Variables", id: "FqB5Es1HXI4" },
                        { type: "video", title: "2-2 | Four Measurement Levels", id: "LuBD49SFpWs" },
                        { type: "video", title: "2-3 | Sources of data collection", id: "caUiRsg5M6k" },
                    ],
                },
                {
                    lecCode: "cse315-l3",
                    lecNo: "W-2 L1",
                    lecName: "Python in data science",
                    subLectures: [
                        { type: "docs", title: "W2L1 Slide", id: "https://docs.google.com/presentation/d/1MMocvW8o6IL1aOP-WoJ0Hj5zAyKOu2u0/edit?usp=sharing&ouid=107570650630946017419&rtpof=true&sd=true" },
                        { type: "video", title: "3-1 | Data Science With Python", id: "mkv5mxYu0Wk" },
                    ],
                },
                {
                    lecCode: "cse315-l4",
                    lecNo: "W-2 L-2",
                    lecName: "Introduction to Statistics and Sampling Methods",
                    subLectures: [
                        { type: "docs", title: "W2L2 Slide", id: "https://docs.google.com/presentation/d/1METkwI6DYS0_Y5rsQ6zRMIivQocy1g__/edit?usp=sharing&ouid=107570650630946017419&rtpof=true&sd=true" },
                        { type: "video", title: "4-1 | Statistics and it's types", id: "IngKIlvpg3s" },
                        { type: "video", title: "4-2 | Population, Sample and Sampling methods", id: "fSmedyVv-Us" },
                        { type: "video", title: "4-3 | Census Method Vs Sample Method", id: "BbrRT1jA9Hk" },
                    ],
                },
                {
                    lecCode: "cse315-l5",
                    lecNo: "W-3 L-1",
                    lecName: "Descriptive Statistics: Centre and Spread",
                    subLectures: [
                        { type: "docs", title: "W3L1 Slide", id: "https://docs.google.com/presentation/d/1MZF1P3Jz0bIBysvznqRSfSO6v4cnFEsy/edit?usp=sharing&ouid=107570650630946017419&rtpof=true&sd=true" },
                        { type: "video", title: "5-1 | Mean, Median, Mode", id: "k3aKKasOmIw" },
                        { type: "video", title: "5-2 | Types of mean (AM, GM, HM)", id: "ehfJvMCpN44" },
                        { type: "video", title: "5-3 | Range, variance and standard deviation as measures of dispersion", id: "E4HAYd0QnRc" },
                        { type: "video", title: "5-3 | More measures of dispersion", id: "vJ8pI8UEUjA" },
                    ],
                },
                {
                    lecCode: "cse315-l6",
                    lecNo: "W-3 L-2",
                    lecName: "Descriptive Statistics (cont): Shape Relative standing and outlier",
                    subLectures: [
                        { type: "docs", title: "W3L2 Slide", id: "https://docs.google.com/presentation/d/11_99Kw6rFZrctPV2jSo5oVhFGjrY3KJb/edit?usp=sharing&ouid=107570650630946017419&rtpof=true&sd=true" },
                        { type: "video", title: "6-1 | Skewness & Kurtosis", id: "r2jPm9NhaUE" },
                    ],
                },
            ],
        },

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
                        { type: "docs", title: "Lecture-1.0 Slide", id: "https://drive.google.com/file/d/1m4iGcDRexh3Gd78ftB7iPZcuLZK1GGi3/view?usp=drive_link" },
                        { type: "docs", title: "Lecture-1.1 Slide", id: "https://drive.google.com/file/d/1qcJjZ_yRxV6PAKk0xqDm1lxhT0kO-GpZ/view?usp=drive_link" },
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
                {
                    lecCode: "cse311-l5",
                    lecNo: "L-5",
                    lecName: "Introduction to Relational Algebra",
                    subLectures: [
                        { type: "docs", title: "Lecture-5", id: "https://drive.google.com/file/d/1QMr64wqAQUfZQV_NqsSqsj4n3lasCAZu/view?usp=drive_link" },
                        { type: "video", title: "5-1 | Relational Algebra", id: "BeRa_U0N9tU" },
                        { type: "video", title: "5-2 | Selection Operator", id: "iEyy3TbGLd0" },
                        { type: "video", title: "5-3 | Projection Operator", id: "vrmfMQchf04" },
                        { type: "video", title: "5-4 | Union Operator", id: "xnOC0wN8rpg" },
                        { type: "video", title: "5-5 | Set Intersection Operation", id: "5IjEMcf8kF0" },
                        { type: "video", title: "5-6 | Set Difference Operation", id: "XcLa3KsCHZU" },
                        { type: "video", title: "5-7 | Cartesian Product / Cross Product", id: "7m0FAQyF_-c" },
                        { type: "video", title: "5-8.1 | Introduction to joins", id: "YQ7XVAzBv2M" },
                        { type: "video", title: "5-8.2 | Natural Join", id: "egJBfCkIfag" },
                        { type: "video", title: "5-8.3 | Left Outer Join", id: "tCvZi85gjxg" },
                        { type: "video", title: "5-8.4 | Right Outer Join", id: "amN_F1uO87g" },
                        { type: "video", title: "5-8.5 | Full Outer Join", id: "poksQkBP5nk" },
                        { type: "video", title: "5-9 | Set Functions Or Aggregation Functions", id: "PmVkc95BsuA" },
                    ],
                },
                {
                    lecCode: "cse311-l6",
                    lecNo: "L-6",
                    lecName: "Data Modeling Using the Entity-Relationship (ER) Model",
                    subLectures: [
                        { type: "docs", title: "Lecture-6", id: "https://drive.google.com/file/d/1aapgjltMSPe5JbFjGI63_OGk_OTpvAPX/view?usp=drive_link" },
                        { type: "video", title: "6-1 | ER Diagram Introduction", id: "G0XffHxohqY" },
                        { type: "video", title: "6-2 | Symbols of ER Diagram", id: "S4cBelRt2D8" },
                        { type: "video", title: "6-3 | Symbols of ER Diagram", id: "S4cBelRt2D8" },
                        { type: "video", title: "6-4 | Types of Entity", id: "3ia2B7W2ETY" },
                        { type: "video", title: "6-5 | Types of Attributes", id: "79XdTzaD7XI" },
                        { type: "video", title: "6-6.1 | Types of Relationship | One to One", id: "jHRfpEdNKQs" },
                        { type: "video", title: "6-6.2 | Types of Relationship | One to Many | Many to One", id: "-f9jsqA3-IU" },
                        { type: "video", title: "6-6.3 | Types of Relationship | Many to Many", id: "yCxixT7476g" },
                        { type: "video", title: "6-7 | Degree of Relationship", id: "gpcnyLSoppk" },
                        { type: "video", title: "6-8 | Participation Constraints", id: "-t63uwNJNJw" },
                        { type: "video", title: "6-9 | Relational Model", id: "lbTiI2KZVBQ" },
                        { type: "video", title: "6-10 | Full Chapter", id: "KQP8PBzFQzw" },
                        { type: "video", title: "6-11 | Full Chapter (Another Video)", id: "5hZoHU_sYBk" },
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

        {
            courseCode: "CSE313",
            courseTitle: "Computer Networks",
            lectureVideos: [
                {
                    lecCode: "cse313-l1",
                    lecNo: "L-1",
                    lecName: "Network Models &  Protocol Architectures",
                    subLectures: [
                        { type: "docs", title: "Lecture-1 Slide", id: "https://docs.google.com/presentation/d/1fNGewoqa7FEcnC7rh25h2ZgOgbvujb6W/edit?usp=sharing&ouid=102067286472980191666&rtpof=true&sd=true" },
                        { type: "video", title: "1-1 | Layering", id: "FewtLNsjtRA" },
                        { type: "video", title: "1-2.1 | The OSI Reference Model (Part 1)", id: "qBXmbJZQ5rY" },
                        { type: "video", title: "1-2.2 | The OSI Reference Model (Part 2)", id: "xiGgrQioF2E" },
                        { type: "video", title: "1-2.3 | The OSI Reference Model (Part 3)", id: "oQzueBVyAM4" },
                        { type: "video", title: "1-2.4 | The OSI Reference Model (Part 4)", id: "XI8kMBMMS6o" },
                        { type: "video", title: "1-3 | Addressing in network", id: "yDTC6sbYFFE" },
                    ],
                },
                {
                    lecCode: "cse313-l2",
                    lecNo: "L-2",
                    lecName: "Network Layer: IPv4 Functions",
                    subLectures: [
                        { type: "docs", title: "Lecture-2 Slide", id: "https://docs.google.com/presentation/d/12o6kvztISXPDVE_egH2gU_I-kXwTEpnV/edit?usp=sharing&ouid=102067286472980191666&rtpof=true&sd=true" },
                        { type: "video", title: "2-1 | The Network Layer & functions", id: "FewtLNsjtRA" },
                        { type: "video", title: "2-2.1 | Datagram Network", id: "n1f0iGNVGps" },
                        { type: "video", title: "2-2.2 | Virtual Circuits", id: "naN6LNPBHAs" },
                        { type: "video", title: "2-3 | IPV4 Datagram Format", id: "Yf0b6yn5IGA" },
                        { type: "video", title: "2-4.1 | IPV4 Fragmentation and Reassembly", id: "v50UVJ10_po" },
                        { type: "video", title: "2-4.2 | IPV4 Fragmentation and Reassembly Examples", id: "jueq0YLE8Qg" },
                        { type: "video", title: "2-5.1 | ICMP", id: "xTqtm7-k25o" },
                        { type: "video", title: "2-5.2 | Ping and Traceout", id: "vJV-GBZ6PeM" },
                        { type: "video", title: "2-5.3 | Traceout Explained", id: "up3bcBLZS74" },
                    ],
                },
                {
                    lecCode: "cse313-l3",
                    lecNo: "L-2",
                    lecName: "Network Layer: IPv4 Addressing",
                    subLectures: [
                        { type: "docs", title: "Lecture-3 Slide", id: "https://docs.google.com/presentation/d/1GRQ1RNcUHnX7nYbIKHh6nrSVz92vnC5O/edit?usp=sharing&ouid=102067286472980191666&rtpof=true&sd=true" },
                        { type: "video", title: "3-1 | IPv4 Addressing (Sir's video)", id: "bzlsrfOeU-w" },
                        { type: "video", title: "3-2 | FLSM And VLSM", id: "APnuoYI6tWQ" },
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
        <Helmet>
        <title>Video Lectures | CSE P DIU</title>
        <meta property="og:title" content="Video Lectures | CSE P DIU" />
        <meta property="og:description" content="Video Lectures for better preparation with slides" />
        <meta property="og:image" content="https://i.ibb.co.com/7RTDG10/Pngtree-network-teaching-online-learning-illustration-6183356.png" />
        <meta property="og:url" content="https://cse-p-diu.web.app/videolectures" />
        <meta property="og:type" content="web application" />

        <meta name="twitter:card" content="Video Lectures for better preparation with slides" />
        <meta name="twitter:title" content="Video Lectures | CSE P DIU" />
        <meta name="twitter:description" content="Video Lectures for better preparation with slides" />
        <meta name="twitter:image" content="https://i.ibb.co.com/7RTDG10/Pngtree-network-teaching-online-learning-illustration-6183356.png" />
      </Helmet>
            <div className="h-screen w-full pt-[65px]">
                <div className=" h-full w-full flex sm:flex-col p-1">
                    <div className="w-1/2 h-full sm:h-1/2 sm:w-full">
                        {currentlyPlaying ?
                            <iframe
                                className="w-full h-full rounded-lg"
                                src={`https://www.youtube.com/embed/${currentlyPlaying}?autoplay=1&rel=0`}
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"
                                allowFullScreen
                            ></iframe>
                            :
                            <div className="w-full h-full flex flex-col justify-center items-center">
                                <div className="w-[70%] relative flex items-center justify-center">
                                    <img className="w-full" src="https://i.ibb.co.com/7RTDG10/Pngtree-network-teaching-online-learning-illustration-6183356.png" alt="" />
                                    <h1 className="absolute font-bold text-[#49b863] bg-slate-950/80 p-2 rounded-full backdrop-blur-sm">Select Topic to see video</h1>
                                </div>
                            </div>}
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
            <div className="sm:mb-[60px]" />
        </div>
    );
};

export default VideoLectures;
