import React from 'react';
import videoLinks from '../VideoLinks/VideoLinks';
import './VideoList.css';

const VideoList = ({ currentVideo, setCurrentVideo }) => {
    return (
        <div className="video-titles">
            {
                videoLinks.map(video =>
                    <div className="video-title">
                        <p onClick={() => setCurrentVideo(video)}>{video.id}. {video.title}</p>
                    </div>
                )
            }
        </div>
    );
};

export default VideoList;