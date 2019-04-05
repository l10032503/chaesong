import React, {Component} from 'react';
import {recipeListRequest} from '../actions/recipe';
import {connect} from 'react-redux';
import {RecipeViewTest} from '../components';

class recipeview extends Component{
    componentDidMount(){
        this.props.recipeListRequest(true, undefined);
    }
    render(){
        console.log("recipeviewtest containers");
        return(
          <div className="Wrapper">
              <RecipeViewTest data={this.props.recipeData} />
          </div>
        );
    }
}

const mapStateToProps = (state) => {
  return{
    recipeData : state.recipe.list.data,
    listStatus : state.recipe.list.status,
    isLast: state.recipe.isLast
  };
};

const mapDispatchToProps = (dispatch) => {
    return{
        recipeListRequest: (isInitial, listType)=>{
            return dispatch(recipeListRequest(isInitial, listType));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(recipeview);