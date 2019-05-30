import React, {Component} from 'react';
import {ScrapBox} from '../components';
import PropTypes from 'prop-types';

class ScrapView extends Component{
    render(){
        const mapToComponents = data => {
            return data.map((personalpage, i)=>{
                console.log("personal page test map to component");
                return (
                    <ScrapBox
                        data ={personalpage}
                        key={personalpage.recipe_code}
                        index={i}
                        current={this.props.currentUser}
                        current_id={this.props.current_id}
                        onScrapDelete = {this.props.onScrapDelete}
                    />
                );
            })
        };
        return (
            <div id="scrap-box">
                {mapToComponents(this.props.data)}
            </div>
        );
    }
}

ScrapView.propTypes={
    data: PropTypes.array,
    onScrapDelete : PropTypes.func,
};
ScrapView.defaultProps={
    data: [],
    onScrapDelete : (user_id,recipe_code) =>{console.error("scrap delete function is not defined");}
};

export default ScrapView;