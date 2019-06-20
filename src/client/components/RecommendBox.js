import {Component} from "react";
import React from "react";
import PropTypes from "prop-types";
import ScrapBox from "./ScrapBox";
import Cookies from "js-cookie";
import Modal from "./RecipeBox";

class RecommendBox extends  Component {

    constructor(props){
        super(props);
        this.state={
            show_overlay : false
        }
    }

    handleOverlay = () => {
        console.log("overlay click: " + this.state.show_overlay);
        if(this.state.show_overlay === true)
        {
            this.setState({show_overlay: false});
        }
        else if(this.state.show_overlay === false){
            this.setState({show_overlay : true});
        }
        console.log("show_overlay: " + this.state.show_overlay);
    }

    handleRecommend = () => {
        console.log("recommend click");
        let user_id = Cookies.get('member');
        let recipe_code = this.props.data.recipe_code;
        this.props.onRecommend(user_id,recipe_code);
        console.log("recommend input: ",user_id, recipe_code);
    }

    render(){
        return(
            <div class="col-md-3 recipe-box" >
                <div class="card" id="select_card" onClick={() => this.handleRecommend()}>
                    <div className="card-body" onClick={() => this.handleOverlay()}>
                        <img src={this.props.data.imgurl} alt="recipe"/>
                        <div className="overlay" style={{visibility: (this.state.show_overlay ? 'visible' : 'hidden')}}>
                        <br/>
                        <h3> 선택 </h3>
                        </div>
                    <div class="card-footer text-center">
                        <h3 className="card-title" class="text-center" id="select_title"> {this.props.data.recipe_name}</h3>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

RecommendBox.propTypes={
    data: PropTypes.object,
    onRecommend: PropTypes.recommendinput
};

RecommendBox.defaultProps = {
    data:{
        recipe_name: '감자튀김',
        imgurl: 'https://i.imgur.com/ryJzBgY.jpg'
    },
    currentUser: '',
    onRecommmend: (user_id, recipe_code) => {
        console.error('on recommend input net defined')
    }
};

export default RecommendBox