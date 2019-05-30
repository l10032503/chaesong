import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';

class RecommendPage extends Component{
    constructor(props){
        super(props);
        this.state={
            user_Id : Cookies.get('member'),
        }
    } // cookie
    render(){
        const userID = Cookies.get('member');
        const loginSuccess = (
            <div>
                <h1>
                    This is RecommendPage. Here are the 5 randomly chosen recipes for { userID },,,
                </h1>
                <h2>

                </h2>
            </div>
        );

    }
}

RecommendPage.propTypes = {
    isLoggedIn : PropTypes.bool,
    onLogout: PropTypes.func
};

RecommendPage.defaultProps = {
    isLoggedIn : false,
    onLogout: () => {console.error("logout function not defined")}
};

export default RecommendPage;