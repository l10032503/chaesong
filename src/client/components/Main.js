import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes, {instanceOf} from 'prop-types';
import Cookies from 'js-cookie';

class Main extends Component{
    constructor(props){
        super(props);
        console.log(Cookies.get('name'));
        console.log(Cookies.get('key'));
        console.log(Cookies.get('member'));
        this.state={
            user_Id : Cookies.get('member')
        }
    }
    render(){
        const userID= Cookies.get('member');
        const loginSuccess = (
            <div>
                <h1>
                    로그인 ID : {userID}
                </h1>
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
                {this.props.isLoggedIn ? loginSuccess : loginFail}
                {this.props.isLoggedIn ? logoutButton : undefined}
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