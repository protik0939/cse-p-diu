import {
    createBrowserRouter
} from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Home from "../Components/Home/Home";
import Login from "../Components/Authentication/Login/Login";
import Result from "../Components/Result/Result";
import Register from "../Components/Authentication/Register/Register";
import Blc from "../Components/OutsideLinks/Blc";
import StudentPortal from "../Components/OutsideLinks/StudentPortal";
import DiuNotice from "../Components/OutsideLinks/DiuNotice";
import DiuLibrary from "../Components/OutsideLinks/DiuLibrary";
import Diu from "../Components/OutsideLinks/Diu";
import DiuInternship from "../Components/OutsideLinks/DiuInternship";
import PrivateRoutes from "./PrivateRoutes";
import Profile from "../Components/Profile/Profile"
import People from "../Components/People/People";
import DetailsPost from "../Components/Home/DetailsPost/DetailsPost";
import ClassNotes from "../Components/OtherTools/ClassNotes/ClassNotes";
import CoverPageGenerator from "../Components/OtherTools/CoverPageGenerator/CoverPageGenerator";
import VideoLectures from "../Components/OtherTools/VideoLectures/VideoLectures";
import HowMarksINeed from "../Components/OtherTools/HowMarksINeed/HowMarksINeed";
import CGPACalculator from "../Components/OtherTools/CGPACalculator/CGPACalculator";
import Notice from "../Components/Notice/Notice";
import Routine from "../Components/Routine/Routine";
import AllCR from "../Components/People/AllCR";
import PrivacyPolicy from "../Components/AboutUs/PrivacyPolicy/PrivacyPolicy";
import ContactUs from "../Components/AboutUs/ContactUs";
import DownloadAndroidApp from "../Components/AboutUs/DownloadAndroidApp";
import DownloadIosApp from "../Components/AboutUs/DownloadIosApp";
import Videos from "../Components/Videos/Videos";

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                // loader: () => fetch(`https://cse-p-diu-server.vercel.app/posts`)
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/result',
                element: <Result></Result>
            },
            {
                path: '/notice',
                element: <Notice></Notice>
            },
            {
                path: '/routine',
                element: <Routine></Routine>
            },
            {
                path: '/allcr',
                element: <AllCR></AllCR>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/blc',
                element: <Blc></Blc>
            },
            {
                path: '/studentportal',
                element: <StudentPortal></StudentPortal>
            },
            {
                path: '/diunotice',
                element: <DiuNotice></DiuNotice>
            },
            {
                path: '/diulibrary',
                element: <DiuLibrary></DiuLibrary>
            },
            {
                path: '/diumain',
                element: <Diu></Diu>
            },
            {
                path: '/diuinternship',
                element: <DiuInternship></DiuInternship>
            },
            {
                path: '/people',
                element: <PrivateRoutes><People></People></PrivateRoutes>,
                loader: () => fetch(`https://cse-p-diu-server.vercel.app/users`)
            },
            {
                path: '/profile/:id',
                element: <PrivateRoutes><Profile></Profile></PrivateRoutes>
            },
            {
                path: '/post/:id',
                element: <DetailsPost></DetailsPost>
            },
            {
                path: '/classnotes',
                element: <ClassNotes></ClassNotes>
            },
            {
                path: '/coverpagegenerator',
                element: <CoverPageGenerator></CoverPageGenerator>
            },
            {
                path: '/videolectures',
                element: <VideoLectures></VideoLectures>
            },
            {
                path: '/howmarksineed',
                element: <HowMarksINeed></HowMarksINeed>
            },
            {
                path: '/cgpacalculator',
                element: <CGPACalculator></CGPACalculator>
            },
            {
                path: '/privacypolicy',
                element: <PrivacyPolicy></PrivacyPolicy>
            },
            {
                path: '/contactus',
                element: <ContactUs></ContactUs>
            },
            {
                path: '/downloadandroidapp',
                element: <DownloadAndroidApp></DownloadAndroidApp>
            },
            {
                path: '/downloadiosapp',
                element: <DownloadIosApp></DownloadIosApp>
            },
            {
                path: '/videos',
                element: <Videos></Videos>
            }
        ]
    }
]);

export default Routes;