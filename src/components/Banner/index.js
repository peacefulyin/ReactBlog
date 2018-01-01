import React from 'react'
import './style.scss'

class Banner extends React.Component {
    constructor(props, context){
        super(props, context)

    }

    componentWillMount(){

    }

    render(){
        return (
            <div style={{background:`url(${this.props.imgUrl})`,height:this.props.height}} className="banner" id="Banner">
                <div className="banner-cover">
                    <h2 style={{lineHeight:this.props.height}} className="banner-title">
                        {this.props.title}
                    </h2>
                </div>
            </div>
        )
    }
}


export default Banner