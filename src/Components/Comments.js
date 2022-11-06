import { useState, useEffect } from 'react'
import {
    getComments as getCommentsApi,
    createComment as createCommentApi,
    updateComment as updateCommentApi,
    deleteComment as deleteCommentApi,
} from '../api';
import Comment from './Comment'
import CommentForm from './CommentForm';

/*fetch from Api */
function Comments({ currentUserId }) {
    const [backendComments, setBackendComments] = useState([])
    const [activeComment, setActiveComment] = useState(null)
    /*parent comments */
    const rootComments = backendComments.filter((backendComment) => backendComment.parentId === null)
    /*get replies under comments*/
    /*sort based on date time */
    const getReplies = commentId => {
        return backendComments.filter(backendComment => backendComment.parentId === commentId).sort((a, b) => new Date(a.ceatedAt).getTime - new Date(b.ceatedAt).getTime)
    }


    const addComment = (text, parentId) => {
        console.log('addComment', text, parentId);
        createCommentApi(text, parentId).then(comment => {
            setBackendComments([comment, ...backendComments])
            setActiveComment(null)
        })
    }

    const updateComment = (text, commentId) => {
        updateCommentApi(text).then(() => {
            const updatedBackendComments = backendComments.map((backendComment) => {
                if (backendComment.id === commentId) {
                    return { ...backendComment, body: text };
                }
                return backendComment;
            });
            setBackendComments(updatedBackendComments);
            setActiveComment(null);
        });
    };
    const deleteComment = (commentId) => {
        if (window.confirm('Are you sure?!')) {
            deleteCommentApi(commentId).then(() => {
                const updatedComments = backendComments.filter(backendComment => backendComment.id !== commentId)
                setBackendComments(updatedComments)
            })
        }
    }
    // console.log(backendComments);

    /*we need use Effect to fetch data
    
    it will triggered once after mounting the component
    
    we write inside it any assync code*/
    useEffect(() => {
        /*data is the array of our backend comments*/
        getCommentsApi().then(data => {
            setBackendComments(data);
        })
    }, []);

    return (
        /*add normal makeup*/
        <div className='comments'>
            
            <CommentForm  handleSubmit={addComment} />
            <div className='comments-container'>
                {
                    rootComments.map((rootComment) => (
                        /* <div key={rootComment.id}>{rootComment.body}</div>  */
                        /*pass replies prop to Comment/*/
                        <Comment key={rootComment.id} comment={rootComment} replies={getReplies(rootComment.id)}
                            currentUserId={currentUserId}
                            deleteComment={deleteComment}
                            activeComment={
                                activeComment
                            }
                            setActiveComment={setActiveComment}

                            addComment={addComment}
                            updateComment={updateComment}
                        />
                        /*also one of Comment component props is comment*/


                    ))}
            </div>
        </div>

    );
};

export default Comments