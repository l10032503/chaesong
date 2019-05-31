import {connect} from "react-redux";
import React, {Component} from 'react';
import {SettingUI} from '../components';
import {infoListRequest} from "../actions/personal";
import {changeRequest, getSettingRequest} from "../actions/authentication";
import Cookies from "js-cookie";

class UserSettings extends  Component{



    handleRegister = (birthyear, sex, height, weight, active, vegantype) => {
        return this.props.changeRequest(birthyear, sex, height, weight, active, vegantype).then(
            () => {
                this.props.history.push('/mainpage');
                return true;
            }
        )
    };


    render(){
        return (
            <div>
                <SettingUI
                           onRegister={this.handleRegister}/>
            </div>
        );

    }

}

const mapStateToProps = (state) =>{
    return{
        infoData : state.personalpage.list.data,
        listStatus : state.personalpage.list.status,
    };
};

const mapDispatchToProps = (dispatch) =>{
    return{
        infoListRequest: (isInitial) =>{
            return dispatch(infoListRequest(isInitial));
        },
        changeRequest: (birthyear, sex, height, weight, active, vegantype) =>{
            return dispatch(changeRequest(birthyear, sex, height, weight, active, vegantype));
        }
    } ;
};

export default connect(mapStateToProps, mapDispatchToProps)(UserSettings);