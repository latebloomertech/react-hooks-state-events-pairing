import React, {useState} from 'react';
import CommentContainer from './CommentContainer'

function VideoStats( { title, views, created, upvotes, downvotes, comments}) {

const [upCount, setUpCount] = useState(upvotes)
const [downCount, setDownCount] = useState(downvotes)

function changeUpCount () {
    setUpCount(upCount + 1)
}

function changeDownCount () {
    setDownCount(downCount + 1)
}

  return <div>
    <h2>{title}</h2>
    <h4>{views} Views | Uploaded {created}</h4>
    <button onClick={changeUpCount}> {upCount} 👍</button>
    <button onClick={changeDownCount}> {downCount} 👎</button>
    <br />
    <br />
    <CommentContainer comments={comments} />

  </div>;
}

export default VideoStats;
