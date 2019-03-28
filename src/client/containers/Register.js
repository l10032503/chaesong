import React, {Component} from 'react';
import {Authentication} from '../components';
import {connect} from 'react-redux';
import {registerRequest} from '../actions/Authentication';

class Register extends Component{

    handleRegister = (user_id, pw, birthyear, height, weight, active, vegantype) => {
        return this.props.registerRequest(user_id, pw, birthyear, height, weight, active, vegantype).then(
            ()=> {
                if(this.props.status === "SUCCESS"){
                    console.log('success');
                    this.props.history.push('/login');
                } else {
                    let errorMessage = [
                      'Invalid ID',
                      'Password is too short',
                      'ID already exists'
                    ];
                    console.log('fail');
                    return false;
                }
            }
        )
    }
    render(){
        return (
          <div>
              <Authentication mode={false}
              onRegister={this.handleRegister}/>
          </div>
        );
    }
}

const mapStateToProps = (state) => {
  return{
      state: state.Authentication.register.status,
      errorCode: state.Authentication.register.error
  } ;
};

const mapDispatchToProps = (dispatch) => {
  return{
      registerRequest:(user_id, pw, birthyear, height, weight, active, vegantype) => {
          return dispatch(registerRequest(user_id, pw, birthyear, height, weight, active, vegantype));
      }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);