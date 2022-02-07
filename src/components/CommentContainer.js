import React, {useState} from 'react';
import Comments from "./Comments"

function CommentContainer({ comments }) {

const [hidden, setHidden] = useState(false)

let commentList = comments.map((commentObj) => <Comments user={commentObj.user} comment={commentObj.comment}/>)

function handleHideClick () {
    setHidden(hidden => !hidden)
}

  return (<div>
       <button onClick={handleHideClick}>{hidden ? "Show Comments" : "Hide Comments"}</button>
       <hr/>
       <h2>{hidden ? "" : `${comments.length} Comments`}</h2>
       <div>{hidden ? "" : commentList}</div>
    </div>
  )
}
export default CommentContainer;

