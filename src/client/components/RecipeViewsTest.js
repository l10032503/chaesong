import React, {Component} from 'react';
import {RecipeBox} from '../components';
import PropTypes from 'prop-types';
import {Search} from '../components';
class RecipeViewsTest extends Component{

    state = {
        search : ""
    }

    toggleSearch = () => {
        this.setState({
            search: !this.state.search
        });
    }

    handleChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    render(){
        const searchBox=(
            <div>
                <div className="input-field col s12">
                    <label>ID</label>
                    <input
                        name="user_id"
                        type="text"
                        className="validate"
                        onChange={this.handleChange}
                        value={this.state.user_id}/>
                </div>
            </div>
        );

        const recipeCheckBox =(
          <div>
              <label>재료 포함</label>
              <input
                  name="seafood"
                  type="checkbox"
                  className="validate"
                  checked= {true}
                  onChange={this.handleChange}
                  value="1"/>
              해산물
              <input
                  name="milk"
                  type="checkbox"
                  className="validate"
                  checked= {true}
                  onChange={this.handleChange}
                  value="1"/>
              우유
              <input
                  name="egg"
                  type="checkbox"
                  className="validate"
                  checked= {true}
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
                    {searchBox}
                </div>
                <div>
                    {recipeCheckBox}
                    <button>click</button>
                </div>
                {mapToComponents(this.props.data)}
            </div>
        );
    }
}

RecipeViewsTest.propTypes={
  data: PropTypes.array,
  onScrap: PropTypes.func,
  onEat: PropTypes.func,
                searchWord: PropTypes.array,
                onSearch: PropTypes.func,
                history: PropTypes.object
};
RecipeViewsTest.defaultProps={
  data: [],
  onScrap: (user_id,recipe_code) =>{console.error("scrap function is not defined");},
  onEat: (user_id,recipe_code) =>{console.error("eat function is not defined");}
};


export default RecipeViewsTest;