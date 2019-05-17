import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Cookies from 'js-cookie';
const CanvasJSReact = require('../../canvasjs.react.js');
const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

class PersonalBox extends Component{
    render(){
        let current_id = Cookies.get('member');
        console.log(current_id);
        return (
            <div className = "container scrap">
                <div className = "info">
                    <h3 className = "recipename">{this.props.data.recipe_name} </h3>
                </div>
                <div className="card-content">
                    <img src={this.props.data.imgurl} alt="recipe"/>
                    <br/>
                </div>
            </div>
        );
    }
}

PersonalBox.propTypes={
    data: PropTypes.object,
    currentUser: PropTypes.string,
    current_id : PropTypes.string
};

PersonalBox.defaultProps = {
    data:{
        recipe_code:'E0040000009a',
        user_id: 'hello'
    },
    currentUser: ''
};

export default PersonalBox