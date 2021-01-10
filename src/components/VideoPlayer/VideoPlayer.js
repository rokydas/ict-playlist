import React from 'react';

const VideoPlayer = ({currentVideo, setCurrentVideo}) => {
    return (
        <div>
            <iframe width="750" height="420" src={currentVideo.link} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <h1></h1>
            
        </div>
    );
};

export default VideoPlayer;