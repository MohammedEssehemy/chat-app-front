import React, { Component } from 'react';
import { login } from './../../API/user';



class CreateUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    setStateField = (fieldName) => e => {
        this.setState({
            [fieldName]: e.target.value
        });

    }

    handleLogin = () => {
        const { username, password } = this.state;
        login({ username, password })
            .then(res => {
                localStorage.setItem('token', res.token);
            })
            .catch(err => {
                debugger;
            })
        // call backend to login
    }


    render() {
        const { username, password } = this.state;
        return (
            <form>
                <fieldset>
                    <input type="text" name="username" value={username} onChange={this.setStateField('username')} placeholder="username" />
                    <input type="password" name="password" value={password} onChange={this.setStateField('password')} placeholder="password" />
                </fieldset>
                <button type="button" onClick={this.handleLogin} > login </button>
            </form>
        )
    }
}


export default CreateUser;