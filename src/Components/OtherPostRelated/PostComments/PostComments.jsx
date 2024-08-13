import PropTypes from 'prop-types';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import SingleComment from "./SingleComment";
import Loading from "../../Loading/Loading";

const PostComments = ({ post, updateCommentCount }) => {
    
    const { user, loading } = useContext(AuthContext);
    const uid = user?.uid;
    const [allComments, setAllComments] = useState([]);





    const fetchComments = () => {
        fetch(`https://cse-p-diu-server.vercel.app/posts/${post._id}/comments`)
            .then(res => res.json())
            .then(data => {
                setAllComments(data);
                updateCommentCount(data.length);
            })
            .catch(error => console.error('Error fetching comments:', error));
    };


    useEffect(() => {
        fetchComments(); 
    }, [post._id]);



    const handleAddComment = e => {
        e.preventDefault();
        const form = e.target;
        const postComment = form.postComment.value;
        const now = new Date();
        const uploadTime = now.toLocaleTimeString();
        const uploadDate = now.toLocaleDateString();
        const postId = post._id;
        const commentPackage = { postId, postComment, uid, uploadTime, uploadDate }

        fetch(`https://cse-p-diu-server.vercel.app/posts/${postId}/comments`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(commentPackage),
        })
            .then(response => response.json())
            .then(data => {
                // console.log('Comment added:', data);
                form.reset();
                fetchComments();
                // Optionally, update the UI to reflect the new comment
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    const handleDeleteComment = () => {
        fetchComments();
    };



    if (loading || !setAllComments) {
        return <Loading></Loading>
    }


    return (
        <div>
            <h3 className="font-bold text-lg">{allComments.length} Comments</h3>
            <form onSubmit={handleAddComment} action="">
                <label className="form-control">
                    <div className="label">
                        <span className="label-text">Add Comment</span>
                    </div>
                    <textarea name="postComment" className="textarea textarea-bordered h-24" placeholder="Write here ..........."></textarea>
                </label>
                <input className="btn mt-4" type="submit" value="Add Comment" />
            </form>
            <div className="w-full mt-8">
                {
                    allComments.map(comment => <SingleComment key={comment._id} comment={comment} onDeleteComment={handleDeleteComment}></SingleComment>)
                }
            </div>
        </div>
    );
};


PostComments.propTypes = {
    post: PropTypes.object.isRequired,
    updateCommentCount: PropTypes.func.isRequired,
}


export default PostComments;