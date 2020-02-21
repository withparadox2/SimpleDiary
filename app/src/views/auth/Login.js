import React from 'react'
import './Login.css'
import { login } from '../../api/api'

class Login extends React.Component {
  constructor() {
    super()
    this.confirm = this.confirm.bind(this)
    this.register = this.register.bind(this)
    this.state = {
      email: '',
      password: ''
    }
  }
  confirm() {
    if (!this.state.email || !this.state.password) {
      return alert('输入不能为空')
    }
    login(this.state.email, this.state.password).then(result => {
      const data = result.data
      if (data && data.success) {
        alert('Login successfully');
        
      } else {
        alert((data && data.message) || 'Login failed')
      }
    })
  }
  onTextChange(key, event) {
    const updateObj = {}
    updateObj[key] = event.target.value
    this.setState(updateObj)
  }
  register() {
    this.props.history.push({
      pathname: '/register'
    })
  }
  render() {
    return (
      <div className="login-page">
        <div>
          <span className="form-desc">邮箱</span>
          <input
            placeholder="请输入邮箱"
            value={this.email}
            onChange={e => this.onTextChange('email', e)}
          ></input>
        </div>
        <div>
          <span className="form-desc">密码</span>
          <input
            placeholder="请输入密码"
            value={this.password}
            onChange={e => this.onTextChange('password', e)}
          ></input>
        </div>
        <button className="confirm" onClick={this.confirm}>
          {' '}
          登录
        </button>
        <button className="register" onClick={this.register}>
          注册
        </button>
      </div>
    )
  }
}

export default Login
