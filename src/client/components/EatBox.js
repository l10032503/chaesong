import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Cookies from "js-cookie";

class EatBox extends Component {

    handleEatDelete = () => {
        console.log("eat delete click");
        let user_id = Cookies.get('member');
        let recipe_code = this.props.data.recipe_code;
        this.props.onEatDelete(user_id,recipe_code);
        console.log("eat box delete : ",user_id, recipe_code);
    }

    render(){
        let current_id = Cookies.get('member');
        console.log(current_id);

        return (
            <div className = "col-md-6 eat-box">
                <div className = "card">
                    <div className="card-header" >
                        <h3 className="card-title" >{this.props.data.ingredient_name}  </h3>
                        <button type="button" className="close" data-dismiss="modal"
                                aria-label="Close" onClick={() => this.handleEatDelete()}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="card-body">
                        {this.props.data.EATEN_DATE} {this.props.data.EATEN_TIME}
                    </div>
                </div>
            </div>
        );
    }
}

EatBox.propTypes={
    data: PropTypes.object,
    currentUser: PropTypes.string,
    current_id : PropTypes.string,
    onEatDelete : PropTypes.scrap
};

EatBox.defaultProps = {
    data:{
        ingredient_code:'E0040000009a',
        user_id: 'hello',
        ingredient_name:'default',
        EATEN_DATE:'2000-01-01',
        EATEN_TIME:'12:12:12'
    },
    currentUser: '',
    onScrapDelete: (user_id, recipe_code) =>{
        console.error('scrap box delete function net defined');
    },
};


export default EatBox;