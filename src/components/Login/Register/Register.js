import React, { Component } from 'react';
import LeftArrow from 'react-icons/lib/ti/arrow-left-outline';
import UserIcon from 'react-icons/lib/ti/group-outline';
import PwIcon from 'react-icons/lib/ti/key-outline';
import EmailIcon from 'react-icons/lib/ti/social-at-circular';
import AddressIcon from 'react-icons/lib/ti/map';
import PicIcon from 'react-icons/lib/ti/camera-outline';
import './Register.css';


class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      email: '',
      address: '',
      imgUrl: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
  }

  handleChange(event) {
    const nextState = {
      [event.target.name]: event.target.value
    };


    this.setState(nextState);
  }

  handleSubmit(event) {
    event.preventDefault();

    // axios POST to register new user

    this.setState({
      username: '',
      password: '',
      email: '',
      address: '',
      imgUrl: ''
    });
  }

  handleModalClose() {
    console.log(this.props);
    this.props.modalClose(false);
  }

  render() {
    return <div>
      <div className="Register-Header">
        <LeftArrow
          className="Register-LeftArrow"
          onClick={this.handleModalClose}
        />
        <h2>App Name</h2>
      </div>
      <form
        className="Register-Form"
        onSubmit={this.handleSubmit}
      >
        <label>
          Username <UserIcon />
          <input
            className="Register-Input"
            name="username"
            type="text"
            onChange={this.handleChange}
            value={this.state.username}
            required
          />
        </label>
        <label>
          Password <PwIcon />
          <input
            className="Register-Input"
            name="password"
            type="text"
            onChange={this.handleChange}
            value={this.state.password}
            required
          />
        </label>
        <label>
          Email <EmailIcon />
          <input
            className="Register-Input"
            name="email"
            type="text"
            onChange={this.handleChange}
            value={this.state.email}
            required
          />
        </label>
        <label>
          Address <AddressIcon />
          <input
            className="Register-Input"
            name="address"
            type="text"
            onChange={this.handleChange}
            value={this.state.address}
            required
          />
        </label>
        <label>
          Profile Pic URL <PicIcon />
          <input
            className="Register-Input"
            name="imgUrl"
            type="text"
            onChange={this.handleChange}
            value={this.state.imgUrl}
          />
        </label>
        <button
          className="Register-Button br2"
        >
          Register
        </button>
      </form>
    </div>
  }
}



module.exports = Register;
