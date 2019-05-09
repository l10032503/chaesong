import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Cookies from 'js-cookie';

class Main extends Component{
    constructor(props){
        super(props);
        this.state={
            user_Id : Cookies.get('member'),
        }
    } // cookie
    render(){
        const userID = Cookies.get('member');
        const calorieForDay = Cookies.get('calorieForDay');//////
        const loginSuccess = (
            <div>
                <h1>
                    로그인 ID : { userID }
                </h1>
                <h2>
                    calorieForDay : { calorieForDay }//////
                </h2>
            </div>
        );
        const loginFail = (
            <h1>
                비로그인 상태
            </h1>
        );
        const logoutButton =(
          <button onClick={this.props.onLogout}>
              로그아웃
          </button>
        );
        return(
            <div>
                {this.props.isLoggedIn? loginSuccess : loginFail}
                {logoutButton}
            </div>
        )
    }
}

Main.propTypes = {
    isLoggedIn : PropTypes.bool,
    onLogout: PropTypes.func
};

Main.defaultProps = {
    isLoggedIn : false,
    onLogout: () => {console.error("logout function not defined")}
};

export default Main;