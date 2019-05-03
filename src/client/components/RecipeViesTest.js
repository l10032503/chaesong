import React, {Component} from 'react';
import {RecipeBox} from '../components';
import PropTypes from 'prop-types';

class RecipeViesTest extends Component{

    handleChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    render(){

        const recipeCheckBox =(
          <div>
              <label>비건 레벨</label>
              <input
                  name="seafood"
                  type="checkbox"
                  className="validate"
                  onChange={this.handleChange}
                  value="1"/>
              해산물
              <input
                  name="milk"
                  type="checkbox"
                  className="validate"
                  onChange={this.handleChange}
                  value="1"/>
              우유
              <input
                  name="egg"
                  type="checkbox"
                  className="validate"
                  onChange={this.handleChange}
                  value="1"/>
              계란
          </div>
        );

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
                <div>
                    {recipeCheckBox}
                </div>
                <button>click</button>
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