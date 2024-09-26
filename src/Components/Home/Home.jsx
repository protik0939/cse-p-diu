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
import { Helmet } from 'react-helmet';


const shuffleArray = (array) => {
    let i = array.length;
    while (i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

const imageHostingKey = import.meta.env.VITE_API_KEY;
const imageUploadApi = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`;

const Home = () => {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://cse-p-diu-server.vercel.app/posts')
            .then(res => res.json())
            .then(data => {
                setPosts(data)
                setLoading(false);
            })
            .catch(() => {

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

    const postSubmission = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        const form = e.target;
        const postTitle = form.postTitle.value;
        const postDetails = form.postDetails.value;
        const infoTypeSelection = form.infoTypeSelection.value;

        let imageUrl = null;
        let videoUrl = null;

        if (infoTypeSelection === "Image") {
            const imageFile = form.imageUrl.files[0];
            if (imageFile) {
                const formData = new FormData();
                formData.append('image', imageFile);

                try {
                    const response = await fetch(imageUploadApi, {
                        method: 'POST',
                        body: formData
                    });
                    const data = await response.json();
                    if (data.success) {
                        imageUrl = data.data.url;
                    } else {
                        console.error('Image upload failed:', data.error);
                        setError('Image upload failed. Please try again.');
                        setIsSubmitting(false);
                        return;
                    }
                } catch (error) {
                    console.error('Error uploading image:', error);
                    setError('Error uploading image. Please try again.');
                    setIsSubmitting(false);
                    return;
                }
            }
        } else if (infoTypeSelection === "Video") {
            videoUrl = form.videoUrl.value;
        }

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

        try {
            const res = await fetch('https://cse-p-diu-server.vercel.app/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newPost)
            });
            const data = await res.json();
            document.getElementById('postUploadingModal').close();
            setPosts(prevPosts => [data, ...prevPosts]);
            form.reset();
            setSelectedOption("No");
        } catch (error) {
            console.error('Error saving new post:', error);
            setError('Error saving new post. Please try again.');
        }
        setIsSubmitting(false);
    };

    const shuffledTimeline = shuffleArray([...posts]);


    if (!posts) {
        return <Loading></Loading>
    }

    return (





        <div className="sm:grid-cols-1 grid grid-cols-7 sm:gap-0 gap-6">
            <Helmet>
                <title>Home | CSE P DIU</title>
            </Helmet>


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
                                user?.emailVerified ?
                                    <div onClick={() => document.getElementById('postUploadingModal').showModal()} className="flex flex-row items-center w-full rounded-2xl shadow-lg p-3 bg-white/10 cursor-pointer hover:bg-black/30 transition duration-150 ease-in-out space-x-4">
                                        <IoIosCreate className="text-2xl"></IoIosCreate>
                                        <h2>What&apos;s on your mind?</h2>
                                    </div>
                                    :

                                    <div className="flex flex-row items-center w-full rounded-2xl shadow-lg p-3 bg-white/10 cursor-pointer hover:bg-black/30 transition duration-150 ease-in-out space-x-4">
                                        <IoIosCreate className="text-2xl"></IoIosCreate>
                                        <h2>Please verify your email first</h2>
                                    </div>

                            )
                                :
                                <div className="flex flex-row items-center w-full rounded-2xl shadow-lg p-3 bg-white/10 cursor-pointer hover:bg-black/30 transition duration-150 ease-in-out space-x-4">
                                    <IoIosCreate className="text-2xl"></IoIosCreate>
                                    <h2>Login to Post</h2>
                                </div>}


                    </div>
                    {/* You can open the modal using document.getElementById('ID').showModal() method */}
                    <dialog id="postUploadingModal" className="modal">
                        <div className="modal-box">
                            <form onSubmit={postSubmission}>
                                <button
                                    type="button"
                                    className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                                    onClick={() => document.getElementById('postUploadingModal').close()}
                                >
                                    <AiOutlineClose />
                                </button>
                                <h3 className="font-bold text-lg">Create Post</h3>

                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text">Post Title</span>
                                    </div>
                                    <input
                                        type="text"
                                        name="postTitle"
                                        placeholder="Post Title"
                                        className="input input-bordered w-full"
                                        required
                                    />
                                </label>

                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text">Post Details</span>
                                    </div>
                                    <textarea
                                        name="postDetails"
                                        className="textarea textarea-bordered"
                                        placeholder="Post Details........."
                                    />
                                </label>

                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text">Want to upload Image/video?</span>
                                    </div>
                                    <select
                                        name="infoTypeSelection"
                                        className="select select-bordered"
                                        onChange={handleSelectionChange}
                                        value={selectedOption}
                                    >
                                        <option value="No">No</option>
                                        <option value="Image">Image</option>
                                        <option value="Video">Video</option>
                                    </select>
                                </label>

                                {selectedOption === "Image" && (
                                    <label className="form-control w-full">
                                        <div className="label">
                                            <span className="label-text">Image</span>
                                        </div>
                                        <input
                                            type="file"
                                            name="imageUrl"
                                            accept="image/*"
                                            className="file-input file-input-bordered w-full"
                                            required
                                        />
                                    </label>
                                )}

                                {selectedOption === "Video" && (
                                    <label className="form-control w-full">
                                        <div className="label">
                                            <span className="label-text">Video URL (Upload on YouTube and share video link)</span>
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

                                {isSubmitting && <div className='text-center'><span className="loading loading-ring loading-lg" /></div>}
                                {error && <p className="text-red-500">{error}</p>}

                                <div className="text-center">
                                    <button type="submit" className="btn mt-6" disabled={isSubmitting}>
                                        Submit
                                    </button>
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
                        shuffledTimeline.map(post => <PostBox key={post?._id} post={post} onDelete={handleDeletePost} />)
                    )}
                </div>
                <div className="sm:mb-[60px]" />
            </div>

            <div className="w-full h-screen col-span-2 overflow-auto p-4 overlay-scrollbar sm:hidden">
                <div className="py-4" />
                <RightNavBar></RightNavBar>
            </div>
        </div>
    );
};

export default Home;