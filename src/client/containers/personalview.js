import React, {Component} from 'react';
import {eatenListRequest} from "../actions/personal";
import {connect} from 'react-redux';
import {PersonalPage} from '../components';

class personalview extends Component{
    componentDidMount() {
        this.props.eatenListRequest(true, undefined);
    }

    render(){
        return (
            <div className="Wrapper">
                <PersonalPage data={this.props.eatenData}
                              currentUser = {this.props.currentUser}
                              />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        eatenData : state.personalpage.list.data,
        listStatus : state.personalpage.list.status,
        isLast: state.personalpage.isLast
    };
};

const mapDispatchToProps = (dispatch) => {
    return{
        eatenListRequest: (isInitial, listType) => {
            return dispatch(eatenListRequest(isInitial, listType));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(personalview);