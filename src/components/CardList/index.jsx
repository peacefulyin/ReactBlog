import React from 'react'
import {withRouter} from "react-router-dom";
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import CardItem from './CardItem'
import Grid from 'material-ui/Grid'
import {getArticleList} from './api'
import * as CardListActions from './actions'


import './style.scss'


class CardList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.handleScroll = this.handleScroll.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.listUpdate = this.listUpdate.bind(this)
        // this.receiveHeight = this.receiveHeight.bind(this)
        this.updating = false
        this.state = {
            pageSize: this.props.pageSize,
            nextPage: this.props.nextPage,
            list: [],
            // childHeight: 0,
            windowHeight: 0,
            gridNumber: this.props.gridNumber,
        }
    }

    // 接收子组件传来的高度
    // receiveHeight(Height){
    //     if(this.state.childHeight === 0){
    //         this.setState({
    //             childHeight: Height,
    //         })
    //
    //     }
    //
    // }

    // 根据滚动高度决定刷新时机
    handleScroll() {
        const docElem = document.documentElement
        let scrollTop = docElem.scrollTop
        let scrollHeight = docElem.scrollHeight
        let clientHeight = docElem.clientHeight
        if(scrollTop >= (scrollHeight-clientHeight)- 100){
            this.listUpdate(this.state.pageSize)
        }
    }

    // 滑动后增加数据
    listUpdate(size){
        if (!this.updating) {
            this.updating = true
            getArticleList(this.state.nextPage, size).then(res => {
                this.setState({
                    list: this.state.list.concat(res.data.results),
                })
                this.props.increase(size/this.state.pageSize)
            }).then(() => {
                this.setState({
                    nextPage: this.props.nextPage
                }, () => {
                    this.updating = false;
                })
            })
        }
    }

    handleClick(key) {
        this.props.history.push('/article/' + key)
    }

    init() {
        // 恢复到初始页面
        window.addEventListener('scroll', this.handleScroll);
        this.listUpdate(this.state.pageSize*2)
    }

    componentDidMount() {
        this.init()
    }

    componentWillUnmount(){
        this.props.reset()
    }


    render() {
        // return (
        //     <div className="card-list">
        //         {this.state.updating ? <span>updating</span> : ""}
        //         {this.state.list.map((item, index) => {
        //             return (
        //                 <CardItem itemWidth={this.props.itemWidth} transFunc={this.receiveHeight} ref="cardItem" key={index} item={item} click={this.handleClick}/>
        //             )
        //         })}
        //     </div>
        // )
         return (
            <Grid container spacing={0} className="card-list">
                {this.state.updating ? <span>updating</span> : ""}
                <Grid className="center-con" container spacing={40}>
                    {this.state.list.map((item, index) => {
                        return (
                            <Grid key={index} item xs={this.state.gridNumber}>
                                <CardItem itemWidth={this.props.itemWidth} transFunc={this.receiveHeight} ref="cardItem"  item={item} click={this.handleClick}/>
                            </Grid>
                        )
                    })}

                </Grid>

            </Grid>

        )
    }
}



function mapStateToProps(state) {
    return {
        nextPage: state.cardList.nextPage
    }
}

function mapDispatchToProps(dispatch) {
    return {
        increase: bindActionCreators(CardListActions.increase, dispatch),
        reset: bindActionCreators(CardListActions.reset, dispatch),
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(CardList))


