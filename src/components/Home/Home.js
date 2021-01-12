import React, { useState } from 'react';
import VideoList from '../VideoList/VideoList';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import './Home.css';
import videoLinks from '../VideoLinks/VideoLinks';

const Home = () => {

    const [currentVideo, setCurrentVideo] = useState(videoLinks[0]);

    return (
        <div className="custom-container">
            <h1 className="text-center mb-3">Study With Anis</h1>
            <h3 className="text-center mb-5">HSC ICT Tutorials</h3>
            <div className="row">
                <div className="col-md-6">
                    <VideoPlayer currentVideo={currentVideo} setCurrentVideo={setCurrentVideo} />
                </div>
                <div className="col-md-6">
                    <VideoList currentVideo={currentVideo} setCurrentVideo={setCurrentVideo} />
                </div>
            </div>
        </div>
    );
};

export default Home;