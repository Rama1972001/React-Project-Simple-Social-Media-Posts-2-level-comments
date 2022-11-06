import React, { useState } from 'react'
import Comments from './Comments';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
function PostItem({ comment   }) {

	const [showResults, setShowResults] = useState(false)
	const onClick = () => setShowResults(true)

	const createdAt = "  " + new Date(comment.createdAt).toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit' }) + ' ' + new Date(comment.createdAt).toLocaleDateString()


	return (
	<div className='justify'>
		<div class="container ">
           
            <div class="row">
                <div class="col-10">
                    <div class="row border border-secondary">
                        <div class="col">
						<div className='post-image-container  '>
				<img src='/PngItem_3918613.png' alt='user' width={50} height={50} />
			</div>
			
				<div className='post-content   '>
					<div className='post-author'>
						{comment.username}

					</div>
					<div className='date'>{createdAt}</div>
				</div>
						</div>
                    </div>
                    <div class="row border border-secondary">
                        <div class="col">
						<div className='post-text   '>
					{comment.body}</div>


						</div>
                    </div>
                    <div class="row">
                        <div class="col">


							
				<div className='post-actions    '>
				<button  class=" post-action btn btn-primary" data-bs-toggle="button" height="30px"><i class="fa fa-thumbs-up">Like</i> </button>

					<input className=' post-action btn btn-secondary' type="submit" value="Add Comment"    onClick={onClick} />
					{showResults ? <Comments currentUserId="1" /> : null}
				</div>
						</div>
                    </div>
                    
                    </div>
                </div>
            </div>
 </div>	
		



	)
}

export default PostItem