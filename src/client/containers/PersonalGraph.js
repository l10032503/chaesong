import React, {Component} from 'react';
import {eatenListRequest} from "../actions/personal";
import {connect} from "react-redux";
import {NutritionGraph, NutritionGraphDetail} from '../components';
import {getSettingRequest} from "../actions/authentication";
import Cookies from "js-cookie";

class PersonalGraph extends Component {

    componentDidMount() {
        this.props.eatenListRequest(true, undefined).then(()=>{
            this.props.getSettingRequest(Cookies.get('member'));
        });
    }



render() {
        return (
            <div id="main-background" >
                <NutritionGraph eatenData={this.props.eatenData}
                                settingData = {this.props.settingData}/>
                <NutritionGraphDetail eatenData={this.props.eatenData}
                                settingData = {this.props.settingData}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        eatenData : state.personalgraph.list.data,
        listStatus : state.personalgraph.list.status,
        settingStatus: state.authentication.setting.status,
        settingData: state.authentication.setting.data,
    };
};

const mapDispatchToProps = (dispatch) => {
    return{
        eatenListRequest: (isInitial, listType) => {
            return dispatch(eatenListRequest(isInitial, listType));
        },
        getSettingRequest: (user_id) =>{
            return dispatch(getSettingRequest(user_id));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PersonalGraph);