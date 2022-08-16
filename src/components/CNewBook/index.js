import React, { Component } from 'react'
import Axios from 'axios'
import './index.css'
export default class index extends Component {
    constructor(props){
        super(props)
        this.state={success:false}
        Axios.get('api/book/api-index-getNewBook').then(
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
                    NewBook:response.data,
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
        const NewBook=this.state.NewBook
        if(this.state.success){
        return (
            <div>
                {
                    NewBook.map((data,index)=>{
                        return(
                            <div key={NewBook[index].bookId} className='newbook'>
                                <img className='bookimg'  src={NewBook[index].bookImageBig} alt="书本图片"/>
                                <div className="tag2">新书</div>
                                <p className='info'>
                                    书名：{NewBook[index].bookName}<br/>
                                    作者：{NewBook[index].bookAuthor}<br/>
                                    分类：{NewBook[index].bookClassifyOne}<br/>
                                    出版社：{NewBook[index].bookPress}<br/>
                                    库存：{NewBook[index].bookResidue}<br/>
                                </p>
                            </div>
                        )
                    })
                }
                
            </div>
            )}
        }
}

