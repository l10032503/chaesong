import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-awesome-modal';
import Cookies from 'js-cookie';

class RecipeBox extends Component{

    constructor(props){
        super(props);
        this.state={
            visible : false
        }
    }

    openModal() {
        this.setState({
            visible : true
        });
    }

    closeModal() {
        this.setState({
            visible : false
        });
    }

    handleScrap = () => {
        console.log("scrap click");
        let user_id = Cookies.get('member');
        let recipe_code = this.props.data.recipe_code;
        this.props.onScrap(user_id,recipe_code);
        console.log("scrap recipe box : ",user_id, recipe_code);
    }

    handleEat = () => {
        console.log("eat click");
        let user_id = Cookies.get('member');
        let recipe_code = this.props.data.recipe_code;
        this.props.onEat(user_id,recipe_code);
        console.log("eat recipe box : ",user_id, recipe_code);
    }

    render() {

        const recipeModal = (
            <div>
                <Modal visible={this.state.visible} width="400" height="300" effect="fadeInRight" onClickAway={() => this.closeModal()}>
                    <div id="recipe-modal-content">
                        <h1>{this.props.data.recipe_name}</h1>
                        <p>{this.props.data.content}</p>
                        <a href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a>
                    </div>
                </Modal>
            </div>
        )

        return (
            <div className="col-md-4 recipe-box">
                <div className="card" >
                    <div className="card-header" onClick={() => this.openModal()}>
                        <h3 className="card-title" onClick={() => this.openModal()} >{this.props.data.recipe_name}</h3>
                    </div>
                    <div className="card-body"onClick={() => this.openModal()}>
                        <img src={this.props.data.imgurl} onClick={() => this.openModal()} alt="recipe"/>
                        <br/>
                    </div>
                    <div className="footer">
                        <button onClick={this.handleEat}>
                            먹었음
                        </button>
                        <button onClick={this.handleScrap}>
                            스크랩
                        </button>
                    </div>
                </div>
                {recipeModal}
            </div>
        );
    }
}

RecipeBox.propTypes={
  data: PropTypes.object,
  onScrap: PropTypes.scrap,
  onEat: PropTypes.eat,
  currentUser: PropTypes.string
};

RecipeBox.defaultProps={
  data:{
      recipe_id : '315',
      recipe_code: 'B0030000009j',
      recipe_name: '감자튀김',
      content: '',
      imgurl: 'https://i.imgur.com/ryJzBgY.jpg'
  },
    onScrap: (user_id, recipe_code) =>{
      console.error('scrap recipe function net defined');
    },
    onEat: (user_id, recipe_code) =>{
        console.error('eat recipe function net defined');
    },
    currentUser: ''
};

export default RecipeBox