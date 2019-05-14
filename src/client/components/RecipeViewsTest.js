import React, {Component} from 'react';
import {RecipeBox} from '../components';
import PropTypes from 'prop-types';
import {Search} from '../components';
class RecipeViewsTest extends Component{

    state = {
        searchWord : ""
    }

    handleChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    handleSearch = () => {
        let searchWord = this.state.searchWord;

        this.props.onSearch(searchWord);
    }

    handleKeyPress = (e) => {
        if(e.charCode==13) {
            this.handleSearch();
        }
    }

    render(){
        const searchBox=(
            <div>
                <div className="input-field col s12">
                    <label>검색</label>
                    <input
                        name="searchWord"
                        type="text"
                        className="validate"
                        onChange={this.handleChange}
                        value={this.state.searchWord}
                        onKeyPress={this.handleKeyPress}/>
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
                    <button onClick={this.handleSearch}>검색</button>
                </div>
                {mapToComponents(this.props.data)}
            </div>
        );
    }
}

RecipeViewsTest.propTypes={
  mode: PropTypes.bool,
  data: PropTypes.array,
  onScrap: PropTypes.func,
  onEat: PropTypes.func,
  onSearch: PropTypes.func,
  history: PropTypes.object
};

RecipeViewsTest.defaultProps={
  mode: true,
  data: [],
  onScrap: (user_id,recipe_code) =>{console.error("scrap function is not defined");},
  onEat: (user_id,recipe_code) =>{console.error("eat function is not defined");},
  onSearch:(searchWord)=>{console.error("search function is not defined")}
};


export default RecipeViewsTest;