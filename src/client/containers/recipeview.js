import React, {Component} from 'react';
import {recipeListRequest, scrapRequest} from '../actions/recipe';
import {connect} from 'react-redux';
import {RecipeViewTest} from '../components';

class recipeview extends Component{

    handleScrap = (user_id, recipe_id) =>{
        return this.props.scrapRequest(user_id, recipe_id).then(
            ()=>{
                if(this.props.status==="SUCCESS"){
                    console.log("scrap container success");
                    return true;
                }else{
                    console.log("scrap container fail");
                    return false;
                }
            }
        );
    }

    componentDidMount(){
        this.props.recipeListRequest(true, undefined);
    }
    render(){
        console.log("recipeviewtest containers");
        return(
          <div className="Wrapper">
              <RecipeViewTest data={this.props.recipeData}
              onScrap = {this.handleScrap()}/>
          </div>
        );
    }
}

const mapStateToProps = (state) => {
  return{
    recipeData : state.recipe.list.data,
    listStatus : state.recipe.list.status,
    isLast: state.recipe.isLast,
      status: state.recipe.scrap.status,
      errorCode : state.recipe.scrap.error
  };
};

const mapDispatchToProps = (dispatch) => {
    return{
        recipeListRequest: (isInitial, listType)=>{
            return dispatch(recipeListRequest(isInitial, listType));
        },
        scrapRequest: (user_id, recipe_id) =>{
            return dispatch(scrapRequest(user_id, recipe_id))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(recipeview);