import React, { useState } from 'react';
import VideoList from '../VideoList/VideoList';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import './Home.css';
import videoLinks from '../VideoLinks/VideoLinks';

const Home = () => {

    const [currentVideo, setCurrentVideo] = useState(videoLinks[0]);

    return (
        <div className="custom-container">
            <div className="row">
                <div className="col-md-8">
                    <VideoPlayer currentVideo={currentVideo} setCurrentVideo={setCurrentVideo} />
                </div>
                <div className="col-md-4">
                    <VideoList currentVideo={currentVideo} setCurrentVideo={setCurrentVideo} />
                </div>
            </div>
        </div>
    );
};

export default Home;