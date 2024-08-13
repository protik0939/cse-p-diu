import './Home.css';
import { IoIosCreate } from "react-icons/io";
import PostBox from "../Postbox/PostBox";
import RightNavBar from "../HomeBars/RightNavBar";
import LeftNavBar from "../HomeBars/LeftNavBar";
import { AiOutlineClose } from "react-icons/ai";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider"
import Loading from "../Loading/Loading";
import TimelineSkeleton from '../Skeleton/TimelineSkeleton';


const shuffleArray = (array) => {
    let i = array.length;
    while (i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};



const Home = () => {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://cse-p-diu-server.vercel.app/posts')
            .then(res => res.json())
            .then(data => {
                setPosts(data)
                setLoading(false);
            })
            .catch(error => {
                
                setLoading(false);
                // console.log('Error fetching posts:', error)
            });
    }, []);

    const handleDeletePost = (postId) => {
        setPosts(prevPosts => prevPosts.filter(post => post._id !== postId));
    };


    const [selectedOption, setSelectedOption] = useState("No");

    const handleSelectionChange = (e) => {
        setSelectedOption(e.target.value);
    };

    const { user } = useContext(AuthContext);

    const postSubmission = e => {
        e.preventDefault();
        const form = e.target;
        const postTitle = form.postTitle.value;
        const postDetails = form.postDetails.value;
        const imageUrl = form.imageUrl ? form.imageUrl.value : null;
        const videoUrl = form.videoUrl ? form.videoUrl.value : null;
        const reactOnPost = [];
        const commentOnPost = [];
        const now = new Date();
        const uploadTime = now.toLocaleTimeString();
        const uploadDate = now.toLocaleDateString();

        const uploaderUid = user.uid;

        const newPost = {
            postTitle,
            postDetails,
            imageUrl,
            videoUrl,
            reactOnPost,
            commentOnPost,
            uploadTime,
            uploadDate,
            uploaderUid,
        };
        // // console.log(newPost);
        fetch('https://cse-p-diu-server.vercel.app/posts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newPost)
        })
            .then(res => res.json())
            .then(data => {
                document.getElementById('postUploadingModal').close();
                setPosts(prevPosts => [data, ...prevPosts]);
            })
            .catch(error => {
                console.error('Error saving new user:', error);
            });
    };

    const shuffledTimeline = shuffleArray([...posts]);


    if (!posts) {
        return <Loading></Loading>
    }

    return (





        <div className="sm:grid-cols-1 grid grid-cols-7 sm:gap-0 gap-6">


            <div className="w-full col-span-2 h-screen overflow-auto p-4 overlay-scrollbar-left sm:hidden">
                <div className="py-4" />
                <LeftNavBar></LeftNavBar>
            </div>





            <div className="col-span-3 w-full h-screen overflow-auto p-4 sm:p-[2px] no-scrollbar">
                <div className="py-4" />
                <div className="w-full rounded-3xl shadow-lg p-4 sm:p-[2px]">
                    <h2 className="my-2 font-bold sm:pl-[10px] sm:mt-[30px]">Create Post</h2>
                    <div className="flex flex-row space-x-4">


                        {
                            user ? (
                                user.emailVerified ?
                                    <div onClick={() => document.getElementById('postUploadingModal').showModal()} className="flex flex-row items-center w-full rounded-2xl shadow-lg p-3 bg-[#1a2026] cursor-pointer hover:bg-[#171d24] transition duration-150 ease-in-out space-x-4">
                                        <IoIosCreate className="text-2xl"></IoIosCreate>
                                        <h2>What&apos;s on your mind?</h2>
                                    </div>
                                    :

                                    <div className="flex flex-row items-center w-full rounded-2xl shadow-lg p-3 bg-[#1a2026] cursor-pointer hover:bg-[#171d24] transition duration-150 ease-in-out space-x-4">
                                        <IoIosCreate className="text-2xl"></IoIosCreate>
                                        <h2>Please verify your email first</h2>
                                    </div>

                            )
                                :
                                <div className="flex flex-row items-center w-full rounded-2xl shadow-lg p-3 bg-[#1a2026] cursor-pointer hover:bg-[#171d24] transition duration-150 ease-in-out space-x-4">
                                    <IoIosCreate className="text-2xl"></IoIosCreate>
                                    <h2>Login to Post</h2>
                                </div>}


                    </div>
                        {/* You can open the modal using document.getElementById('ID').showModal() method */}
                        <dialog id="postUploadingModal" className="modal">
                            <div className="modal-box">
                                <form onSubmit={postSubmission}>
                                    <form method="dialog">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"><AiOutlineClose /></button>
                                    </form>
                                    <h3 className="font-bold text-lg">Create Post</h3>

                                    <label className="form-control w-full">
                                        <div className="label">
                                            <span className="label-text">Post Title</span>
                                        </div>
                                        <input type="text" name="postTitle" placeholder="Post Title" className="input input-bordered w-full" required />
                                    </label>

                                    <label className="form-control w-full">
                                        <div className="label">
                                            <span className="label-text">Post Details</span>
                                        </div>
                                        <textarea name="postDetails" className="textarea textarea-bordered" placeholder="Post Details........."></textarea>
                                    </label>

                                    <label className="form-control w-full">
                                        <div className="label">
                                            <span className="label-text">Want to upload Image/video?</span>
                                        </div>
                                        <select
                                            name="infoTypeSelection"
                                            className="select select-bordered"
                                            onChange={handleSelectionChange}
                                            value={selectedOption} // This ensures the correct option is selected
                                        >
                                            <option value="No">No</option>
                                            <option value="Image">Image</option>
                                            <option value="Video">Video</option>
                                        </select>
                                    </label>

                                    {selectedOption === "Image" && (
                                        <label className="form-control w-full">
                                            <div className="label">
                                                <span className="label-text">Image URL</span>
                                            </div>
                                            <input
                                                type="text"
                                                name="imageUrl"
                                                placeholder="Image URL"
                                                className="input input-bordered w-full"
                                                required
                                            />
                                        </label>
                                    )}

                                    {selectedOption === "Video" && (
                                        <label className="form-control w-full">
                                            <div className="label">
                                                <span className="label-text">Video URL</span>
                                            </div>
                                            <input
                                                type="text"
                                                name="videoUrl"
                                                placeholder="Video URL"
                                                className="input input-bordered w-full"
                                                required
                                            />
                                        </label>
                                    )}
                                    <div className="text-center">
                                        <input className="btn mt-6" type="submit" value="Submit" />
                                    </div>
                                </form>



                            </div>
                        </dialog>
                </div>

                <div className="w-full rounded-3xl shadow-lg p-4 sm:p-[2px] ">
                    <h2 className="my-2 font-bold sm:mt-[10px] sm:pl-[10px]">Timeline</h2>
                    {loading ? (
                        // Show skeletons while loading
                        <>
                            <TimelineSkeleton />
                            <TimelineSkeleton />
                            <TimelineSkeleton />
                        </>
                    ) : (
                        shuffledTimeline.map(post => <PostBox key={post._id} post={post} onDelete={handleDeletePost} />)
                    )}
                </div>

            </div>

            <div className="w-full h-screen col-span-2 overflow-auto p-4 overlay-scrollbar sm:hidden">
                <div className="py-4" />
                <RightNavBar></RightNavBar>
            </div>
        </div>
    );
};

export default Home;