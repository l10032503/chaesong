import React, {Component} from 'react';
import {RecipeBox} from '../components';
import PropTypes from 'prop-types';

class RecipeViesTest extends Component{

    render(){
        const mapToComponents = data => {
            return data.map((recipe, i)=>{
                console.log("recipeviewtest maptocomponent");
                return (
                  <RecipeBox
                    data={recipe}
                    key={recipe.recipe_code}
                    index={i}
                    current={this.props.currentUser}
                    onScrap={this.props.onScrap}
                    onEat={this.props.onEat}
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
  onScrap: PropTypes.func,
  onEat: PropTypes.func
};
RecipeViesTest.defaultProps={
  data: [],
  onScrap: (user_id,recipe_code) =>{console.error("scrap function is not defined");},
  onEat: (user_id,recipe_code) =>{console.error("eat function is not defined");}
};


export default RecipeViesTest;