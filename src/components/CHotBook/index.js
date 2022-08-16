import React, { Component } from 'react'
import Axios from 'axios'
import './index.css'
export default class index extends Component {
    constructor(props){
        super(props)
        this.state={success:false}
        Axios.get('api/book/api-index-getHotBook').then(
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
                    HotBook:response.data,
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
        const HotBook=this.state.HotBook
        if(this.state.success){
        return (
            <div>
                {
                    HotBook.map((data,index)=>{
                        return(
                            <div key={HotBook[index].bookId} className='newbook'>
                                <img className='bookimg'  src={HotBook[index].bookImageBig} alt="书本图片"/>
                                <div className="tag1">热门</div>
                                <p className='info'>
                                    书名：{HotBook[index].bookName}<br/>
                                    作者：{HotBook[index].bookAuthor}<br/>
                                    分类：{HotBook[index].bookClassifyOne}<br/>
                                    出版社：{HotBook[index].bookPress}<br/>
                                    库存：{HotBook[index].bookResidue}<br/>
                                </p>
                            </div>
                        )
                    })
                }
                
            </div>
            )}
        }
}
