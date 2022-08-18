import React, { Component } from 'react'
import Axios from 'axios'
import './index.css'
import SearchArea from '../../components/SearchArea'
import {Link} from 'react-router-dom'

export default class index extends Component {
constructor(props){
    super(props)
    this.state={success:false}
    Axios.get('api/book/api-book-classifyone-all').then(
        response=>{
            console.log(response.data)
            this.setState({
                BookList:response.data,
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
    const BookList=this.state.BookList
    console.log(BookList)
    if(this.state.success){
    return (
    <div className='s_container'>
        <SearchArea/>
        <div>
        {
            BookList.map((data,index)=>{
                return(
                    <ul key={index} className="bookclassify">
                        <Link to={'/BookListMore/'+BookList[index]}><li className="booklist">{BookList[index]}</li></Link>
                    </ul>
                )
            })
        }
        </div>
    </div>
    )
    }
}
}
