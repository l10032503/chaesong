import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Cookies from 'js-cookie';

class PersonalBox extends Component{
    render(){
        return (
            <div className = "container eaten">
                <div className = "info">
                    <h3 className = "recipename">{this.props.data.recipe_code} </h3>
                </div>
                <div className = "card-content">
                    <pre>
                        {this.props.data.user_id}
                    </pre>
                </div>
            </div>
        );
    }
}

PersonalBox.propTypes={
    data: PropTypes.object,
    currentUser: PropTypes.string
};

PersonalBox.defaultProps = {
    data:{
        recipe_code:'E0040000009a',
        user_id: 'hello'
    },
    currentUser: ''
};

export default PersonalBox