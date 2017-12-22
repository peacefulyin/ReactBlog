import React from 'react'
import FlatButton from 'material-ui/FlatButton';
import './style.scss'

class Header extends React.Component {
    render() {
        return (
            <div className="m-nav">
                <div className="logo"/>
                <div className="brand-title"><p>Webマーケティングに関する情報を発信</p></div>
                <div className="nav-category">
                    <ul className="nav-category-master">
                        <li><a className="nav-category-slave" href="">アクセス解析</a></li>
                        <li><a className="nav-category-slave" href="">改善</a></li>
                        <li><a className="nav-category-slave" href="">SEO</a></li>
                        <li><a className="nav-category-slave" href="">公告</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}




export default Header