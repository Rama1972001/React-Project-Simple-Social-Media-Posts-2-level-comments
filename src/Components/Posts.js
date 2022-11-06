import { useState, useEffect } from 'react'
import {
    getPosts as getPostsApi,
    createPosts as creatPostsApi,
    
} from '../api';
import PostItem from './PostItem'
import PostForm from './PostForm';

/*fetch from Api */
function Posts({ currentUserId }) {
    const [backendPosts, setbackendPosts] = useState([])
    const [activePost, setactivePost] = useState(null)
   
    const rootComments = backendPosts.filter((backendPost) => backendPost.parentId === null)
   
   


    const addPost = (text, parentId) => {
        console.log('addPost', text, parentId);
        creatPostsApi(text, parentId).then(post => {
            setbackendPosts([post, ...backendPosts])
            setactivePost(null)
        })
    }

  
    useEffect(() => {
      
        getPostsApi().then(data => {
            setbackendPosts(data);
        })
    }, []);

    return (
        /*add normal makeup*/
        <div className='comments'>
          
            <PostForm submitLabel="Write" handleSubmit={addPost} />
            <div className='comments-container'>
                {
                    rootComments.map((rootComment) => (
                       
                        <PostItem key={rootComment.id} comment={rootComment} 
                            currentUserId={currentUserId}
                          
                            activePost={
                                activePost
                            }
                            setactivePost={setactivePost}

                            addPost={addPost}
                           
                        />
                       

                    ))}
            </div>
        </div>

    );
};

export default Posts