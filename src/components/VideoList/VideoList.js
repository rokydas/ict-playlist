import React from 'react';
import videoLinks from '../VideoLinks/VideoLinks';

const VideoList = ({currentVideo, setCurrentVideo}) => {
    return (
        <div>
            {
                videoLinks.map(video =>  <li>{video.link}</li>)
            }
        </div>
    );
};

export default VideoList;