import { useState } from "react";
import { Helmet } from "react-helmet";
import { BiDownArrow, BiUpArrow } from "react-icons/bi";
import { IoLogOutOutline } from "react-icons/io5";
import { Link } from "react-router-dom";


const courses_video = [
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
                lecNo: "W-2 L-1",
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
                    { type: "video", title: "6-2 | Outlier and Z-score (sir's record)", id: "XYLjXbcDCfw" },
                ],
            },
            {
                lecCode: "cse315-l7",
                lecNo: "W-4 L-1",
                lecName: "Bivariate Analysis: Correlation and Simple Linear Regression Analysis",
                subLectures: [
                    { type: "docs", title: "W4L1 Slide", id: "https://docs.google.com/presentation/d/12CvnhZ2-DVKFZK1Tx3jfm8m7eWMFgLz_/edit?usp=sharing&ouid=107570650630946017419&rtpof=true&sd=true" },
                    { type: "video", title: "7-1 | Bivariate Data", id: "https://drive.google.com/file/d/1Ny6NEU0SWOMeysuOjhJljfEKtehMbjOs/view?usp=sharing" },
                    { type: "video", title: "7-2 | Correlation Vs Regression", id: "Ou2QGSJVd0U" },
                    { type: "video", title: "7-3 | Correlation Coefficient", id: "11c9cs6WpJU" },
                    { type: "video", title: "7-4 | Simple Linear Regression", id: "owI7zxCqNY0" },
                ],
            },
            {
                lecCode: "cse315-l8",
                lecNo: "W-4 L-2",
                lecName: "Naive Bayes",
                subLectures: [
                    { type: "docs", title: "W4L2 Slide", id: "https://drive.google.com/file/d/1PZ5CT_OcqpATrB2nEAn9P55eEUwX3y9Q/view?usp=sharing" },
                    { type: "classnote", title: "W4L2 | Sir's Class Note", id: "https://drive.google.com/file/d/1Ny6NEU0SWOMeysuOjhJljfEKtehMbjOs/view?usp=sharing" },
                    { type: "video", title: "8-1 | Full Naive Bayes(Important for mid)", id: "GBMMtXRiQX0" },
                ],
            },
        ],
    },

    {
        courseCode: "CSE311",
        courseTitle: "Database Management System",
        lectureVideos: [
            {
                lecCode: "cse311-l1",
                lecNo: "L-1",
                lecName: "Introduction to Databases",
                subLectures: [
                    { type: "docs", title: "Lecture-1 Slide", id: "https://drive.google.com/file/d/1EGEpQqEcF2In9QPrD1MrLBr4yWxusWf9/view?usp=sharing" },
                    { type: "video", title: "1-1 | Introduction to DBMS", id: "T7AxM7Vqvaw" },
                    { type: "video", title: "Ei pdf er onek kichu pore repeat hoise. So video porer gulay ase.", id: "disabled" },
                ],
            },
            {
                lecCode: "cse311-l2",
                lecNo: "L-2",
                lecName: "Data Modeling Using the Entity-Relationship (ER) Model",
                subLectures: [
                    { type: "docs", title: "Lecture-2 Slide", id: "https://drive.google.com/file/d/1Ac8UMRR43keSdVn-0S4ZNv_8nb5SkeDz/view?usp=sharing" },
                    { type: "video", title: "1-1 | Data Integrity and Types (Full Slide)", id: "KQP8PBzFQzw" },
                    { type: "video", title: "1-2.1 | ER Diagram", id: "G0XffHxohqY" },
                    { type: "video", title: "1-2.2 | ER Model", id: "gbVev8RuZLg" },
                    { type: "video", title: "1-2.3 | ER Diagram Symbols", id: "S4cBelRt2D8" },
                    { type: "video", title: "1-3 | Types of Entity", id: "3ia2B7W2ETY" },
                    { type: "video", title: "1-4 | Types of Attributes", id: "79XdTzaD7XI" },
                    { type: "video", title: "1-5.1 | Types of Relationship and one to one", id: "jHRfpEdNKQs" },
                    { type: "video", title: "1-5.2 | One to many and Many to one", id: "-f9jsqA3-IU" },
                    { type: "video", title: "1-5.3 | Many to many", id: "yCxixT7476g" },
                    { type: "video", title: "1-6.1 | ER Diagram Excercise (Part-1)", id: "l9BRmq7pgZ8" },
                    { type: "video", title: "1-6.2 | ER Diagram Excercise (Part-2)", id: "BexmtjyRp6I" },
                ],
            },
            {
                lecCode: "cse311-l3",
                lecNo: "L-3",
                lecName: "Introduction to Relational Algebra",
                subLectures: [
                    { type: "docs", title: "Lecture-3 Slide", id: "https://drive.google.com/file/d/1DN4n9ULeEupOUUucDuC2xf7VcMmaOMOv/view?usp=sharing" },
                    { type: "video", title: "3-1 | Relational Algebra", id: "BeRa_U0N9tU" },
                    { type: "video", title: "3-2 | Selection Operator", id: "iEyy3TbGLd0" },
                    { type: "video", title: "3-3 | Projection Operator", id: "vrmfMQchf04" },
                    { type: "video", title: "3-4 | Union Operator", id: "xnOC0wN8rpg" },
                    { type: "video", title: "3-5 | Set Intersection Operation", id: "5IjEMcf8kF0" },
                    { type: "video", title: "3-6 | Set Difference Operation", id: "XcLa3KsCHZU" },
                    { type: "video", title: "3-7 | Cartesian Product / Cross Product", id: "7m0FAQyF_-c" },
                    { type: "video", title: "3-8.1 | Introduction to joins", id: "YQ7XVAzBv2M" },
                    { type: "video", title: "3-8.2 | Natural Join", id: "egJBfCkIfag" },
                    { type: "video", title: "3-8.3 | Left Outer Join", id: "tCvZi85gjxg" },
                    { type: "video", title: "3-8.4 | Right Outer Join", id: "amN_F1uO87g" },
                    { type: "video", title: "3-8.5 | Full Outer Join", id: "poksQkBP5nk" },
                    { type: "video", title: "3-9 | Set Functions Or Aggregation Functions", id: "PmVkc95BsuA" },
                ],
            },
            {
                lecCode: "cse311-l4",
                lecNo: "L-4",
                lecName: "Normaliaztion",
                subLectures: [
                    { type: "docs", title: "Lecture-4 Slide", id: "https://drive.google.com/file/d/1iMl5E30UWSMwe1hUr2RmSpe8A_RJEJsH/view?usp=sharing" },
                    { type: "video", title: "4-1.1 | Normalization", id: "aZxGX65Uivc" },
                    { type: "video", title: "4-1.2 | First Normal Form (1NF)", id: "pPLIhlzPH0g" },
                    { type: "video", title: "4-1.3 | Second Normal Form (2NF)", id: "k9sCMi5JRHQ" },
                    { type: "video", title: "4-1.4 | Third Normal Form (3NF)", id: "m8mySyouOxo" },
                    { type: "video", title: "4-1.5 | Fourth Normal Form (4NF)(Less Imp for mid)", id: "EHuzi27ERGc" },
                    { type: "video", title: "4-1.6 | Fifth Normal Form (5NF)(Less Imp for mid)", id: "gJvjNxPj3ug" },
                ],
            },
            {
                lecCode: "cse311-l5",
                lecNo: "L-5",
                lecName: "Basic SQL Queries",
                subLectures: [
                    { type: "docs", title: "Lecture-5 Slide", id: "https://drive.google.com/file/d/1_L12jY5ly6Bh_QN2qN2HWosQFpFFWmXz/view?usp=sharing" },
                    { type: "video", title: "5-1 | Basic SQL Concepts", id: "zsjvFFKOm3c" },
                    { type: "video", title: "5-2 | Types of Query Language", id: "vUj-kUEC_oA" },
                    { type: "video", title: "5-3 | Create Database", id: "GqQN1_Aa1F8" },
                    { type: "video", title: "5-4.1 | Creating Table", id: "ZBkNHg3v5zs" },
                    { type: "video", title: "5-4.2 | Insert Data", id: "R4n0W7cS0_c" },
                    { type: "video", title: "5-4.3 | Selecting Data", id: "_rUYAQWn6q8" },
                    { type: "video", title: "5-4.4 | Updating Data", id: "MjI-1ZT68gM" },
                    { type: "video", title: "5-4.5 | Deleting Data", id: "N-71W3crRmM" },
                    { type: "video", title: "5-4.6 | Drop Table", id: "K7fFETZJucM" },
                    { type: "video", title: "5-5.1 | Where Clause", id: "SJF3uoIfsKY" },
                    { type: "video", title: "5-5.2 | Order By Clause", id: "LSv926kk1fo" },
                    { type: "video", title: "5-6.1 | And Operator", id: "k_uFo1dqRiA" },
                    { type: "video", title: "5-6.2 | Or Operator", id: "q19CWNEMjCM" },
                    { type: "video", title: "5-6.3 | Not Operator", id: "Xd_VWhuxuKo" },
                    { type: "video", title: "5-6.4 | In Operator", id: "qZz6q06wsMY" },
                    { type: "video", title: "5-6.5 | Like Operator", id: "4Ut4Oxxz8xI" },
                    { type: "video", title: "5-6.6 | Between Operator", id: "6_xDYOcT3Tk" },
                    { type: "video", title: "5-7.1 | MAX() function", id: "lHUVz-KCpCw" },
                    { type: "video", title: "5-7.2 | MIN() function", id: "AajnPyePRfw" },
                    { type: "video", title: "5-7.3 | SUM() function", id: "bxDCnGJwZbg" },
                    { type: "video", title: "5-7.4 | AVG() function", id: "6j4Cv6_PygI" },
                    { type: "video", title: "5-7.5 | COUNT() function", id: "XxwZB6mdgLU" },
                    { type: "video", title: "5-8 | Select Distinct", id: "7IINNnv-TPc" },
                ],
            },
            {
                lecCode: "cse311-l6",
                lecNo: "L-6",
                lecName: "SQL CRUD Operation",
                subLectures: [
                    { type: "docs", title: "Lecture-6", id: "https://drive.google.com/file/d/1i_m8uZwwxzWHdhLvP0hBKuzZyEduMtHU/view?usp=sharing" },
                    { type: "video", title: "6-1 | SQL CRUD Operation", id: "M21rXLWOnFs" },
                ],
            },
            {
                lecCode: "cse311-l7",
                lecNo: "L-7",
                lecName: "Index_Transction (Less imp for mid)",
                subLectures: [
                    { type: "docs", title: "Lecture-7 Slide", id: "https://drive.google.com/file/d/1aapgjltMSPe5JbFjGI63_OGk_OTpvAPX/view?usp=drive_link" },
                    { type: "video", title: "7-1 | File Organization & Indexing, Fixed & Variable length records", id: "stMNJDDmPI0" },
                    { type: "video", title: "7-2.1 | Query Processing and Optimization part-1:Processing", id: "Sn_Wkf9KNEg" },
                    { type: "video", title: "7-2.2 | Query Processing and Optimization part-2:Optimization", id: "uGMnOgOSmmI" },
                ],
            },
            {
                lecCode: "cse335-moreSlides",
                lecNo: "More Slides",
                lecName: "more slides by sir",
                subLectures: [
                    { type: "docs", title: "Click here to view all", id: "https://drive.google.com/drive/folders/1v3Xk7U6G29OjJjlLgg1Z_J2rjWNCaxsT?usp=drive_link" },
                ],
            },
            {
                lecCode: "cse335-lbonus",
                lecNo: "Chil Tapak Dam Dam",
                lecName: "A Full Video",
                subLectures: [
                    { type: "video", title: "A Complete video on DBMS (05:33:30)", id: "YRnjGeQbsHQ" },
                    { type: "video", title: "Another Complete video on DBMS (05:36:33)", id: "jzuzxEFoiss" },
                ],
            },
        ],
    },

    {
        courseCode: "CSE313",
        courseTitle: "Computer Networks",
        lectureVideos: [
            {
                lecCode: "cse313-w1l1",
                lecNo: "W-1 L-1",
                lecName: "Network Models &  Protocol Architectures",
                subLectures: [
                    { type: "docs", title: "Week-1 Lecture-1 Slide", id: "https://docs.google.com/presentation/d/1fNGewoqa7FEcnC7rh25h2ZgOgbvujb6W/edit?usp=sharing&ouid=102067286472980191666&rtpof=true&sd=true" },
                    { type: "video", title: "1.1-1 | Layering", id: "FewtLNsjtRA" },
                    { type: "video", title: "1.1-2.1 | The OSI Reference Model (Part 1)", id: "qBXmbJZQ5rY" },
                    { type: "video", title: "1.1-2.2 | The OSI Reference Model (Part 2)", id: "xiGgrQioF2E" },
                    { type: "video", title: "1.1-2.3 | The OSI Reference Model (Part 3)", id: "oQzueBVyAM4" },
                    { type: "video", title: "1.1-2.4 | The OSI Reference Model (Part 4)", id: "XI8kMBMMS6o" },
                    { type: "video", title: "1.1-3 | Addressing in network", id: "yDTC6sbYFFE" },
                ],
            },
            {
                lecCode: "cse313-w1l2",
                lecNo: "W-1 L-2",
                lecName: "Network Layer: IPv4 Functions",
                subLectures: [
                    { type: "docs", title: "Week-1 Lecture-2 Slide", id: "https://docs.google.com/presentation/d/12o6kvztISXPDVE_egH2gU_I-kXwTEpnV/edit?usp=sharing&ouid=102067286472980191666&rtpof=true&sd=true" },
                    { type: "video", title: "1.2-1 | The Network Layer & functions", id: "FewtLNsjtRA" },
                    { type: "video", title: "1.2-2.1 | Datagram Network", id: "n1f0iGNVGps" },
                    { type: "video", title: "1.2-2.2 | Virtual Circuits", id: "naN6LNPBHAs" },
                    { type: "video", title: "1.2-3 | IPV4 Datagram Format", id: "Yf0b6yn5IGA" },
                    { type: "video", title: "1.2-4.1 | IPV4 Fragmentation and Reassembly", id: "v50UVJ10_po" },
                    { type: "video", title: "1.2-4.2 | IPV4 Fragmentation and Reassembly Examples", id: "jueq0YLE8Qg" },
                    { type: "video", title: "1.2-5.1 | ICMP", id: "xTqtm7-k25o" },
                    { type: "video", title: "1.2-5.2 | Ping and Traceout", id: "vJV-GBZ6PeM" },
                    { type: "video", title: "1.2-5.3 | Traceout Explained", id: "up3bcBLZS74" },
                ],
            },
            {
                lecCode: "cse313-w1/2l3",
                lecNo: "W-1&2 L-1",
                lecName: "Network Layer: IPv4 Addressing",
                subLectures: [
                    { type: "docs", title: "Week-1 Lecture-3 Slide", id: "https://docs.google.com/presentation/d/1GRQ1RNcUHnX7nYbIKHh6nrSVz92vnC5O/edit?usp=sharing&ouid=102067286472980191666&rtpof=true&sd=true" },
                    { type: "docs", title: "FLSM Slide WITH AUDIO", id: "https://docs.google.com/presentation/d/1zn9ubTSb2fmlp3QzFu4RJsQDtXSnxIEe/edit?usp=sharing&ouid=102067286472980191666&rtpof=true&sd=true" },
                    { type: "video", title: "1/2.1-1 | IPv4 Addressing (Sir's video)", id: "bzlsrfOeU-w" },
                    { type: "video", title: "1/2.1-2.1 | FLSM (Solve) and VLSM (Sir's video)", id: "ocGg6hesJy0" },
                    { type: "video", title: "1/2.1-2.2 | FLSM And VLSM", id: "APnuoYI6tWQ" },
                ],
            },
            {
                lecCode: "cse313-w3l1",
                lecNo: "W-3 L-1",
                lecName: "VLSM and Supernetting",
                subLectures: [
                    { type: "docs", title: "VLSM Slide WITH AUDIO", id: "https://docs.google.com/presentation/d/1iW2iRrArp0aW2ZAgMrZq5rGnv3T9OH8N/edit?usp=sharing&ouid=102067286472980191666&rtpof=true&sd=true" },
                    { type: "docs", title: "Suppernetting Slide WITH AUDIO", id: "https://docs.google.com/presentation/d/19HYeW7-HB014y3-zp9S2RGbPfKBhxKJc/edit?usp=sharing&ouid=102067286472980191666&rtpof=true&sd=true" },
                    { type: "video", title: "3.1-1 | FLSM (Solve) and VLSM (Sir's video)", id: "ocGg6hesJy0" },
                    { type: "video", title: "3.1-2 | Suppernetting", id: "m7TwQ24lF74" },
                ],
            },
            {
                lecCode: "cse313-w4l1",
                lecNo: "W-4 L-1",
                lecName: "Link State Routing and Network Address Translation",
                subLectures: [
                    { type: "docs", title: "Link State Routing", id: "https://docs.google.com/presentation/d/1a6_k-ua6CLlaJuDmow2J0n3ih7_XK4wT/edit?usp=sharing&ouid=102067286472980191666&rtpof=true&sd=true" },
                    { type: "video", title: "4-1 | Link State Routing", id: "kW6zV-040SY" },
                    { type: "video", title: "4-2 | Link State Routing (Another)", id: "whjf466hhqw" },
                    { type: "video", title: "4-3 | Network Address Translation (NAT)", id: "47PUj7OSGkA" },
                ],
            },
            {
                lecCode: "cse313-w5l1",
                lecNo: "W-5 L-1",
                lecName: "Forwarding and Addressing, Virtual circuit and Datagram networks, ICMP",
                subLectures: [
                    { type: "docs", title: "Application Layer: HTTP, FTP, SMTP, DNS.", id: "https://docs.google.com/presentation/d/1a6_k-ua6CLlaJuDmow2J0n3ih7_XK4wT/edit?usp=sharing&ouid=102067286472980191666&rtpof=true&sd=true" },
                    { type: "video", title: "5-1.1 | Packet Switching", id: "_0mE6PH1E4c" },
                    { type: "video", title: "5-1.2 | Datagram Switching Vs Virtual Circuit Switching", id: "-S-NThI_79o" },
                    { type: "video", title: "5-2.1 | Internet Control Message Protocol (ICMP) part-1", id: "tAKx2RCgqow" },
                    { type: "video", title: "5-2.2 | Internet Control Message Protocol (ICMP) part-2", id: "tAKx2RCgqow" },
                    { type: "video", title: "5-3 | Forwarding and Routing", id: "9zvfSN_F7vM" },
                    { type: "video", title: "5-4 | Dynamic Host Configuration Protocol (DHCP)", id: "e6-TaH5bkjo" },
                    { type: "video", title: "5-5 | Network Address Translation (NAT)", id: "47PUj7OSGkA" },
                ],
            },
            {
                lecCode: "cse313-w6l1",
                lecNo: "W-6 L-1",
                lecName: "Application Layer: HTTP, FTP, SMTP, DNS.",
                subLectures: [
                    { type: "docs", title: "Application Layer: HTTP, FTP, SMTP, DNS.", id: "https://docs.google.com/presentation/d/11FkZRxQtXcBmxF1Fw_wteH__bFGwC6GV/edit?usp=sharing&ouid=102067286472980191666&rtpof=true&sd=true" },
                    { type: "video", title: "4-1 | Application Layer: HTTP, FTP, SMTP, DNS. (Sir's video)", id: "eXNg5aKzC7w" },
                ],
            },
        ],
    },

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
                    { type: "video", title: "1-1 | Introduction and History of python", id: "Ri1Lgdew8Ds" },
                    { type: "video", title: "1-2 | Environment Setup (Optional)", id: "31QmsNeiDKI" },
                    { type: "video", title: "1-3 | Syntax of Python", id: "eol9EzchLbA" },
                    { type: "video", title: "1-4.1 | Comment in python (maam's video)", id: "4scw0fYGqOg" },
                    { type: "video", title: "1-4.2 | Comment in python", id: "lV7czwQsCk0" },
                    { type: "video", title: "1-5.1 | Variables in Python (maam's video)", id: "jFAFgDKSvWI" },
                    { type: "video", title: "1-5.2 | Variables in Python", id: "rvnp9F9dB1U" },
                    { type: "video", title: "1-6.1 | Data Types in Python", id: "AcFt3D6HTt0" },
                    { type: "video", title: "1-6.3 | Numbers in python (maam's video)", id: "ZK0Ed-yqQCI" },
                    { type: "video", title: "1-6.3 | Number type", id: "dZ535ITvzbY" },
                    { type: "video", title: "1-6.4 | String in python (maam's video)", id: "kxz8SzA8Has" },
                    { type: "video", title: "1-6.5 | String type", id: "TEW97cJZ3ec" },
                    { type: "video", title: "1-6.6 | Boolean type", id: "YqQZ_oSmqAw" },
                    { type: "video", title: "1-6.7 | String Formatting", id: "4rNixJcsC1k" },
                    { type: "video", title: "1-6.8 | Binary type", id: "DEI0UIZ_SFI" },
                    { type: "video", title: "1-6.9 | Node type", id: "D5xc2QrPXQI" },
                    { type: "video", title: "1-6.10 | Sequence type", id: "KXARdcss8dE" },
                    { type: "video", title: "1-7.2 | Operators (maam's video)", id: "4_LTSnATPQY" },
                    { type: "video", title: "1-7.2 | Operators", id: "6QOH6auuAUs" },
                    { type: "video", title: "1-7.3 | Assignment Operators", id: "nfmHxs57c0o" },
                    { type: "video", title: "1-8 | Python User Input", id: "KtozLrR_0X8" },
                    { type: "video", title: "1-9 | Python Type Casting", id: "jxkXQb4DtoQ" },
                ],
            },
            {
                lecCode: "cse221-l2",
                lecNo: "L-2",
                lecName: "Control Statements in Python",
                subLectures: [
                    { type: "docs", title: "Lecture-2 Slide", id: "https://drive.google.com/file/d/1MbHhjW9rxcfDi1BLQHU0O9ov49X6Cvyb/view?usp=sharing" },
                    { type: "video", title: "2-1.1 | If-Else (maam's video)", id: "IeS-UktNeUk" },
                    { type: "video", title: "2-1.2 | If-Else", id: "WJ8bgm3Bzhk" },
                    { type: "video", title: "2-2.1 | Loops (maam's video)", id: "lhh6_4mBzRM" },
                    { type: "video", title: "2-2.2 | Loops", id: "OWVkkN4CSAU" },
                    { type: "video", title: "2-3 | Break and Continue", id: "Sj-alL8vReM" },

                ],
            },
            {
                lecCode: "cse221-l3",
                lecNo: "L-3",
                lecName: "Python Function",
                subLectures: [
                    { type: "docs", title: "Lecture-3 Slide", id: "https://drive.google.com/file/d/13L24aVk2DE9JY49c_s_P8mHJzbVXLSN4/view?usp=drive_link" },
                    { type: "video", title: "3.1.1 | Python Functions (maam's video)", id: "b0N6EknooB4" },
                    { type: "video", title: "3.1.2 | Python Functions", id: "e4CuHlW2_KU" },
                ],
            },
            {
                lecCode: "cse221-l4",
                lecNo: "L-4",
                lecName: "Python Sequences",
                subLectures: [
                    { type: "docs", title: "Lecture-4 Slide", id: "https://drive.google.com/file/d/1cghMuoU8AdJdTeJCyVX5hWnWHYY2C7_K/view?usp=sharing" },

                    { type: "video", title: "4-1.1 | Python List", id: "A_wI1sAjRxU" },
                    { type: "video", title: "4-1.2 | Python List (maam's video)", id: "Sq7Z3SKfDS8" },
                    { type: "video", title: "4-1.3 | Python List Slicing (maam's video)", id: "3kzmvb6xlyo" },
                    { type: "video", title: "4-1.4 | Change List Item", id: "s3KtSPunz5g" },
                    { type: "video", title: "4-1.5 | Add List Item", id: "RAVdO-2Zyz8" },
                    { type: "video", title: "4-1.6 | Remove List Item", id: "jH8SNizYQRs" },
                    { type: "video", title: "4-1.7 | Loop List", id: "9XWFgI0UPAk" },
                    { type: "video", title: "4-1.8 | Sort List", id: "a46WoRNX_0Q" },
                    { type: "video", title: "4-1.9 | Copy A List", id: "PUiwi5Xd23s" },
                    { type: "video", title: "4-1.10 | Join Two List", id: "2HDJyyY95IE" },
                    { type: "video", title: "4-1.11 | List All Methods", id: "CAEAHAjEvTo" },
                    { type: "video", title: "4-1.12 | List Exercise", id: "BFUUk0RdXaQ" },

                    { type: "video", title: "4-2.1 | Python Tuple", id: "KEwQ1wJKsS8" },
                    { type: "video", title: "4-2.2 | Update Tuple", id: "7nPDjeAR0rs" },
                    { type: "video", title: "4-2.3 | Unpack Tuple", id: "fgJWvoBWXVc" },
                    { type: "video", title: "4-2.4 | Loop Tuple", id: "JmAqFiZA-Cg" },
                    { type: "video", title: "4-2.5 | Join Tuple", id: "LIYl5ov-AwE" },
                    { type: "video", title: "4-2.6 | Tuple Method", id: "JkC1GfRQSzg" },
                    { type: "video", title: "4-2.7 | Tuple Excercise", id: "l83uuKGSD8U" },
                ],
            },
            {
                lecCode: "cse221-l5",
                lecNo: "L-5",
                lecName: "Stack, Expression and 2D list",
                subLectures: [
                    { type: "docs", title: "Lecture-5 Slide", id: "https://drive.google.com/file/d/1CVrxb1xWSIC_o8VMJKjFAnJNHmzeC3Mc/view?usp=sharing" },
                    { type: "video", title: "5-1 | Stack using List", id: "AKO9nI4tuhs" },
                    { type: "video", title: "5-2 | Generators", id: "bD05uGo_sVI" },
                    { type: "video", title: "5-3 | 2D List", id: "Xy6qeQWQwFw" },
                ],
            },
            {
                lecCode: "cse221-l6",
                lecNo: "L-6",
                lecName: "Python Dictionaries and Sets",
                subLectures: [
                    { type: "docs", title: "Lecture-5 Slide", id: "https://drive.google.com/file/d/1kEB7cvkuekOM9z49ebK89vlwCzr8m-VP/view?usp=sharing" },
                    { type: "video", title: "6-1 | Python Dictionary (maam's video)", id: "UsZWjRxdB_c" },
                    { type: "video", title: "6-1 | Python Dictionaries", id: "bv3F4ZactVg" },
                    { type: "video", title: "6-1 | Python Dictionaries Access", id: "NRx6xet911I" },
                    { type: "video", title: "6-1 | Python Dictionaries Change Item", id: "uduxP0gLLYE" },
                    { type: "video", title: "6-1 | Python Dictionaries Add Item", id: "1EDT2zyXUUA" },
                    { type: "video", title: "6-1 | Python Loop Dictionary", id: "jQEIlSE9xrw" },
                    { type: "video", title: "6-1 | Python Copy Dictionary", id: "6ASesYwZmIc" },
                    { type: "video", title: "6-1 | Python Dictionary Exercises", id: "reloHECv8go" },

                    { type: "video", title: "6-1 | Set in Python (maam's video)", id: "qzIk5H9QDls" },
                    { type: "video", title: "6-1 | Python Set", id: "JU7v7qUszgs" },
                    { type: "video", title: "6-1 | Python Access Set Item", id: "iG5cmA-04rQ" },
                    { type: "video", title: "6-1 | Python Add Set Item", id: "xcUj1smKYFM" },
                    { type: "video", title: "6-1 | Python Remove Set Item", id: "BHH1VzVo0_k" },
                    { type: "video", title: "6-1 | Python Loop Set Item", id: "XTTEX-APcXQ" },
                    { type: "video", title: "6-1 | Python Join Set Item", id: "oL0Vn5rAxAM" },
                    { type: "video", title: "6-1 | Python Set Item Exercise", id: "vQ3w8NhooGc" },
                ],
            },
            {
                lecCode: "cse221-lmore",
                lecNo: "🐍🐍🐍",
                lecName: "More ডলাডলি with সাপ (Python)",
                subLectures: [
                    { type: "docs", title: "Extra Slide - INTRO TO PYTHON", id: "https://drive.google.com/file/d/1bq-HRM4wxxwYhhl96LVvZne386A5F_fI/view?usp=sharing" },
                    { type: "docs", title: "Extra Slide - SYNTAX & VARIABLES IN PYTHON", id: "https://drive.google.com/file/d/1Js72Hk_-HIkXGNtPcScUA9_RjalN-xqk/view?usp=sharing" },
                    { type: "docs", title: "Extra Slide - DATA TYPE, NUMBERS, CASTING IN PYTHON", id: "https://drive.google.com/file/d/1V2U0kjLQRZ6iR4A1eK5H_cILjFyCEumr/view?usp=sharing" },
                    { type: "docs", title: "Extra Slide - PYTHON STRING", id: "https://drive.google.com/file/d/1nGAguKtW-xW2DAaq1Q6oHQI_PkVxOtXR/view?usp=sharing" },
                    { type: "docs", title: "Extra Slide - PYTHON BOOLEAN AND OPERATORS", id: "https://drive.google.com/file/d/1bvHzFvuvD4VITd1xbS6exWpATsMPNN_H/view?usp=sharing" },
                    { type: "classnote", title: "Full Python Playlist of Hablu Programmer If you want to learn more", id: "https://www.youtube.com/playlist?list=PLNMnAEqLBwmpR8JDBOEl0jrzmH1vPnO7v" },
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
            {
                lecCode: "cse335-l4",
                lecNo: "L-4",
                lecName: "Data Representation",
                subLectures: [
                    { type: "docs", title: "Lecture-4 Slide", id: "https://docs.google.com/presentation/d/11c2YVSyBazOT0Hls2ZmTTO0IBm4wf2AQ/edit?usp=sharing&ouid=102067286472980191666&rtpof=true&sd=true" },
                    { type: "video", title: "4-1 | Why Do Computers Use 1s and 0s?", id: "Xpk67YzOn5w" },
                    { type: "video", title: "4-2 | Data Representation using Signed Magnitude", id: "1k71RxUtgUY" },
                    { type: "video", title: "4-3.1 | Data Representation using 1's Complement", id: "pWORlDyPxs8" },
                    { type: "video", title: "4-3.2 | Data Representation using 2's Complement", id: "kxcL0Vb5bEQ" },
                    { type: "video", title: "4-4.1 | What are Signed & Unsigned Numbers", id: "XV91bg6KvmQ" },
                    { type: "video", title: "4-4.2 | Addition of Signed Integers", id: "tj6rzsWHXFE" },
                    { type: "video", title: "4-4.3 | Addition of Unsigned Integers", id: "27a_V4RPABk" },
                    { type: "video", title: "4-5 | Full Adder", id: "wysI90Xtxvc" },
                    { type: "video", title: "4-6 | Ripple Carry Adder", id: "b70ZQwci5sY" },
                    { type: "video", title: "4-7 | Negative Number Representation", id: "zMX2WERv74k" },
                    { type: "video", title: "4-8 | Universal Gate", id: "w2hK0JVKmJc" },
                ],
            },
            {
                lecCode: "cse335-l5",
                lecNo: "L-5",
                lecName: "Processor Basics (Pipelining, Instruction Set Design)",
                subLectures: [
                    { type: "docs", title: "Lecture-5 Slide", id: "https://docs.google.com/presentation/d/1m4zFcLA-VTm-6VXOsurV0wT3u53kdJRB/edit?usp=sharing&ouid=102067286472980191666&rtpof=true&sd=true" },
                    { type: "video", title: "5-1 | Processor Basics", id: "WANz6nqjK3s" },
                ],
            },
        ],
    },

];


const courses_video_final = [

    {
        courseCode: "CSE315",
        courseTitle: "Introduction to data science",
        lectureVideos: [
            {
                lecCode: "cse315-l9",
                lecNo: "W-5 L-1",
                lecName: "Probability Distribution",
                subLectures: [
                    { type: "docs", title: "W5L1 Slide", id: "https://docs.google.com/presentation/d/1FQvyZsC5Yg-_XqNdOU_NE3ADdA3OOttO/edit?usp=sharing&ouid=107570650630946017419&rtpof=true&sd=true" },
                    { type: "video", title: "9-1 | Full Probability Distribution", id: "KLf--2TfSZA" },
                ],
            },
            {
                lecCode: "cse315-l10",
                lecNo: "W-6",
                lecName: "Feature Engineering",
                subLectures: [
                    { type: "docs", title: "W6 Slide", id: "https://docs.google.com/presentation/d/1-FdrO-_WTNuGzDg5V9RcVvcUv3AthOs2/edit?usp=drive_link&ouid=107570650630946017419&rtpof=true&sd=true" },
                    { type: "video", title: "10-1 | Full Probability Distribution", id: "KLf--2TfSZA" },
                ],
            },
        ],
    },

    {
        courseCode: "CSE221",
        courseTitle: "Object Oriented Programming - II",
        lectureVideos: [
            {
                lecCode: "cse221-l7",
                lecNo: "L-7",
                lecName: "OOP Concepts with Python",
                subLectures: [
                    { type: "docs", title: "Lecture-7 Slide", id: "https://drive.google.com/file/d/1kE8ZzreQENQnpJu4MlF9KVmKaBXjwH1j/view?usp=drive_link" },
                    { type: "video", title: "7-1 | Classes and Objects", id: "1MKsgYCwe_g" },
                    { type: "video", title: "7-2 | Python Encapsulation", id: "1H1mrmDqEt8" },
                ],
            },
        ],
    },

    {
        courseCode: "CSE335",
        courseTitle: "Computer Architecture and Organization",
        lectureVideos: [
            {
                lecCode: "cse335-l6",
                lecNo: "L-6",
                lecName: "Datapath Design",
                subLectures: [
                    { type: "docs", title: "Lecture-6 Slide", id: "https://docs.google.com/presentation/d/1G0EBHzUWqbv9896F3w-Qw1A3pg2gxAfl/edit?usp=sharing&ouid=102067286472980191666&rtpof=true&sd=true" },
                    { type: "video", title: "6-1 | Shift and Add Multiplication", id: "2byosGJlBr8" },
                    { type: "video", title: "6-2 | Division Algorithm", id: "sD-wj1ymx7w" },
                    { type: "video", title: "6-3 | Arithmetic Logic Unit (ALU)", id: "UsK5KV1FPmA" },
                    { type: "video", title: "6-4 | Coprocessor", id: "iljjbml4CVk" },
                    { type: "video", title: "6-5 | Pipelining Introduction and structure", id: "nv0yAm5gc-E" },
                ],
            },
            {
                lecCode: "cse335-l7",
                lecNo: "L-7",
                lecName: "Instruction Pipelining",
                subLectures: [
                    { type: "txtIns", title: "A Special Instruction on Slide", id: "txtIns", des: 'স্লাইড নং ৮-১০ এবং ২০ - ২৮ পরীক্ষার জন্য খুব একটা ইম্পরট্যান্ট না । তবে একবার দেখে নিতে পারিস আহামরি তেমন কিছুই না ।' },
                    { type: "docs", title: "Lecture-7 Slide", id: "https://docs.google.com/presentation/d/1iCPpW2sXiomvnjNvPnRen1sVkKj3Q7wF/edit?usp=sharing&ouid=102067286472980191666&rtpof=true&sd=true" },
                    { type: "video", title: "7-1 | Instruction Pipelining Stage", id: "CX3VLCrUn2M" },
                    { type: "video", title: "7-2.1 | Pipeline Hazard and Data Hazard", id: "srlgaJgaxRE" },
                    { type: "video", title: "7-2.2 | Read After Write (RAW)", id: "cMKn19y4_9E" },
                    { type: "video", title: "7-2.3 | Write After Read (WAR)", id: "PWz5VEMYDP8" },
                    { type: "video", title: "7-2.4 | Write After Write (WAW)", id: "-6JjmJNy3nA" },
                    { type: "video", title: "7-3 | Structural/Resource Hazards", id: "qn7zf_OSLsk" },
                    { type: "video", title: "7-4 | Control Hazards", id: "BuaIGznkhHQ" },
                ],
            },
        ],
    },

];




const VideoLectures = () => {
    const [isChecked, setIsChecked] = useState(null);
    const [currentlyPlaying, setCurrentlyPlaying] = useState("");
    const [expandedLectures, setExpandedLectures] = useState(null);
    const [slctedLecture, setSlctedLecture] = useState(courses_video_final)
    const [snglData, setSnglData] = useState({});


    const handleToggleCourse = (courseCode) => {
        setIsChecked((prevState) => (prevState === courseCode ? null : courseCode));
        setExpandedLectures(null); // Close all lectures when switching courses
    };

    const handleToggleLecture = (lecCode) => {
        setExpandedLectures((prevState) => (prevState === lecCode ? null : lecCode));
    };

    const handleVideoControl = (x) => {
        setCurrentlyPlaying(x.id)
        setSnglData(x);
    }


    

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
                        {
                            currentlyPlaying ?
                                (currentlyPlaying === 'txtIns' ?
                                    <div className="flex flex-col items-center p-10 sm:p-5 border border-success h-full w-full rounded-lg">
                                        <div className="text-2xl font-bold text-success text-center border-b-2 border-success">
                                            {snglData?.title}
                                        </div>
                                        <div className="mt-6">
                                            {snglData?.des}
                                        </div>
                                    </div>

                                    :
                                    <iframe
                                        className="w-full h-full rounded-lg"
                                        src={`https://www.youtube.com/embed/${currentlyPlaying}?autoplay=1&rel=0`}
                                        title="YouTube video player"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"
                                        allowFullScreen
                                    ></iframe>)
                                :
                                <div className="w-full h-full flex flex-col justify-center items-center">
                                    <div className="w-[70%] relative flex items-center justify-center">
                                        <img className="w-full" src="https://i.ibb.co.com/7RTDG10/Pngtree-network-teaching-online-learning-illustration-6183356.png" alt="" />
                                        <h1 className="absolute font-bold text-[#49b863] bg-slate-950/80 p-2 rounded-full backdrop-blur-sm">Select Topic to see video</h1>
                                    </div>
                                </div>
                        }
                    </div>

                    <div className="space-y-2 w-1/2 sm:w-full h-auto p-4 overflow-y-auto">
                        <div className="flex space-x-2">
                            <button onClick={() => setSlctedLecture(courses_video)} className={`btn ${slctedLecture === courses_video ? 'border-primary bg-white' : 'border-none animate-none btn-success'} `}>Midterm</button>
                            <button onClick={() => setSlctedLecture(courses_video_final)} className={`btn ${slctedLecture === courses_video_final ? 'border-primary bg-white' : 'border-none animate-none btn-success'} `}>Final</button>
                        </div>
                        {slctedLecture?.map((course) => (
                            <div key={course.courseCode} className={`bg-gray-800 collapse`}>
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
                                                                    disabled={subLecture.id === 'disabled'}
                                                                    className={`btn w-full text-left`}
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
                                                            ) : subLecture.type === "classnote" ? (
                                                                <Link to={subLecture.id}
                                                                    key={index}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="btn bg-white text-black hover:text-white w-full text-left"
                                                                >
                                                                    <div className="flex items-center space-x-4">
                                                                        <div>{subLecture.title}</div>
                                                                        <IoLogOutOutline /> {/* Example icon for docs */}
                                                                    </div>
                                                                </Link>
                                                            ) : subLecture.type === "txtIns" ? (
                                                                <button
                                                                    className="btn bg-success text-black hover:text-white w-full text-left"
                                                                    onClick={() => handleVideoControl(subLecture)}
                                                                >
                                                                    <div className="flex items-center space-x-4">
                                                                        <div>{subLecture.title}</div>
                                                                    </div>
                                                                </button>
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
