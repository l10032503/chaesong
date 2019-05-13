import React, { Component } from 'react';
import {recipeListRequest} from "../actions/recommend";
import {connect} from 'react-redux';
import { RecommendPage } from '../components';

class recommendview extends Component {
    render() {
        return (
            <div>
                <RecommendPage />
            </div>
        );
    }
}

export default recommendview;