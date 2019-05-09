import React, {Component} from 'react';
import {RecipeBox} from '../components';
import PropTypes from 'prop-types';
import {Search} from '../components';
class RecipeViesTest extends Component{

    state = {
        search : false
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
                <div>
                    <ul>
                        <li><a onClick={this.toggleSearch}><i className="material-icons">search</i></a></li>
                    </ul>
                </div>
                {this.state.search ? <Search onClose={this.toggleSearch}
                                             onSearch={this.props.onSearch}
                                            searchWord={this.props.searchWord}
                                            history={this.props.history}/>: undefined}
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

RecipeViesTest.propTypes={
  data: PropTypes.array,
  onScrap: PropTypes.func,
  onEat: PropTypes.func,
                searchWord: PropTypes.array,
                onSearch: PropTypes.func,
                history: PropTypes.object
};
RecipeViesTest.defaultProps={
  data: [],
  onScrap: (user_id,recipe_code) =>{console.error("scrap function is not defined");},
  onEat: (user_id,recipe_code) =>{console.error("eat function is not defined");}
};


export default RecipeViesTest;