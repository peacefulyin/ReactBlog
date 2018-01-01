import React from 'react'
import './style.scss'

class RightRecom extends React.Component {
    constructor(props, context) {
        super(props, context);

    }

    render() {
        return (
            <div className="right-recom" id="RightRecom">
                <div className="top-recom">
                    <a href=""><img src="https://wacul-ai.com/blog/wp-content/themes/wacul-blog-rook-v2/common/image/banner_nav-sidebar.jpg" alt=""/></a>
                </div>
                <div className="recom-slider">
                    <div>
                        <p className="r-slicer-title">よく読まれている記事</p>
                    </div>
                    <ul>
                        <li>
                            <a className="slider-img-con" href=""><img src="https://wacul-ai.com/blog/wp-content/uploads/2017/06/11.gif" alt=""/></a>
                            <p className="slider-info-title"><a href="">
                                イベントトラッキングとは？Googleアナリティクスでの活用法を解説！
                            </a></p>
                        </li>
                        <li>
                            <a className="slider-img-con" href=""><img src="https://wacul-ai.com/blog/wp-content/uploads/2017/06/11.gif" alt=""/></a>
                            <p className="slider-info-title"><a href="">
                                イベントトラッキングとは？Googleアナリティクスでの活用法を解説！
                            </a></p>
                        </li>
                        <li>
                            <a className="slider-img-con" href=""><img src="https://wacul-ai.com/blog/wp-content/uploads/2017/06/11.gif" alt=""/></a>
                            <p className="slider-info-title"><a href="">
                                イベントトラッキングとは？Googleアナリティクスでの活用法を解説！
                            </a></p>
                        </li>
                        <li>
                            <a className="slider-img-con" href=""><img src="https://wacul-ai.com/blog/wp-content/uploads/2017/06/11.gif" alt=""/></a>
                            <p className="slider-info-title"><a href="">
                                イベントトラッキングとは？Googleアナリティクスでの活用法を解説！
                            </a></p>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }


}




export default RightRecom