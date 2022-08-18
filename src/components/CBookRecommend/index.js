import React, { Component } from 'react'
import Axios from 'axios'
import './index.css'
import { NavLink } from 'react-router-dom'

    export default class index extends Component {
        constructor(props){
            super(props)
            this.state={success:false}
            Axios.get('api/book/api-book-recommend/'+props.bookid).then(
                response=>{
                    for(let i=0;i<response.data.length;i++){
                        if(response.data[i]!=null&&response.data[i].bookImageBig==='')
                        {
                            response.data[i].bookImageBig='./1.png'
                        }
                    }
                    this.setState({
                        BookRecommend:response.data,
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
        const BookRecommend=this.state.BookRecommend
        console.log("推荐推荐",BookRecommend)
        if(this.state.success){
        return (
        <div className='recommend'>
            <p>喜欢本书的人还喜欢：</p>
            <div>
                {
                    BookRecommend.map((data,index)=>{
                        if(BookRecommend[index]!=null){
                            return(
                                <NavLink to={'/BookDetail/'+BookRecommend[index].bookId}>
                                    <img src={BookRecommend[index].bookImageBig} alt='图片' className='img2'></img>
                                </NavLink>
                            )
                        }
                        else{
                            return true
                        }
                    })
                }
            </div>
        </div>
        )
    }
}
}
