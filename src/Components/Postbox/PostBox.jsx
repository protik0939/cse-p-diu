import PropTypes from 'prop-types';
import { useContext, useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { IoIosText, IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import { Link } from "react-router-dom";
import PostComments from "../OtherPostRelated/PostComments/PostComments";
import { AuthContext } from "../../Providers/AuthProvider";
import { IoCopyOutline } from "react-icons/io5";
import { MdFullscreen } from "react-icons/md";
import { HiOutlineDotsCircleHorizontal } from "react-icons/hi";
import '../Home/Home.css';
import YouTubeEmbed from '../YouTubeEmbed/YouTubeEmbed';
import Swal from 'sweetalert2'
import './PostBox.css'
import Skeleton from 'react-loading-skeleton';

const PostBox = ({ post, onDelete }) => {

    const { user } = useContext(AuthContext);
    const [userProInfo, setUserProInfo] = useState({});
    const [userProInfoLoad, setUserProInfoLoad] = useState(true)
    const [reactInfo, setReactInfo] = useState([])
    const [liveCommentCount, setLiveCommentCount] = useState(post.commentOnPost.length);
    const id = post?.uploaderUid;
    const [thisPost, setThisPost] = useState(post);

    const [reactedUsers, setReactedUsers] = useState([]);

    useEffect(() => {
        setUserProInfoLoad(true)
        fetch(`https://cse-p-diu-server.vercel.app/users/uid/${id}`)
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                setUserProInfo(data);
                setUserProInfoLoad(false)
            })
            .catch(() => {
                // console.error('Error fetching user:', error);
            });
    }, [id]);

    function copyLink(link) {
        navigator.clipboard.writeText(link)
            .then(() => {
                Swal.fire({
                    position: "top-end",
                    title: "Link Copied",
                    showConfirmButton: false,
                    color: '#ffffff',
                    background: '#00ff0090',
                    timer: 1000,
                    toast: true,
                    backdrop: false,
                    timerProgressBar: true,
                    width: 'auto',
                });
            })
            .catch(err => {
                console.error('Failed to copy link: ', err);
            });
    }

    useEffect(() => {
        fetch(`https://cse-p-diu-server.vercel.app/posts/${post?._id}/reacts`)
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                setReactInfo(data);
            })
            .catch((error) => {
                console.error('Error fetching user:', error);
            });
    }, [post?._id]);

    const alreadyGaveReact = (userUid) => {
        return reactInfo.some(react => react.userUid === userUid);
    };

    const handleDeletePost = () => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            color: "#ffffff",
            background: '#1d232a60',
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://cse-p-diu-server.vercel.app/posts/${post?._id}`, {
                    method: 'DELETE',
                    headers: {
                        'content-type': 'application/json',
                    },
                })
                    .then(res => res.json())
                    .then(() => {
                        // console.log(data);
                        onDelete(post._id);
                    })
                    .catch(() => {
                        // console.log(error);
                    })
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success",
                    background: '#1d232a60',
                    color: "#ffffff",
                });
            }
        });
    }




    const handleEditPost = e => {
        e.preventDefault();
        const form = e.target;
        const postId = post._id;
        const updatedTitle = form.updatedTitle.value;
        const updatedDetails = form.updatedDetails.value;
        const updatedPost = { postId, updatedTitle, updatedDetails };

        fetch(`https://cse-p-diu-server.vercel.app/posts/${postId}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(updatedPost)
        })
            .then(res => res.json())
            .then(data => {
                document.getElementById(`postEditingModal-${thisPost._id}`).close();
                // console.log(data);
                if (data.modifiedCount >= 1) {
                    setThisPost(prevPost => ({
                        ...prevPost,
                        postTitle: updatedTitle,
                        postDetails: updatedDetails,
                    }));
                }
            })
            .catch(error => {
                console.error('Error updating post:', error);
            });
    }


    const handleReacting = () => {
        const hasUserReacted = reactInfo.some(react => react.userUid === user.uid);

        if (hasUserReacted) {
            // Remove reaction
            fetch(`https://cse-p-diu-server.vercel.app/posts/${post?._id}/reacts`, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify({ userUid: user?.uid }),
            })
                .then(res => res.json())
                .then(() => {
                    // console.log('React removed:', data);
                    // Update state to reflect the removed reaction
                    setReactInfo(prevReacts => prevReacts.filter(react => react.userUid !== user.uid));
                })
                .catch((error) => {
                    console.error('Error removing react:', error);
                });
        } else {
            // Add reaction
            const now = new Date();
            const reactPackage = {
                userUid: user?.uid,
                uploadTime: now.toLocaleTimeString(),
                uploadDate: now.toLocaleDateString(),
            };

            fetch(`https://cse-p-diu-server.vercel.app/posts/${post?._id}/reacts`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(reactPackage),
            })
                .then(res => res.json())
                .then(() => {
                    // console.log('React added:', data);
                    // Update state to reflect the new reaction
                    setReactInfo(prevReacts => [...prevReacts, reactPackage]);
                })
                .catch((error) => {
                    console.error('Error adding react:', error);
                });
        }
    };

    const updateCommentCount = (newCount) => {
        setLiveCommentCount(newCount);
    };


    useEffect(() => {
        const fetchUserDetails = async (userUid) => {
            try {
                const response = await fetch(
                    `https://cse-p-diu-server.vercel.app/users/uid/${userUid}`
                );
                if (!response.ok) {
                    throw new Error("Failed to fetch user details");
                }
                const data = await response.json();
                return { userUid, name: data.name, photourl: data.photourl };
            } catch (error) {
                console.error("Error fetching user details:", error);
                return null;
            }
        };

        // Fetch details for all user UIDs
        const fetchAllUsers = async () => {
            const promises = reactInfo.map((info) => fetchUserDetails(info.userUid));
            const results = await Promise.all(promises);
            setReactedUsers(results.filter((result) => result !== null));
        };

        fetchAllUsers();
    }, [reactInfo]);




    return (
        <div className="w-full">
            <div className="flex flex-col w-full rounded-2xl shadow-lg p-3 sm:p-[2px] cursor-pointer transition duration-150 mt-2 ease-in-out ">
                <div className="flex justify-between p-5 font-bold border-l border-t border-r border-[#414141] rounded-t-lg text-center">
                    <p className=" ">{thisPost?.postTitle}</p>
                    <div className="flex flex-row">
                        {user?.uid === id ?
                            (<div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="">
                                    <div className="w-10 rounded-full">
                                        <button className="text-2xl hover:scale-110"><HiOutlineDotsCircleHorizontal /></button>
                                    </div>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                    <button onClick={() => document.getElementById(`postEditingModal-${thisPost._id}`).showModal()} className="rounded hover:bg-[#ffffff06] mt-1 transition duration-150 ease-in-out">Edit Post</button>
                                    <button onClick={handleDeletePost} className="rounded hover:bg-[#ffffff06] mt-1 transition duration-150 ease-in-out">Delete</button>
                                </ul>
                            </div>)
                            : ''}
                        <div className="text-2xl hover:scale-110"><Link to={`/post/${thisPost._id}`} ><MdFullscreen /></Link></div>
                    </div>
                </div>




                <dialog id={`postEditingModal-${thisPost._id}`} className="modal">
                    <div className="modal-box">
                        <form onSubmit={handleEditPost}>
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"><AiOutlineClose /></button>
                            </form>
                            <h3 className="font-bold text-lg">Edit Post</h3>

                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">Post Title</span>
                                </div>
                                <input defaultValue={thisPost?.postTitle} type="text" name="updatedTitle" placeholder="Post Title" className="input input-bordered w-full" required />
                            </label>

                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">Post Details</span>
                                </div>
                                <textarea rows='6' defaultValue={thisPost?.postDetails} name="updatedDetails" className="textarea textarea-bordered" placeholder="Post Details........."></textarea>
                            </label>
                            <div className="text-center">
                                <input className="btn mt-6" type="submit" value="Update" />
                            </div>
                        </form>



                    </div>
                </dialog>




                <img src={post?.imageUrl} alt="" />

                {post?.videoUrl ? <YouTubeEmbed url={post?.videoUrl} /> : ''}

                {userProInfoLoad ? <div className="flex justify-center p-3 space-x-4 border-x border-[#414141]">
                    <Skeleton height={60} width="60px" style={{ marginTop: '0', background: '#1d232a' }} baseColor="#1d232a" highlightColor="#323c47" />
                    <div className="text-left">
                        <Skeleton height={10} width="200px" style={{ marginTop: '2', background: '#1d232a' }} baseColor="#1d232a" highlightColor="#323c47" />
                        <Skeleton height={6} width="120px" style={{ marginTop: '2', background: '#1d232a' }} baseColor="#1d232a" highlightColor="#323c47" />
                        <Skeleton height={6} width="150px" style={{ marginTop: '2', background: '#1d232a' }} baseColor="#1d232a" highlightColor="#323c47" />
                    </div>
                </div>
                    :
                    <div className="flex justify-center p-3 space-x-4 border-x border-[#414141]">
                        <Link to={`/profile/${id}`}><div className='w-14 aspect-square'><img className="rounded-[6px] w-full h-full object-cover" src={userProInfo.photourl} alt="" /></div></Link>
                        <div className="text-left">
                            <Link to={`/profile/${id}`}><h1>Uploader: {userProInfo.name}</h1></Link>
                            <h1 className="text-[10px]">Date: {post?.uploadDate}</h1>
                            <h1 className="text-[10px]">Time: {post?.uploadTime}</h1>
                        </div>
                    </div>}
                <div className="border rounded-b-lg border-[#414141]">
                    <p className="p-4 ">
                        {post.postDetails.length > 200 ? <p>{post.postDetails.slice(0, 200)}...... <Link to={`/post/${post._id}`} className="font-bold text[#166fb8] hover:scale-110">See more</Link></p> : <p>{post.postDetails}</p>}
                    </p>
                    <div className="text-center p-4">
                        <ul className=" menu menu-horizontal bg-base-200 rounded-box">{
                            user ? (
                                user.emailVerified ?
                                    <div className="flex">
                                        <div>
                                            <button onClick={handleReacting} className="text-3xl mx-4 hover:scale-110">
                                                {alreadyGaveReact(user.uid) ? <IoMdHeart className="text-[#ff0000]" /> : <IoMdHeartEmpty />}
                                            </button>

                                            <dialog id={`getWhoReacted-${post._id}`} className="modal">
                                                <div className="modal-box">
                                                    <form method="dialog">
                                                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"><AiOutlineClose /></button>
                                                    </form>
                                                    <h3 className="font-bold text-lg">People reacted on this post</h3>
                                                    {
                                                        reactedUsers?.length > 0 ?
                                                            reactedUsers.map(reu => {
                                                                return (
                                                                    <Link key={reu?.userUid} to={`http://localhost:5173/profile/${reu.userUid}`} className='flex items-center space-x-3 rounded-2xl shadow-lg p-3 cursor-pointer hover:bg-black/30'>
                                                                        <img className='w-10 rounded-lg aspect-square  object-cover' src={reu?.photourl} alt={reu?.name} />
                                                                        <h1>{reu?.name}</h1>
                                                                    </Link>
                                                                )
                                                            })
                                                            :
                                                            <h1>No Reacts Yet</h1>
                                                    }
                                                </div>
                                            </dialog>

                                            <div onClick={() => document.getElementById(`getWhoReacted-${post._id}`).showModal()} className="avatar-group -space-x-10 rtl:space-x-reverse flex justify-center items-center">
                                                {
                                                    reactedUsers.length > 0 ? (
                                                        reactedUsers
                                                            .sort(() => 0.5 - Math.random()) // Shuffle the array for randomness
                                                            .slice(0, 2) // Select the first 2 shuffled elements
                                                            .map((ru) => (
                                                                <div key={ru?.userUid} className="avatar">
                                                                    <div className="w-4">
                                                                        <img src={ru?.photourl} alt="User Avatar" />
                                                                    </div>
                                                                </div>
                                                            ))
                                                    ) : (
                                                        <div className="avatar placeholder">
                                                            <div className="bg-neutral text-neutral-content w-4">
                                                                <span>0</span>
                                                            </div>
                                                        </div>
                                                    )
                                                }
                                                {
                                                    // Check if more than 2 users reacted
                                                    reactedUsers?.length > 2 ? (
                                                        <div className="avatar placeholder">
                                                            <div className="bg-neutral text-neutral-content w-4">
                                                                <span>+{reactedUsers.length - 2}</span>
                                                            </div>
                                                        </div>
                                                    ) :
                                                        null
                                                }
                                            </div>

                                            {/* <h1>{reactInfo.length}</h1> */}
                                        </div>

                                        <div>
                                            <button onClick={() => document.getElementById(`commentBox-${post._id}`).showModal()} className="text-3xl  mx-4 hover:scale-110">
                                                <IoIosText />
                                                <dialog id={`commentBox-${post._id}`} className="modal">
                                                    <div className="modal-box overlay-scrollbar">
                                                        <form method="dialog">
                                                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"><AiOutlineClose /></button>
                                                        </form>
                                                        <PostComments post={post} updateCommentCount={updateCommentCount} ></PostComments>
                                                    </div>
                                                </dialog>
                                            </button>
                                            <h1>{liveCommentCount}</h1>
                                        </div>
                                        <div>
                                            <button onClick={() => copyLink(`https://cse-p-diu.web.app/post/${post._id}`)} className="text-3xl mx-4 hover:scale-110">
                                                <IoCopyOutline />
                                            </button>
                                            <h1>Copy link</h1>
                                        </div>
                                    </div>
                                    :
                                    <div>
                                        <h2>Please Verify Your Email Address to react/comment</h2>
                                        <div>
                                            <button onClick={() => copyLink(`https://cse-p-diu.web.app/posts/${post._id}`)} className="text-3xl mx-4 hover:scale-110">
                                                <IoCopyOutline />
                                            </button>
                                            <h1>Copy link</h1>
                                        </div>
                                    </div>
                            )
                                :
                                <div>
                                    <h2>Please <Link className='text-[#4444ff] font-bold' to='/login'>Login</Link> to Comment/React</h2>
                                    <div>
                                        <button onClick={() => copyLink(`https://cse-p-diu.web.app/post/${post._id}`)} className="text-3xl mx-4 hover:scale-110">
                                            <IoCopyOutline />
                                        </button>
                                        <h1>Copy link</h1>
                                    </div>
                                </div>
                        }</ul>
                    </div>
                </div>
            </div>
        </div>
    );
};


PostBox.propTypes = {
    post: PropTypes.object.isRequired,
    onDelete: PropTypes.func.isRequired,
}

export default PostBox;
