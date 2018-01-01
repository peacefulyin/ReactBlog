import React from 'react'
import FlatButton from 'material-ui/FlatButton';
import DropDown from 'components/DropDown'
import './style.scss'

class Header extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.toggleHover = this.toggleHover.bind(this)
        this.list =
        this.state = {
            showState: {display: 'block'},
            list: [
                {'title': 'Google设定A', 'url': 'google.com'},
                {'title': 'Google设定B', 'url': 'google.com'},
                {'title': 'Google设定C', 'url': 'google.com'},
                {'title': 'Google设定D', 'url': 'google.com'}
            ]
        }
    }

    toggleHover(e){
        this.setState({
            showState: {display: 'none'}
        })
    }

    render() {
        return (
            <div className="m-nav clearfix">
                <div className="logo"/>
                <div className="brand-title"><p>Webマーケティングに関する情報を発信</p></div>
                <div className="nav-category">
                    <ul className="nav-category-master">
                        <li>
                            <DropDown list={this.state.list} title={"アクセス解析"}/>
                        </li>
                        <li>
                            <DropDown list={this.state.list} title={"SEO"}/>
                        </li>
                        <li><DropDown list={this.state.list} title={"公告"}/></li>
                    </ul>
                </div>
            </div>
        )
    }


}




export default Header