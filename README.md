
# Post-Comments Form ( Comment system )
## In this project I created Post-Comments Form looks like the image bellow:


## whatch the video bellow!!
![image](https://user-images.githubusercontent.com/110572038/200197009-cd16716e-050d-4b86-bddd-bd91720d8ccd.png)



## This is the video of the project :
[![Everything Is AWESOME](https://image.shutterstock.com/image-vector/web-video-player-modern-design-600w-1499854778.jpg)](https://youtu.be/uekJTx83Wvk "Everything Is AWESOME")


### This code contains a functional React component that represents a comment in a comment system. The component displays the comment's text, author, and creation date, as well as various actions that can be performed on the comment such as replying, editing, and deleting. The component also takes in an array of replies, which are also displayed as comments.

## Features
* The component displays the comment's text, author, and creation date.
* The component allows for replying, editing, and deleting comments. These actions are only enabled if the current user is logged in and the comment was created within * the last 5 minutes.
* The component displays replies to the comment as nested comments.
* The component allows for the active comment to be set and checked for replying or editing.
## Dependencies
* React
* CommentForm component to handle displaying a form for adding or editing comments.
## Props
#### The component takes in the following props:

* comment: an object representing the comment, which includes properties such as id, body, createdAt, username, and userId.
* replies: an array of objects representing replies to the comment.
* currentUserId: the ID of the currently logged-in user.
* deleteComment: a function to handle deleting a comment.
* activeComment: an object representing the active comment, which is currently being edited or replied to.
* setActiveComment: a function to handle setting the active comment.
* addComment: a function to handle adding a new comment.
* parentId: the ID of the parent comment (if the comment is a reply).
* updateComment: a function to handle updating an existing comment.
## File Structure
## This component is part of a larger comment system and can be found in the src directory. The CommentForm component is imported and used within this component to handle displaying a form for adding or editing comments. This code may also interact with other components and functions in the larger comment system.
