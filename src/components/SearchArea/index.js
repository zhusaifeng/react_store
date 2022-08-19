import React, { Component } from 'react'
import './index.css'
import Axios from 'axios'
import {Link} from 'react-router-dom'
import searchimg from './search.jpg'

export default class index extends Component {
    constructor(props){
        super(props)
        this.state={
            success:false
        }
    }
    render() {
        console.log("执行render")
        console.log("render中搜索到的书本信息",this)
        // 需要读取bookid，查到书本才执行
        if(this.state.success){
            const bookid=this.state.getbook[0].bookId
            console.log('bookid',bookid)
            return (
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input onChange={this.saveInput} type="text" name="userinput" className='search_input'/><br/>
                        <Link to={'/BookDetail/'+bookid}><img className='searchimg' src={searchimg} alt="搜索图片"/></Link>
                    </form>
                </div>
            )
        }
        else{
            return (
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input placeholder='点击回车搜索' onChange={this.saveInput} type="text" name="userinput" className='search_input'/><br/>
                    </form>
                </div>
            )
        }
    }
    handleSubmit=(e)=>{
        e.preventDefault()//阻止表单提交
        const {userinput}=this.state
        console.log("读取状态中的用户输入",userinput)
        Axios.get('apibook/api-book-book-bynamelike/'+userinput).then(
            response=>{
                console.log(response.data)
                this.setState({
                    getbook:response.data,
                })
                // 如果返回的数据为空
                if(response.data.length===0){
                    this.setState({
                        success:false
                    })
                    alert("暂无此书")
                }
                else{
                    this.setState({
                        success:true
                    })
                }
            },
            error=>{
                console.log(error.message)
                this.setState({
                    success:false
                })
            }
        )
    }
    saveInput=(e)=>{
        console.log("保存用户输入的信息为：",e.target.value)
        this.setState({
            userinput:e.target.value
        })//将用户输入写入状态,
        Axios.get('apibook/api-book-book-bynamelike/'+e.target.value).then(
            response=>{
                console.log(response.data)
                this.setState({
                    getbook:response.data,
                })
                // 如果返回的数据为空
                if(response.data.length===0){
                    this.setState({
                        success:false
                    })
                }
                else{
                    this.setState({
                        success:true
                    })
                }
            },
            error=>{
                console.log(error.message)
                this.setState({
                    success:false
                })
            }
        )
    }
}

