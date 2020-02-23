import React from 'react'
import './Login.css'
import {login} from '../../api/api';
import {Grid, Typography, Button} from '@material-ui/core';

class Login extends React.Component {
    constructor() {
        super()
        this.confirm = this
            .confirm
            .bind(this)
        this.register = this
            .register
            .bind(this)
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
        this
            .props
            .history
            .push({pathname: '/register'})
    }
    render() {
        return (
            <Grid container justify="center">
                <Grid
                    item
                    xs={12}
                    lg={3}
                    md={3}
                    sm={4}
                    className="login-page"
                    style={{
                    display: 'table'
                }}>
                    <Typography variant="h6">
                        SIGN IN
                    </Typography>
                    <hr className="divider" align="center"/>
                    <div>
                        <Typography variant='body1' className="form-desc" align="left">Email</Typography>
                        <div>
                            <input
                                placeholder="Enter your email"
                                value={this.email}
                                onChange={e => this.onTextChange('email', e)}
                                className="input"
                                required></input>
                        </div>

                        <Typography variant='body1' className="form-desc" align="left">Password</Typography>
                        <input
                            placeholder="Enter your password"
                            value={this.password}
                            onChange={e => this.onTextChange('password', e)}
                            className="input"
                            required></input>
                    </div>
                    <div className="btn-group">
                        <Button
                            className="btnStyle"
                            variant="contained"
                            size="large"
                            onClick={this.confirm}
                            
                           >
                            {' '}
                            Log in
                        </Button>
                        <div style={{marginTop: '1.5em'}}>
                            <p className="rlink" onClick={this.register}>Haven't registered yet?</p>
                        </div>

                    </div>

                </Grid>
            </Grid>
        )
    }
}

export default Login
