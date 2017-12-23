import React from 'react'
import './style.scss'
import testImg from './test.jpg'
import testMp4 from './test.mp4'

class LeftBanner extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return(
            <div className="banner-con">
                <div className="bac-video">
                    <img src={testImg} alt=""/>
                    <video >
                        <source src={testMp4} type="video/mp4"/>
                    </video>
                </div>
            </div>
        )
    }
}

export default LeftBanner