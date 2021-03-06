import React from 'react'
import './Login.css'
import {register} from '../../api/api';
import {Grid, Typography, Button} from '@material-ui/core';
import { toastr } from "react-redux-toastr";

class Login extends React.Component {
    constructor() {
        super()
        this.confirm = this
            .confirm
            .bind(this)
        this.handleTextChange = this
            .handleTextChange
            .bind(this)
        this.state = {
            email: '',
            userName: '',
            password: ''
        }
    }
    confirm() {
        if (!this.state.email || !this.state.password || !this.state.userName) {
            return toastr.error("Error","Please enter all the fields")
        }
        register(this.state.email, this.state.password, this.state.userName).then(result => {
            const data = result.data
            if (data && data.success) {
                toastr.success("Sucess","Registed successfully!");
                this
                    .props
                    .history
                    .goBack();
            } else {
                toastr.error("Error","Registed failed")
                // alert((data && data.message) || '注册失败')
            }
        }).catch(e => {
            toastr.error("Error","Registed failed");
            console.log(e);
        })
    }
    handleTextChange(key, event) {
        const updateObj = {}
        updateObj[key] = event.target.value
        this.setState(updateObj)
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
                    <Typography variant="h5">
                        SIGN UP
                    </Typography>
                    <hr className="divider" align="center"/>

                    <div>
                        <Typography variant='body2' className="form-desc" align="left">Email*</Typography>
                        <div>
                            <input
                                placeholder="Enter you email"
                                value={this.state.email}
                                onChange={e => this.handleTextChange('email', e)}
                                className="input"
                                required></input>
                        </div>
                        <Typography variant='body2' className="form-desc" align="left">Username*</Typography>
                        <div>
                            <input
                                placeholder="Enter your username"
                                value={this.state.userName}
                                onChange={e => this.handleTextChange('userName', e)}
                                className="input"
                                required></input>
                        </div>
                        <Typography variant='body2' className="form-desc" align="left">Password</Typography>
                        <div>
                            <input
                                placeholder="Enter your password"
                                value={this.state.password}
                                onChange={e => this.handleTextChange('password', e)}
                                className="input"
                                required></input>
                        </div>
                    </div>
                    <div className="btn-group">
                        <Button
                            className="btnStyle"
                            variant="contained"
                            color="secondary"
                            size="large"
                            onClick={this.confirm}>Sign up</Button>
                    </div>

                </Grid>
            </Grid>
        )
    }
}

export default Login
