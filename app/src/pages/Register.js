import React from 'react'
import './Login.css'
import { register } from '../api'

class Login extends React.Component {
  constructor() {
    super()
    this.confirm = this.confirm.bind(this)
    this.handleTextChange = this.handleTextChange.bind(this)
    this.state = {
      email: '',
      userName: '',
      password: ''
    }
  }
  confirm() {
    if (!this.state.email || !this.state.password || !this.state.userName) {
      return alert('输入不能为空')
    }
    register(this.state.email, this.state.password, this.state.userName).then(
      result => {
        const data = result.data
        if (data && data.success) {
          alert('注册成功')
          this.props.history.replace({
            pathname: '/'
          })
        } else {
          alert((data && data.message) || '注册失败')
        }
      }
    )
  }
  handleTextChange(key, event) {
    const updateObj = {}
    updateObj[key] = event.target.value
    this.setState(updateObj)
  }
  render() {
    return (
      <div className="register-page">
        <div>
          <span className="form-desc">邮箱</span>
          <input
            placeholder="请输入邮箱"
            value={this.state.email}
            onChange={e => this.handleTextChange('email', e)}
          ></input>
        </div>
        <div>
          <span className="form-desc">昵称</span>
          <input
            placeholder="请输入昵称"
            value={this.state.userName}
            onChange={e => this.handleTextChange('userName', e)}
          ></input>
        </div>
        <div>
          <span className="form-desc">密码</span>
          <input
            placeholder="请输入密码"
            value={this.state.password}
            onChange={e => this.handleTextChange('password', e)}
          ></input>
        </div>
        <button className="confirm" onClick={this.confirm}>
          注册
        </button>
      </div>
    )
  }
}

export default Login
