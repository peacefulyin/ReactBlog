import React from 'react'
import './style.scss'

class ShareIcons extends React.Component {
    constructor(props, context) {
        super(props, context);

    }

    render() {
        return(
            <div className="shared-icons" id="sharedIcons">
                <p className="SNS">
                    <span>SNS</span>
                </p>
                <ul>
                    <li><a className="facebook" href="">
                        <span>facebook</span>
                    </a></li>
                    <li><a className="twitter" href="">
                        <span>twitter</span>
                    </a></li>
                    <li><a className="weibo" href="">
                        <span>weibo</span>
                    </a></li>
                    <li><a className="weixin" href="">
                        <span>weixin</span>
                    </a></li>
                </ul>
            </div>
        )
    }
}

export default ShareIcons