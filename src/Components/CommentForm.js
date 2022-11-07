import { useState } from 'react'

const CommentForm = ({ handleSubmit, submitLabel, hasCancelButton = false, handleCancel, initialText = '' }) => {
    const [text, setText] = useState(initialText)
    // const isTextDisabled = text.length === 0;
    // const onSubmit = e => {
    //     e.preventDefault()
    //     handleSubmit(text)
    //     setText('')
    // }

    const isTextDisabled = (text).length > 1;
   
    const something = (event) => {
         if(event.keyCode === 13&&!isTextDisabled){
            alert('You can not submit empty comment !!!')
        }
        if (event.keyCode === 13 && isTextDisabled) {
         
            event.preventDefault()
            handleSubmit(text)
            setText('')
        }

    }
    // if (event.keyCode === 13 && isTextDisabled) {
    //     event.preventDefault()
    //     handleSubmit(text)
    //     setText('')
    // }

    return (
        // <form onSubmit={onSubmit}></form>
        <form >
            <textarea className='comment-for-textarea form-control  w-60' placeholder='Write your comment ...' rows="4" value={text} onChange={(e) => setText(e.target.value)}
             onKeyDown={(e) => something(e)
             }
            />
            {/* <button className='comment-form-button' disabled={isTextDisabled}>
                {submitLabel}
            </button> */}
            {hasCancelButton && (
                <button type='button' className='comment-form-button comment-form-cancel-button' onClick={handleCancel}>Cancel</button>
            )}


        </form>
    )
}

export default CommentForm