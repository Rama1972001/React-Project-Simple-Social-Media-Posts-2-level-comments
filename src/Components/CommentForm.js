import { useState } from 'react'

const CommentForm = ({ handleSubmit, submitLabel, hasCancelButton = false, handleCancel, initialText = '' }) => {
    const [text, setText] = useState(initialText)
    const isTextDisabled = text.length === 0;
    const onSubmit = e => {
        e.preventDefault()
        handleSubmit(text)
        setText('')
    }
    return (
        
        <form onSubmit={onSubmit}>
            <textarea className='comment-for-textarea' value={text} onChange={(e) => setText(e.target.value)}
            />
            <button className='comment-form-button' disabled={isTextDisabled}>
                {submitLabel}
            </button>
            {hasCancelButton && (
                <button type='button' className='comment-form-button comment-form-cancel-button' onClick={handleCancel}>Cancel</button>
            )}


        </form>
    )
}

export default CommentForm