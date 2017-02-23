import React, { Component } from 'react';
import UserIcon from 'react-icons/lib/ti/group-outline';
import PwIcon from 'react-icons/lib/ti/key-outline';
import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRegisterClick = this.handleRegisterClick.bind(this);
  }

  handleChange(event) {
    const nextState = {
      [event.target.name]: event.target.value
    };


    this.setState(nextState);
  }

  handleSubmit(event) {
    event.preventDefault();

    // axios POST to add username

    this.setState({
      username: '',
      password: ''
    });
  }

  handleRegisterClick() {
    // open modal registration form

    console.log('clicked');
  }

  render() {
    return <div>
      <div className="Login-Logo f2">
        <p>APP NAME</p>
      </div>
      <div className="Login-Hero"></div>
      <div className="Login-FormContainer">
        <form
          className="Login-Form"
          onSubmit={this.handleSubmit}
        >
          <label>
            <UserIcon className="Login-Icon" />
            <input
              className="Login-Input"
              name="username"
              type="text"
              onChange={this.handleChange}
              value={this.state.username}
              required
            />
          </label>
          <label>
            <PwIcon className="Login-Icon" />
            <input
              className="Login-Input"
              name="password"
              type="text"
              onChange={this.handleChange}
              value={this.state.password}
              required
            />
          </label>
          <button
            className="Login-Button br2"
            type="submit"
          >
            Login
          </button>
        </form>
        <p>Not a user?
          <a
            className="Login-Link"
            href="#!" onClick={this.handleRegisterClick}
          >
            Register for free!
          </a>
        </p>
      </div>
    </div>
  }
}

module.exports = Login;
