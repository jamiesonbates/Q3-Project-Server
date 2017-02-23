import React, { Component } from 'react';
import Modal from 'react-modal';
import UserIcon from 'react-icons/lib/ti/group-outline';
import PwIcon from 'react-icons/lib/ti/key-outline';
import Register from './Register/Register';
import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      modalOpen: false
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

    // axios POST to token route

    this.setState({
      username: '',
      password: ''
    });
  }

  handleRegisterClick(bool) {
    if (!this.state.modalOpen) {
      this.setState({
        modalOpen: bool
      });
    }
    else {
      this.setState({
        modalOpen: bool
      });
    }
  }

  render() {
    const customStyles = {
      overlay: {
        position: 'fixed',
        backgroundColor: 'rgba(30, 30, 30, 0.75)',
      },
      content: {
        // backgroundColor: '#5294d9',
        width: '80%',
      }
    };

    return <div>
      <Modal
        contentLabel="Modal"
        isOpen={this.state.modalOpen}
        style={customStyles}
      >
        <Register modalClose={this.handleRegisterClick} />
      </Modal>
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
        <p>No account? No problem!
          <a
            className="Login-Link"
            href="#!"
            onClick={() => this.handleRegisterClick(true)}
          >
            Register for free
          </a>
          and join the community.
        </p>
      </div>
    </div>
  }
}

module.exports = Login;
