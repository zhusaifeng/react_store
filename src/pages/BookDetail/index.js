import React, { Component } from 'react'
import './index.css'
import CBookInfo from '../../components/CBookInfo'
import CBookRecommend from '../../components/CBookRecommend'

export default class index extends Component {
    constructor(props){
        super(props)
        console.log(props.match.params.bookid )
    }
render() {
    return (
        <div className='bookdetail_style'>
                <CBookInfo bookid={this.props.match.params.bookid}/>
                <CBookRecommend bookid={this.props.match.params.bookid}/>
                <div>
                    <button class="btn">下载txt</button>
                    <button class="btn" style={{left:"40%"}}> 立即阅读</button>
                </div>
        </div>
    )
}
}
