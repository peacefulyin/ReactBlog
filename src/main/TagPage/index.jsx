import React, {Component} from 'react'
import Nav from 'components/Nav'
import SharedIcons from 'components/ShareIcons'
import RightRecom from 'components/RightRecom'
import Banner from 'components/Banner'
import CardList from 'components/CardList'
import ArticleWithin from 'src/HOC/ArticleWithin'
import axios from 'axios'
import Grid from 'material-ui/Grid';


import 'src/static/css/bootstrap/bootstrap.css'
import './style.scss'



class TagPage extends Component {
    constructor(props, context) {
        super(props, context);
        this.state= {
            bannerImg: require('src/static/img/articleBanner.jpg'),
            bannerHeight: '300px',
            bannerTitle: 'SEO',
            fixed: this.props.fixed,
        }
    }

    init(){
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            fixed:nextProps.fixed
        })
    }


    render() {
        return (
            <div className="main-con" id="tagPageWrap">
                <div className="nav-con">
                    <Nav/>
                </div>
                <div className="banner-con" ref="banner">
                    <Banner imgUrl={this.state.bannerImg} height={this.state.bannerHeight} title={this.state.bannerTitle} />
                </div>
                <Grid className="center-con" container spacing={40}>
                    <Grid className="center-left" item xs={9}>
                        <CardList pageSize={12} gridNumber={3}/>
                    </Grid>
                    <Grid className="center-right" item xs={3}>
                        <div className={`${this.state.fixed? 'add-fixed' : ''} right-recom-con`}>
                            <RightRecom/>
                        </div>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default ArticleWithin(TagPage)