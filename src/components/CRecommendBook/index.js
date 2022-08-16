import React, { Component } from 'react'
import Axios from 'axios'
import './index.css'
export default class index extends Component {
    constructor(props){
        
        super(props)
        this.state={success:false}
        Axios.get('api/book/api-index-getRecommendBook/1').then(
            response=>{
                for(var i=0;i<response.data.length;i++){
                if(response.data[i].bookAuthor===''){
                    response.data[i].bookAuthor="更新中..."
                }
                if(response.data[i].bookPress===''){
                    response.data[i].bookPress="更新中..."
                }
                if(response.data[i].bookResidue==null){
                    response.data[i].bookResidue="数据更新中..."
                }
                }
                console.log(response.data)
                this.setState({
                    RecommendBook:response.data,
                    success:true,
                    isLoading: true
                })
            },
            error=>{
                console.log(error.message)
            }
        )
    }
    render() {
        const RecommendBook=this.state.RecommendBook
        if(this.state.success){
        return (
            <div>
                {
                    RecommendBook.map((data,index)=>{
                        return(
                            <div key={RecommendBook[index].bookId} className='newbook'>
                                <img className='bookimg'  src={RecommendBook[index].bookImageBig} alt="书本图片"/>
                                <div className="tag3">推荐</div>
                                <p className='info'>
                                    书名：{RecommendBook[index].bookName}<br/>
                                    作者：{RecommendBook[index].bookAuthor}<br/>
                                    分类：{RecommendBook[index].bookClassifyOne}<br/>
                                    出版社：{RecommendBook[index].bookPress}<br/>
                                    库存：{RecommendBook[index].bookResidue}<br/>
                                </p>
                            </div>
                        )
                    })
                }
                
            </div>
            )}
        }
}

