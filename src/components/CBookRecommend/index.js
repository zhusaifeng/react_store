import React, { Component } from 'react'
import Axios from 'axios'
import './index.css'

    export default class index extends Component {
        constructor(props){
            super(props)
            this.state={success:false}
            Axios.get('api/book/api-book-recommend/'+props.bookid).then(
                response=>{
                    console.log(response.data)
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
        if(this.state.success){
        return (
        <div className='recommend'>
            <p>喜欢本书的人还喜欢：</p>
            <div>
                {
                    BookRecommend.map((data,index)=>{
                        return(
                            <img src={BookRecommend[index].bookImageBig} alt='图片' className='img'></img>
                        )
                    })
                }
                
            </div>
        </div>
        )
    }
}
}
