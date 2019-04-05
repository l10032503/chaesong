import React, {Component} from 'react';
import {RecipeBox} from '../components';
import PropTypes from 'prop-types';

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

export default RecipeViesTest;