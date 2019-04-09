import React, {Component} from 'react';
import {recipeListRequest, scrapRequest} from '../actions/recipe';
import {connect} from 'react-redux';
import {RecipeViewTest} from '../components';

class recipeview extends Component{

    handleScrap = (user_id, recipe_code) =>{
        console.log("scrap container ", user_id, recipe_code);
        return this.props.scrapRequest(user_id, recipe_code).then(
            ()=>{
                if(this.props.scrapstatus === "SUCCESS"){
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
        return(
          <div className="Wrapper">
              <RecipeViewTest data={this.props.recipeData}
                              currentUser = {this.props.currentUser}
                              onScrap={this.handleScrap}/>
          </div>
        );
    }
}

const mapStateToProps = (state) => {
  return{
    recipeData : state.recipe.list.data,
    listStatus : state.recipe.list.status,
    isLast: state.recipe.isLast,
      scrapstatus: state.recipe.scrap.scrapstatus,
      errorCode : state.recipe.scrap.error
  };
};

const mapDispatchToProps = (dispatch) => {
    return{
        recipeListRequest: (isInitial, listType)=>{
            return dispatch(recipeListRequest(isInitial, listType));
        },
        scrapRequest: (user_id, recipe_code) =>{
            return dispatch(scrapRequest(user_id, recipe_code));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(recipeview);