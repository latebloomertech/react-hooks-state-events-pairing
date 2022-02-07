import video from "../data/video.js";
import VideoStats from "./VideoStats"
import Video from "./Video"

function App() {
  
  return (
    <div className="App">
     <Video url={video.embedUrl} />
     <VideoStats
     title={video.title}
     views={video.views}
     created={video.createdAt}
     upvotes={video.upvotes}
     downvotes={video.downvotes}
     comments={video.comments}
     />
    </div>
  );
}

export default App;
