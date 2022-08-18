import React, { Component } from 'react'
import Axios from 'axios'
import './index.css'

export default class index extends Component {
    constructor(props){
        super(props)
        console.log(props.bookid)

        this.state={success:false}
        Axios.get('api/book/api-book-book-byid/'+props.bookid).then(
            response=>{
                if(response.data.bookImageBig===''){
                    response.data.bookImageBig='./1.png'
                }
                if(response.data.bookAuthor===''){
                    response.data.bookAuthor="更新中..."
                }
                if(response.data.bookPress===''){
                    response.data.bookPress="更新中..."
                }
                if(response.data.bookResidue==null){
                    response.data.bookResidue="数据更新中..."
                }
                if(response.data.bookDesc==null){
                    response.data.bookDesc="数据更新中..."
                }
                console.log(response.data)
                this.setState({
                    BookInfo:response.data,
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
        const BookInfo=this.state.BookInfo
    if(this.state.success){
    return (
        <div>
            <div className='top_detail'>
                <div className='bookinfo'>
                    <div><img src={BookInfo.bookImageBig}  alt="图片" className='book'></img></div>
                    <div>
                        <p className='info1'>
                            书名：{BookInfo.bookName}<br/>
                            作者：{BookInfo.bookAuthor}<br/>
                            出版社：{BookInfo.bookPress}<br/>
                            类别：{BookInfo.bookClassifyOne}
                        </p>
                    </div>
                </div>
                <div>
                    <p className="clear1">简介</p>
                    <p className="clear2"> {BookInfo.bookDesc}</p>
                </div>
            </div>
        </div>
    )
    }
}
}
