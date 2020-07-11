import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Item from './item'

class list   extends Component {
  state = {
    searchName: ''
  }
//类型要求
  static propTypes = {
      comment:PropTypes.array.isRequired,
    refreshName: PropTypes.func.isRequired
  }
//方法
//   search = () => {
//
//   }
//渲染函数
  render() {
  //放入jsx的写法
            const {comment} = this.props
      console.log(this.props)
        if(comment.length > 0){
            console.log(1)
            return (
                <div className={"list"}>
                    {comment.map((element,index ) => {
                        console.log(element)
                       return  <Item element={element} index={index} key={index} ondeletestate={this.props.ondeletestate}/>
                    })
                    }
                </div>
            )
        }else {
            console.log(2)
            return (
                <div>
                    暂无评论,请往左边添加评论!
                </div>
            )
        }

  }
}

//导出
export default list
