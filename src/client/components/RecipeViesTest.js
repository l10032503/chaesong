import React, {Component} from 'react';
import {RecipeBox} from '../components';
import PropTypes from 'prop-types';
import {recipeListRequest, scrapRequest} from '../actions/recipe';
import {connect} from 'react-redux';


class RecipeViesTest extends Component{

    render(){
        const mapToComponents = data => {
            return data.map((recipe, i)=>{
                return (
                  <RecipeBox
                    data={recipe}
                    key={recipe.recipe_code}
                    index={i}

                  />
                );
            })
        };
        return(
            <div>
                {mapToComponents(this.props.data)}
            </div>
        );
    }
}

RecipeViesTest.propTypes={
  data: PropTypes.array,
};
RecipeViesTest.defaultProps={
  data: []
};


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
export default RecipeViesTest;