import React from 'react';

const VideoPlayer = ({ currentVideo, setCurrentVideo }) => {
    return (
        <div>
            <iframe style={{marginTop: '100px'}} width="100%" height="500px" src={currentVideo.link} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>   
        </div>
    );
};

export default VideoPlayer;