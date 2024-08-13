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

const PostBox = ({ post, onDelete }) => {

    const { user } = useContext(AuthContext);
    const [userProInfo, setUserProInfo] = useState({});
    const [reactInfo, setReactInfo] = useState([])
    const [liveCommentCount, setLiveCommentCount] = useState(post.commentOnPost.length);
    const id = post?.uploaderUid;

    useEffect(() => {
        fetch(`https://cse-p-diu-server.vercel.app/users/uid/${id}`)
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                setUserProInfo(data);
            })
            .catch((error) => {
                console.error('Error fetching user:', error);
            });
    }, [id]);

    function copyLink(link) {
        navigator.clipboard.writeText(link)
            .then(() => {
                alert('Link copied to clipboard!');
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
        fetch(`https://cse-p-diu-server.vercel.app/posts/${post?._id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
            },
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                onDelete(post._id);
            })
            .catch(error => {
                // console.log(error);
            })
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
                .then(data => {
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
                .then(data => {
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


    return (
        <div className="">
            <div className="flex flex-col w-full rounded-2xl shadow-lg p-3 sm:p-[2px] cursor-pointer transition duration-150 mt-2 ease-in-out ">
                <div className="flex justify-between p-5 font-bold border-l border-t border-r border-[#414141] rounded-t-lg text-center">
                    <p className=" ">{post?.postTitle}</p>
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
                                    <button className="rounded hover:bg-[#ffffff06] mt-1 transition duration-150 ease-in-out">Edit Post</button>
                                    <button onClick={handleDeletePost} className="rounded hover:bg-[#ffffff06] mt-1 transition duration-150 ease-in-out">Delete</button>
                                </ul>
                            </div>)
                            : ''}
                        <div className="text-2xl hover:scale-110"><Link to={`/post/${post._id}`} ><MdFullscreen /></Link></div>
                    </div>
                </div>

                <img src={post?.imageUrl} alt="" />

                {post?.videoUrl ? <iframe className="w-full h-[400px]" src={post?.videoUrl} title="YouTube video player"  allow="rel=0; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen="true"></iframe> : ''}

                <div className="flex justify-center p-3 space-x-4 border-x border-[#414141]">
                    <Link to={`/profile/${id}`}><img className="w-14 rounded-[10px]" src={userProInfo.photourl} alt="" /></Link>
                    <div className="text-left">
                        <Link to={`/profile/${id}`}><h1>Uploader: {userProInfo.name}</h1></Link>
                        <h1 className="text-[10px]">Date: {post?.uploadDate}</h1>
                        <h1 className="text-[10px]">Time: {post?.uploadTime}</h1>
                    </div>
                </div>
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
                                            <h1>{reactInfo.length}</h1>
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
                                    <h2>Please Login to Comment/React</h2>
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
