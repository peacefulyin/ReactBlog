import React from 'react'
import Nav from 'components/Nav'
import SharedIcons from 'components/ShareIcons'
import RightRecom from 'main/Article/RightRecom'
import Banner from 'components/Banner'
import axios from 'axios'

import './style.scss'
import './static/marxico.scss'

class Article extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            articleId: props.match.params.id,
            content: null,
            fixed: false,
        }
    }

    init(){
        window.addEventListener('scroll', this.handleScroll);
        this.getArticle()
    }


    componentWillReceiveProps(nextProps) {
        if (nextProps.match.params.id !== this.props.match.params.id) {
            this.setState({
                articleId: nextProps.match.params.id,
            }, () =>{
                this.getArticle()
            });
        }
    }



    componentDidMount() {
        this.init()
    }


    getArticle() {
        axios.get(`http://localhost:8000/api/article/${String(this.state.articleId)}`).then((res) => {
            const str = res.data.content.replace(/src="(.*?)"/i, "src='http://localhost:8000$1'")
            let result = Object.assign({}, res.data, {content: str})
            this.setState({
                content: result.content
            })
        }).catch((err) => {
            console.log(err)
        })
    }

    handleScroll(){
        const bannerElem = this.refs.banner
        let offBot = bannerElem.offsetTop + bannerElem.clientHeight
        if(document.documentElement.scrollTop > offBot && this.state.fixed === false){
            this.setState({
                fixed: true,
            })
        } else if(document.documentElement.scrollTop < offBot && this.state.fixed === true){
            this.setState({
                fixed: false,
            })
        }
    }


    render() {
        return (
            <div className="main-con" id="articleWarp">
                <div className="nav-con">
                    <Nav/>
                </div>
                <div className="center-con">
                    <div className="banner-con" ref="banner">
                        <Banner imgUrl={require('src/static/img/articleBanner.jpg')} height={'300px'} />
                    </div>
                    <div className="center-info">
                        <div ref="fixedElem1" className={`${this.state.fixed? 'add-fixed' : ''} shared-icons-con`}>
                            <SharedIcons/>
                        </div>
                        {this.state.content? <div className="article-con">
                            <h2>这是标题啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊</h2>
                            <div className="tag-date-con">
                                <span>アクセス解析</span>
                                <span>|</span>
                                <span>2017.12.07</span>
                            </div>
                            <article className="article-content"
                                     dangerouslySetInnerHTML={{__html: this.state.content}}>
                            </article>
                        </div> : <h3 className="article-con">正在加载中</h3>}

                        <div className={`${this.state.fixed? 'add-fixed' : ''} right-recom-con`}>
                            <RightRecom/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Article