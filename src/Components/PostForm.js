import { useState } from 'react'

const PostForm = ({ handleSubmit, initialText = '' }) => {
    const [text, setText] = useState(initialText)
    const isTextDisabled = text.length === 0;
    const onSubmit = e => {
        e.preventDefault()
        handleSubmit(text)
        setText('')
    }
    return (

        <form onSubmit={onSubmit}  >
            <div class="input-group mb-3 w-80 justify-content-center">
                <div class="input-group mb-3 w-75">
                    <textarea placeholder='Write what you think ...' className="form-control  w-60" rows="6" value={text} onChange={(e) => setText(e.target.value)}></textarea>
                </div>

                <div class="input-group mb-3 w-75 ">
                    <button className='   w-10 comment-form-button ' disabled={isTextDisabled}>
Add post                    </button>


                </div></div>
        </form>
    )
}

export default PostForm