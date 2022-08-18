import React, { Component } from 'react'
import Axios from 'axios'
import './index.css'
import {Link} from 'react-router-dom'

    export default class index extends Component {
        constructor(props){
            super(props)
            this.state={success:false}
            Axios.get('api/book/api-book-book-byclassifyone/'+props.match.params.bookclassify).then(
                response=>{
                    console.log("111",response.data)
                    for(let i=0;i<response.data.length;i++){
                        if(response.data[i].bookAuthor===''){
                            response.data[i].bookAuthor="更新中..."
                        }
                    }
                    
                    this.setState({
                        success:true,
                        BookListMore:response.data
                    })

                },
                error=>{

                }
            )
        }
    render() {
        if(this.state.success){
            const BookListMore=this.state.BookListMore
        return (
        <div>
            {
                BookListMore.map((data,index)=>{
                    return(
                        <Link  to={'/BookDetail/'+BookListMore[index].bookId}>
                            <div className='container'>
                                <img className='img' src={BookListMore[index].bookImageBig} alt='图片'/>
                                <p className='msg'>
                                    书名：{BookListMore[index].bookName}<br/>
                                    作者：{BookListMore[index].bookAuthor}<br/>
                                    类型：{BookListMore[index].bookClassifyOne}
                                </p>
                            </div>
                        </Link>
                    )
                })
            }
        </div>
        )
    }
    }
}
