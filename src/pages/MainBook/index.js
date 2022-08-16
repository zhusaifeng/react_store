import React, { Component } from 'react'
import './index.css'
import CHotBook from '../../components/CHotBook'
import CNewBook from '../../components/CNewBook'
import CRecommendBook from '../../components/CRecommendBook'
// import ReactDOM from 'react-dom'
export default class index extends Component {

render() {
    
    return (
        <div>
            <CHotBook/>
            <CRecommendBook/>
            <CNewBook/>
        </div>
        )}
    }


// ReactDOM.render(
//     <HotBook/>,document.getElementById('test')
// )


