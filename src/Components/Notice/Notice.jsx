import axios from "axios";
import { useContext, useState } from "react";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import { TbCalendarEvent } from "react-icons/tb";
import { MdDelete } from "react-icons/md";

const Notice = () => {

    const [emails, setEmails] = useState([]);
    const [userProInfo, setUserProInfo] = useState([]);
    const [notices, setNotices] = useState([]);
    const [noticeLoad, setNoticeLoad] = useState(true);
    const [upNotice, setUpNotice] = useState(false);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        setUserProInfo({});
        fetch(`https://cse-p-diu-server.vercel.app/users/uid/${user?.uid}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setUserProInfo(data);
            })
            .catch((error) => {
                console.error('Error fetching user:', error);
            });
    }, [user?.uid]);


    useEffect(() => {
        setNoticeLoad(true);
        axios.get('https://cse-p-diu-server.vercel.app/notices')
            .then(response => {
                setNotices(response.data);
                setNoticeLoad(false);
            })
            .catch(error => {
                console.error("Error fetching notices:", error);
                setNoticeLoad(false);
            });
    }, [])

    // Function to fetch emails from the API using Axios
    const fetchEmails = async () => {
        try {
            const response = await axios.get('https://cse-p-diu-server.vercel.app/users');
            const emailNameArray = response.data.map(user => ({
                email: user.email,
                name: user.name
            }));
            setEmails(emailNameArray);
            // console.log(emails);
        } catch (error) {
            console.log(error);
        }
    };

    // useEffect to fetch the emails when the component mounts
    useEffect(() => {
        fetchEmails();
    });


    // const handleSeen = (noticeId) => {
    //     if (user) {
    //         const userID = user?.uid;
    //         axios.put(`https://cse-p-diu-server.vercel.app/notices/${noticeId}`, { userId: userID }) 
    //             .then(() => {
    //                 setNotices(prevNotices => prevNotices.map(notice =>
    //                     notice._id === noticeId ? {
    //                         ...notice,
    //                         seen: [...notice.seen, userID]
    //                     } : notice
    //                 ));
    //             })
    //             .catch(error => {
    //                 console.error('Error marking notice as seen:', error);
    //             });
    //     } else {
    //         console.log('Hi! Log in for more!');
    //     }
    // };



    const handleNoticeUpload = async (e) => {
        setUpNotice(true);
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const details = form.details.value;
        const link = form.link.value;
        const seen = [];

        const now = new Date();
        const uploadTime = now.toLocaleTimeString();
        const uploadDate = now.toLocaleDateString();

        const noticePackage = { title, details, link, seen, uploadDate, uploadTime }
        console.log(noticePackage);

        try {
            const response = await axios.post('https://cse-p-diu-server.vercel.app/notices', noticePackage);
            console.log('Response:', response.data);
            const emailList = emails.map(user => user.email).join(',');
            console.log(emailList);
            setUpNotice(false);
            try {
                const replyMessageAdmin = `
                    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                        <table style="width: 100%; max-width: 600px; margin: 0 auto; border-collapse: collapse; border: 1px solid #ddd;">
                            <thead>
                                <tr>
                                    <th style="background-color: #49b863; color: white; padding: 15px; text-align: left;">
                                        <h2>CSE P DIU</h2>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style="padding: 20px;">
                                        <p>Dear <strong>user,</strong>,</p>
                                        <p>We are pleased to inform you about the following notice:</p>
                                        <h3 style="color: #49b863;">${title}</h3>
                                        <p>${details}</p>
                                        <a href="${link}" style="color: #ffffff; background-color: #49b863; padding: 10px 20px; text-decoration: none; border-radius: 5px;">View Notice</a>
                                        <p style="margin-top: 20px;">Thank you for being part of our community!</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="background-color: #f4f4f4; padding: 10px; text-align: center; font-size: 12px; color: #777;">
                                        <p>CSE P DIU</p>
                                        <p><a href="https://cse-p-diu.web.app/" style="color: #49b863; text-decoration: none;">Visit Our Website</a></p>
                                        <p>&copy; 2024 CSE P DIU. All Rights Reserved.</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                `;

                const noticeMail = await axios.post('https://cse-p-diu-server.vercel.app/send-email', {
                    to: emailList,
                    subject: title,
                    html: replyMessageAdmin, // Change 'text' to 'html' for sending HTML content
                });
            } catch (error) {
                console.log(error);
            }

            const Toast = Swal.mixin({
                toast: true,
                position: "bottom-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                }
            });
            Toast.fire({
                icon: "success",
                title: "Notice Uploaded Successfully"
            });
            form.reset();
        } catch (error) {

            setUpNotice(false);
            console.error('Error submitting form:', error);
            const Toast = Swal.mixin({
                toast: true,
                position: "bottom-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                }
            });
            Toast.fire({
                icon: "error",
                title: "Something Went Wrong"
            });
        }
    }

    const handleDeleteNotice = async (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const deleteResponse = await axios.delete(`https://cse-p-diu-server.vercel.app/notices/${id}`);
                    console.log(deleteResponse.data.message);
                    setNotices(notices.filter(x => x._id !== id));
                } catch (error) {
                    console.error('Error deleting applied form:', error);
                }
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });
    }

    return (
        <div>
            <Helmet>
                <title>Notice | CSE P DIU</title>
            </Helmet>

            {userProInfo?.classRepresentative ?
                <>
                    <div className="pt-20" />
                    <div className="w-full p-2">
                        <div className="w-full p-2  bg-base-300 rounded-lg">
                            <form className="flex flex-col justify-center" onSubmit={handleNoticeUpload}>
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text">Title</span>
                                    </div>
                                    <input name='title' type="text" placeholder="Title" className="input input-bordered w-full" />
                                </label>

                                <label className="form-control">
                                    <div className="label">
                                        <span className="label-text">Details</span>
                                    </div>
                                    <textarea name='details' className="textarea textarea-bordered h-24" placeholder="Details" />
                                </label>


                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text">Link</span>
                                    </div>
                                    <input name='link' type="text" placeholder="Link" className="input input-bordered w-full" />
                                </label>

                                {upNotice ?
                                    <button className="btn btn-success mt-6 flex space-x-2" disabled><h1>Uploding</h1> <span className="loading loading-ring loading-md" /></button>
                                    :
                                    <input className="btn btn-success mt-6" type="submit" value="Add to Notice" />
                                }

                            </form>
                        </div>
                    </div>
                </>
                :
                ''
            }

            <div className={`${userProInfo?.classRepresentative ? 'py-0' : 'py-20'}`}>

                <h1 className="text-2xl text-[#49b863] font-bold text-center">All Notices</h1>

                <div className="p-4 mx-10 sm:mx-1">
                    {noticeLoad ? (
                        <div className="w-full">
                            {[...Array(10)].map((_, index) => (
                                <div key={index} className="flex flex-row items-start justify-center w-full mb-4">
                                    <div className="w-full ml-2 p-5">
                                        <Skeleton width="40%" height={30} baseColor="#1d232a90" highlightColor="#323c47" />
                                        <Skeleton width="20%" height={20} style={{ marginTop: '10px' }} baseColor="#1d232a90" highlightColor="#323c47" />
                                        <Skeleton width="100%" height={60} style={{ marginTop: '10px' }} baseColor="#1d232a90" highlightColor="#323c47" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        notices.length > 0 ? (
                            <div className="w-full">
                                {/* Reverse the notices array while mapping */}
                                {notices.slice().reverse().map((notice, index) => (
                                    <div className="relative" key={index}>
                                        <Link className="flex w-full flex-row items-start justify-center" key={index} to={notice?.link}>
                                            <div className=" w-full flex flex-col my-4 ml-2 bg-base-200 hover:bg-base-300 rounded-lg p-10 sm:p-5 ">

                                                <h3 className="text-2xl font-bold text-[#49b863]">{notice?.title}</h3>
                                                <h1 className="text-[10px] flex space-x-1 text-[#49b863] items-center"><TbCalendarEvent /> <h1>Uploaded: {notice?.uploadDate}, {notice?.uploadTime}</h1></h1>
                                                <p className="mt-5">{notice?.details}</p>
                                            </div>
                                        </Link>
                                        <button onClick={() => handleDeleteNotice(notice?._id)} className="btn btn-active absolute top-0 right-0"><MdDelete className="text-red-600" /></button>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p>No notices available.</p>
                        )
                    )}
                </div>

            </div>

        </div>
    );
};

export default Notice;