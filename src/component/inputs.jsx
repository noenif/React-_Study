import React, {Component} from 'react'
import PropTypes from 'prop-types'

class inputs   extends Component {
    state = {
        username:"", content:''

    }
//类型要求
//   static propTypes = {
//     refreshName: PropTypes.func.isRequired
//   }
//方法
    onsubmit=()=>{
        let  onchangestate = this.props.onchangestate;
        let {username,content} = this.state;
        let  comment1 = {username,content}
        onchangestate(comment1)
        this.setState({
            username :'',
            content : ""
        })

    }
    usernamechange = (e) => {

this.setState(
    {
        username:e.target.value
    }

)

  }
  contentchange =(e)=>{
      this.setState(
          {
              content:e.target.value
          }

      )
  }
//渲染函数
  render() {
  //放入jsx的写法
    return (
        <div className={"input"}>
          <p>
            用户名
          </p>
          <input type="text" placeholder={"用户名"} value={this.state.username} onChange={this.usernamechange}/>
          <p>
            评论内容
          </p>
          <textarea name="" id="" cols="30" rows="10" placeholder={"请输入一些评论内容"} value={this.state.content} onChange={this.contentchange}></textarea>
        <button onClick={this.onsubmit}>提交</button>
        </div>
    )
  }
}

//导出
export default inputs
