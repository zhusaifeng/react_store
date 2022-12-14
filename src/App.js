
// 创建类式组件
import React from 'react'
import {NavLink,Route,Redirect} from 'react-router-dom'
import User from './pages/User'
import MainBook from './pages/MainBook'
import BookList from './pages/BookList'
import BookDetail from './pages/BookDetail'
import BookListMore from './pages/BookListMore'
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
        <div className='mid_container'>
        <Route path="/MainBook" component={MainBook}/>
        <Route path="/BookList" component={BookList}/>
        <Route path="/User" component={User}/>
        <Route path="/BookDetail/:bookid" component={BookDetail}/>
        <Route path="/BookListMore/:bookclassify" component={BookListMore}/>
        <Redirect to="/BookList"/>
        </div>
      </div>
    )
  }
}
export default App