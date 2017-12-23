import React from 'react'
import './style.scss'

class DropDown extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            dropStyle: {display: 'none'},
            fontStyle: props.fontStyle || {fontSize: '16px'},
        };
        this.toggleHover = this.toggleHover.bind(this)
    }

    toggleHover() {
        if(this.state.dropStyle.display === 'none'){
            this.setState({
                dropStyle: {display: 'block'},
            });
            this.refs.DropMaster.classList.add("isHover")
        }else {
            this.setState({
                dropStyle: {display: 'none'},
            });
            this.refs.DropMaster.classList.remove("isHover")

        }
    }



    render() {
        return(
            <a style={this.state.fontStyle} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover} className="drop-master" href="">
                <div ref="DropMaster">
                    <span>{this.props.title}</span>
                    <ul className="drop-elems" style={this.state.dropStyle}>
                        {this.props.list.map( (item, index) =>{
                            return (<li key={index}>{item.title}</li>)
                        })}
                    </ul>
                </div>
            </a>
        )
    }
}

export default DropDown