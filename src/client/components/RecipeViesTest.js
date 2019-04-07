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
                    onScrap={this.handleScrap}
                    current={this.props.currentUser}
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
    onScrap: PropTypes.func
};
RecipeViesTest.defaultProps={
  data: [],
    onScrap: (user_id,recipe_code) =>{console.error("scrap function is not defined");}
};


export default RecipeViesTest;