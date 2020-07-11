import React, {Component} from 'react'
import PropTypes from 'prop-types'

class item   extends Component {
  state = {
    searchName: ''
  }
//类型要求
//   static propTypes = {
//     refreshName: PropTypes.func.isRequired
//   }
//方法

  deleteitem = () => {
      this.props.ondeletestate(this.props.index)
  }
//渲染函数
  render() {
  //放入jsx的写法
      const {username,content} =this.props.element;
      console.log(username,content)
    return (
            <li className="item"   >
                <button onClick={this.deleteitem} >删除</button>
                <p className="title">{username}</p>
                <p className="content">{content}</p>
            </li>



    )
  }
}

//导出
export default item
