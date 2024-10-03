import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import '../Home.css';
import PostComments from "../../OtherPostRelated/PostComments/PostComments";
import { AuthContext } from "../../../Providers/AuthProvider";
import Loading from "../../Loading/Loading";
import { IoCopyOutline } from "react-icons/io5";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import { MdFullscreenExit } from "react-icons/md";
import Swal from 'sweetalert2'
import Skeleton from "react-loading-skeleton";
import { Helmet } from "react-helmet";

const DetailsPost = () => {
    const { id } = useParams();
    const [detailsPost, setDetailsPost] = useState(null);
    const [userProInfoLoad, setUserProInfoLoad] = useState(true)
    const { user, loading } = useContext(AuthContext);
    const [liveCommentCount, setLiveCommentCount] = useState(0);
    const [reactInfo, setReactInfo] = useState([])
    const [error, setError] = useState(null);
    const [userProInfo, setUserProInfo] = useState({});

    useEffect(() => {
        setUserProInfoLoad(true)
        fetch(`https://cse-p-diu-server.vercel.app/users/uid/${detailsPost?.uploaderUid}`)
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                setUserProInfo(data);
                setUserProInfoLoad(false)
            })
            .catch((error) => {
                console.error('Error fetching user:', error);
            });
    }, [detailsPost?.uploaderUid]);

    useEffect(() => {
        fetch(`https://cse-p-diu-server.vercel.app/posts/${id}`)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then(data => {
                setDetailsPost(data);
                setLiveCommentCount(data.commentOnPost?.length || 0);
            })
            .catch(error => {
                console.error('Error fetching post details:', error);
                setError('Failed to load post. Please try again later.');
            });
    }, [id]);


    const navigate = useNavigate();



    useEffect(() => {
        fetch(`https://cse-p-diu-server.vercel.app/posts/${id}/reacts`)
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                setReactInfo(data);
            })
            .catch((error) => {
                console.error('Error fetching user:', error);
            });
    }, [id]);

    const alreadyGaveReact = (userUid) => {
        return reactInfo.some(react => react.userUid === userUid);
    };

    const handleReacting = () => {
        const hasUserReacted = reactInfo.some(react => react.userUid === user.uid);

        if (hasUserReacted) {
            // Remove reaction
            fetch(`https://cse-p-diu-server.vercel.app/posts/${id}/reacts`, {
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

            fetch(`https://cse-p-diu-server.vercel.app/posts/${id}/reacts`, {
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



    function copyLink(link) {
        navigator.clipboard.writeText(link)
            .then(() => {
                Swal.fire({
                    position: "bottom",
                    title: "Link Copied",
                    showConfirmButton: false,
                    color: '#ffffff',
                    background: '#1d232a60',
                    timer: 1000,
                    backdrop: false,
                    timerProgressBar: true,
                    width: 'auto',
                });
            })
            .catch(err => {
                console.error('Failed to copy link: ', err);
            });
    }




    if (loading || !detailsPost) {
        return <Loading />;
    }

    if (error) {
        return <div className="flex justify-center items-center h-full"><p>{error}</p></div>;
    }

    // this will be removed after undo

    return (
        <div className="flex h-screen sm:flex-col sm:h-auto p-2 pt-[75px] justify-between sm:justify-center sm:items-center space-x-2">
            <Helmet>
                <title>{detailsPost.postTitle} | CSE P DIU</title>
            </Helmet>
            <div className="flex justify-center items-center rounded-2xl shadow-lg w-2/3 sm:w-full h-full sm:h-auto overflow-hidden bg-[#ffffff10]">
                {detailsPost.imageUrl ? <img className="max-h-full max-w-full object-contain" src={detailsPost.imageUrl} alt="" /> : ''}
                {detailsPost?.videoUrl ? <iframe className="w-full h-full sm:h-[300px]" src={`${detailsPost?.videoUrl}?autoplay=1&rel=0`} title="YouTube video player" allow="rel=0; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen="true"></iframe> : ''}
            </div>
            <div className=" w-1/3 sm:w-full h-full sm:h-auto p-2">
                <div className="p-4 rounded-2xl shadow-lg w-full h-1/2 sm:h-auto overflow-y-scroll overlay-scrollbar ">
                    <div className="flex justify-between">
                        <div>
                            <button className="text-4xl hover:scale-110" onClick={() => navigate(-1)}>
                                <MdFullscreenExit />
                            </button>
                            <button onClick={() => copyLink(`https://cse-p-diu.web.app/post/${id}`)} className="text-3xl mx-4 hover:scale-110"><IoCopyOutline /></button>

                        </div>
                        {user && user.emailVerified ? <button onClick={handleReacting} className="text-4xl hover:scale-110">
                            {alreadyGaveReact(user.uid) ? <IoMdHeart className="text-[#ff0000]" /> : <IoMdHeartEmpty />}
                        </button> : ''}
                    </div>
                    <h1 className="font-bold text-2xl my-4">{detailsPost.postTitle}</h1>
                    <h1 className="mb-4">{reactInfo?.length} Likes</h1>
                    <p>{detailsPost.postDetails}</p>
                    {userProInfoLoad ? 
                    <div className="flex justify-center p-3 space-x-4 border rounded-[10px] mt-10 border-[#414141]">
                        <Skeleton height={60} width="60px" style={{ marginTop: '0', background: '#1d232a' }} baseColor="#1d232a" highlightColor="#323c47" />
                        <div className="text-left">
                            <Skeleton height={10} width="200px" style={{ marginTop: '2', background: '#1d232a' }} baseColor="#1d232a" highlightColor="#323c47" />
                            <Skeleton height={6} width="120px" style={{ marginTop: '2', background: '#1d232a' }} baseColor="#1d232a" highlightColor="#323c47" />
                            <Skeleton height={6} width="150px" style={{ marginTop: '2', background: '#1d232a' }} baseColor="#1d232a" highlightColor="#323c47" />
                        </div>
                    </div>
                        :
                        <div className="flex justify-center p-3 space-x-4 border rounded-[10px] mt-10 border-[#414141]">
                            <Link to={`/profile/${detailsPost?.uploaderUid}`}><div className='w-14 aspect-square'><img className="rounded-[10px] w-full h-full object-cover" src={userProInfo.photourl} alt="" /></div></Link>
                            <div className="text-left">
                                <Link to={`/profile/${id}`}><h1>Uploader: {userProInfo.name}</h1></Link>
                                <h1 className="text-[10px]">Date: {detailsPost?.uploadDate}</h1>
                                <h1 className="text-[10px]">Time: {detailsPost?.uploadTime}</h1>
                            </div>
                        </div>}
                </div>
                {user ? (
                    user.emailVerified ?
                        <div className="rounded-2xl shadow-lg w-full h-1/2 sm:h-auto overflow-scroll overlay-scrollbar p-6">
                            <PostComments post={detailsPost} updateCommentCount={setLiveCommentCount} />
                        </div>
                        :
                        <div className=" text-center rounded-2xl shadow-lg w-full h-1/2 sm:h-auto overflow-scroll overlay-scrollbar p-6">
                            Please verify your email to comment
                        </div>

                ) : (
                    <div className=" text-center rounded-2xl shadow-lg w-full h-1/2 overflow-scroll overlay-scrollbar p-6">
                        Please <Link className='text-[#4444ff] font-bold' to='/login'>Login</Link> to comment
                    </div>

                )}
            </div>
            <div className="sm:mb-[60px]" />
        </div>
    );
};

export default DetailsPost;
