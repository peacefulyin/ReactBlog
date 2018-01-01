import React from 'react'
import './style.scss'



class CardItem extends React.Component {
    constructor(props, context) {
        super(props, context);
        // this.returnHeight = this.returnHeight.bind(this)
    }

    // 图片加载完成后给父元素返回组件高度
    // returnHeight(){
    //     this.props.transFunc(this.refs.cardItem.offsetHeight)
    // }



    render() {
        return (
            <div ref='cardItem' style={{width:this.props.itemWidth}} className="card-item">
                <div className="card-img-con" onClick={(e)=> {
                    e.preventDefault();
                    this.props.click(this.props.item.id)
                }}>
                    <a href="">
                        {/*图片加载完成事件*/}
                        <img className="card-img" src="https://wacul-ai.com/blog/wp-content/uploads/2017/12/209.jpg" alt=""/>
                    </a>
                </div>
                <div className="card-info">
                    <p className="card-title">
                        <a href="#">{this.props.item.title}</a>
                    </p>
                    <p className="card-details">
                        <span className="card-tag">
                            <a href="">{this.props.item.tag}</a>
                        </span>
                        <span>|</span>
                        <span className="card-pubtime">
                            2017.12.21
                        </span>
                    </p>
                </div>

            </div>
        )
    }


}




export default CardItem