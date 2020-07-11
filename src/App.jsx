import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './App.css';
import Inputs from './component/inputs'
import List from './component/list'
class App extends Component {
  state = {
      comment:[

      ]
  }
//类型要求
//   static propTypes = {
//     refreshName: PropTypes.func.isRequired
//   }
//方法
  onchangestate = (comment1) => {
      let  {comment} = this.state;
      comment.unshift(comment1)
      this.setState({
          comment
      })

  }
  ondeletestate=(index)=> {
      let {comment} = this.state;
      comment.splice(index, 1)
      this.setState({
          comment
      })
  }
//渲染函数
  render() {
    return (
//放入jsx的写法
        <div>
        <div className="title">
          请发表对React 的评论
        </div>
        <Inputs onchangestate={this.onchangestate}/>
        <List comment={this.state.comment} ondeletestate={this.ondeletestate}/>
        </div>

    )
  }
}

//导出
export default App
