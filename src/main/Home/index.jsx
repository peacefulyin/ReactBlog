import React from 'react'
import Nav from 'main/Home/Nav'
import './style.scss'
import leftBannerMp4 from 'main/Home/static/leftBanner.mp4'
import CardList from 'main/Home/CardList'



const Home = () => (
    <div className="main-con" id="homeNav">
        <div className="nav-con">
            <Nav />
        </div>
        <div className="nav-stub"/>
        <div className="center-con">
            <div className="center-left">
                <div className="video-con">
                    <video autoPlay="autoplay">
                        <source src={leftBannerMp4} type="video/mp4"/>
                    </video>
                    <div className="video-cover"/>

                </div>
            </div>
            <div className="center-right">
                <CardList/>
            </div>

        </div>
    </div>
);

export default Home