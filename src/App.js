
// 创建类式组件
import React from 'react'
import {NavLink,Route,Redirect} from 'react-router-dom'
import User from './pages/User'
import MainBook from './pages/MainBook'
import BookList from './pages/BookList'
import './App.css'
// import Axios from 'axios'
class App extends React.Component{
  render(){
    return(
      <div className='bigcontainer'>
        <ul className="topul">
          <li className="topli"><NavLink activeClassName='active' to="/MainBook" className='top'>推荐</NavLink></li>
          <li className="topli"><NavLink activeClassName='active' to="/BookList" className='top'>书库</NavLink></li>
          <li className="topli"><NavLink activeClassName='active' to="User" className='top'>用户</NavLink></li>
        </ul> 
        <div className='container'>
        <Route path="/MainBook" component={MainBook}/>
        <Route path="/BookList" component={BookList}/>
        <Route path="/User" component={User}/>
        <Redirect to="/BookList"/>
        </div>
      </div>
    )
  }
}
export default App