import PropTypes from 'prop-types';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import './Comments.css'
import Skeleton from 'react-loading-skeleton';

const SingleComment = ({ comment, onDeleteComment }) => {
    const { user } = useContext(AuthContext);
    const [userProInfo, setUserProInfo] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://cse-p-diu-server.vercel.app/users/uid/${comment.uid}`)
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                setUserProInfo(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching user:', error);
            });
    }, [comment.uid]);


    const handleCommentDelete = () => {
        fetch(`https://cse-p-diu-server.vercel.app/posts/${comment?.postId}/comments`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                userUid: comment?.uid,
                uploadTime: comment?.uploadTime,
                uploadDate: comment?.uploadDate,
                postComment: comment?.postComment
            }),
        })
            .then(res => res.json())
            .then(data => {
                // console.log('Comment removed:', data);
                onDeleteComment();
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error removing Comment:', error);
            });
    }




    return (
        <div className="flex">
            {loading ?
                <div className='flex items-end space-x-6'>
                    <Skeleton height={50} width="50px" style={{ marginTop: '30px', background: '#1d232a' }} baseColor="#1d232a" highlightColor="#323c47" />
                    <Skeleton height={70} width="200px" style={{ marginTop: '30px', background: '#1d232a' }} baseColor="#1d232a" highlightColor="#323c47" />
                </div>
                :
                <div className='flex'>
                    <div className="chat chat-start">
                        <div className="chat-image avatar">
                            <div className="w-10 rounded-[10px]">
                                <Link to={`/profile/${userProInfo.uid}`}><img alt="" src={userProInfo.photourl} /></Link>
                            </div>
                        </div>
                        <div className="chat-header text-[10px]">
                            <Link to={`/profile/${userProInfo.uid}`}>{userProInfo.name}</Link>
                            <time className="text-[10px] opacity-50 ml-4">{comment.uploadTime}</time>
                        </div>
                        <div className="chat-bubble text-[12px] w-auto text-left">{comment.postComment}</div>
                        <div className="chat-footer opacity-50 text-[10px]">{comment.uploadDate}</div>
                    </div>
                    {
                        userProInfo.uid === user.uid ?
                            <button onClick={handleCommentDelete} className="text-[20px] hover:scale-110 hover:text-[#ff0000]"><MdDelete /></button> :
                            ''
                    }
                </div>
            }
        </div>
    );
};

SingleComment.propTypes = {
    comment: PropTypes.array.isRequired,
    onDeleteComment: PropTypes.func.isRequired,
};


export default SingleComment;