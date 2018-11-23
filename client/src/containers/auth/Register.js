import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import RegisterComponent from '../../components/auth/Register';

class RegisterContainer extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      userName: "",
      password: "",
      password2: '',
      student: true,
      hr: false,
      errors: {},
    };
  }

  
  submitButton = (e) => {
    e.preventDefault();
   
  };

  loginButton = (e) => {
    e.preventDefault();
    this.props.history.push('/login');
  };

  onTicket = () => {
    this.setState({
      student: !this.state.student,
      hr: !this.state.hr,
    });
  };

  onChangeText = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    
    return (
      <div>
        <RegisterComponent 
          data={this.state} 
          onTicket={this.onTicket} 
          onChangeText={this.onChangeText}
          loginButton={this.loginButton}
          submitButton={this.submitButton}
        />
      </div>
    );

  }
}

RegisterContainer.propTypes = {
  
};

const mapStateToProps = (state) => ({
  auth: state.auth,
})

export default connect(mapStateToProps)(RegisterContainer);