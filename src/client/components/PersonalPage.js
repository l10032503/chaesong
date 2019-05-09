import React, {Component} from 'react';
import {PersonalBox} from '../components';
import PropTypes from 'prop-types';

class PersonalPage extends Component{
    render(){
        const mapToComponents = data => {
            return data.map((personalpage, i)=>{
                console.log("personal page test map to component");
                return (
                    <PersonalBox
                        data ={personalpage}
                        key={personalpage.recipe_code}
                        index={i}
                        current={this.props.currentUser}
                    />
                );
            })
        };
        return (
            <div>
                {mapToComponents(this.props.data)}
            </div>
        );
    }
}

PersonalPage.propTypes={
    data: PropTypes.array
};
PersonalPage.defaultProps={
    data: []
};

export default PersonalPage;