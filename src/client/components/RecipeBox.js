import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RecipeBox extends Component{
    render() {
        return (
            <div className="container recipe">
                <div className="card">
                    <div className="info">
                        <h3 className="recipename">{this.props.data.recipe_name}</h3>
                    </div>
                    <div className="card-content">
                        <img src={this.props.data.imgurl} alt="recipe"/>
                        <br/>
                        <pre>
                        {this.props.data.content}
                        </pre>
                    </div>
                    <div className="footer">
                        <button>
                            먹었음
                        </button>
                        <button>
                            스크랩
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

RecipeBox.propTypes={
  data: PropTypes.object
};

RecipeBox.defaultProps={
  data:{
      recipe_id : '315',
      recipe_code: 'B0030000009j',
      recipe_name: '감자튀김',
      content: '',
      imgurl: 'https://i.imgur.com/ryJzBgY.jpg'
  }
};

export default RecipeBox