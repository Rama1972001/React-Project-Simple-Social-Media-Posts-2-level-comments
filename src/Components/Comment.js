import React from 'react'
import CommentForm from './CommentForm';

function Comment({ comment, replies, currentUserId, deleteComment, activeComment, setActiveComment, addComment, parentId = null, updateComment }) {

    //in some websites if you are not logged in , your current id is null so you can t reply, edit or delete
    //disable edit and delete after 5 min from comment creating 
    const fiveMinutes = 300000;
    const timePassed = (new Date() - new Date(comment.createdAt)) > fiveMinutes
    //new Date() means now
    const canReply = Boolean(currentUserId) //if id null...>it will be false , else true 
    const canEdit = currentUserId === comment.userId && !timePassed
    const canDelete = currentUserId === comment.userId && !timePassed

    const createdAt = "  " + new Date(comment.createdAt).toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit' }) + ' ' + new Date(comment.createdAt).toLocaleDateString()
    // bellow it was comment.createdAt but since we declared   const createdAt  so it wiill be createdAt



    const isReplying =
        activeComment &&
        activeComment.type === 'replying' && activeComment.id === comment.id;

    const isEditing =
        activeComment &&
        activeComment.type === 'editing' && activeComment.id === comment.id;
    //we have only 2 levels of comments 
    const replyId = parentId ? parentId : comment.id;
    //for root comments , parentId=null , for reply comments .. parentId=comment.id
    return (
        <div className='comment'>
            <div className='comment-image-container'>

                <img src='/PngItem_3918613.png' alt='user' width={50} height={50} />
            </div>
            <div className='comment-right-part'>
                <div className='comment-content'>
                    <div className='comment-auther'>
                        {comment.username}

                    </div>
                    <div>{createdAt}</div>
                </div>

                {!isEditing && <div className='comment-text'>
                    {comment.body}</div>}
                {isEditing && (
                    <CommentForm
                        submitLabel='Update'
                        initialText={comment.body}
                        handleSubmit={(text) => updateComment(text, comment.id)}
                        handleCancel={() => setActiveComment(null)}
                        hasCancelButton />
                )

                }

                <div className='comment-actions'>
                    {canReply && <div className='comment-action' onClick={() => setActiveComment({ id: comment.id, type: 'replying' })}>Reply</div>}
                    {canEdit && <div className='comment-action' onClick={() => setActiveComment({ id: comment.id, type: 'editing' })}>Edit</div>}

                    {canDelete && <div className='comment-action' onClick={() => deleteComment(comment.id)}>Delete</div>}



                </div>
                {isReplying && (<CommentForm
                    submitLabel='Reply'
                    handleSubmit={(text) => addComment(text, replyId)}

                ></CommentForm>)}
                {
                    replies.length > 0 && (
                        <div className='repplies'>
                            {replies.map(reply => (
                                /*replies same type of comments, it is comment*/
                                <Comment
                                    comment={reply}
                                    key={replies.id}
                                    replies={[]}
                                    currentUserId={currentUserId}
                                    deleteComment={deleteComment}
                                    addComment={addComment}
                                    parentId={comment.id}
                                    activeComment={activeComment}
                                    setActiveComment={setActiveComment}
                                    UpdateComment={updateComment}
                                />
                                //  currentUserId={currentUserId} in replies means that in every reply we should provide same info as inside comment (reply, edit, delete)

                                /**replies={[]}  : replies cant have any nested comments */
                            ))}
                        </div>

                    )

                }
            </div>
        </div>


    )
}

export default Comment