import React from 'react';

// VideoDetail only need to care about video title, description, the url. Those are properties
// that are available through props. Therefore, we don't really need a state here. We just need a 
// simple functional component.
const VideoDetail = ({video}) => { // ES6 trick. see video_list_item
    if (!video) {
        return <div>Loading...</div>;
    }
    // Whenever you want to embed a video from YouTube or navigate to a video, the only thing that changes in the 
    // url is the id of the video. We can craft our own url. 
    const videoId = video.id.videoId;
    const url = 'https://www.youtube.com/embed/' + videoId;
    // ES6 trick. String interpolation: 
    // const url = `https://www.youtube.com/embed/${videoId}`; 
    
    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}></iframe>
            </div>
            <div className="details">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    );
};

export default VideoDetail;