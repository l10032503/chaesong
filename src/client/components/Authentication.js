import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

class Authentication extends React.Component{
    state={
        user_id:"",
        pw:"",
        sex:"",
        birthyear:"",
        height:"",
        weight:"",
        active:"",
        vegantype:"",
    }

    handleChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    activechange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    sexChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    handleRegister = () => {
        let user_id = this.state.user_id;
        let pw = this.state.pw;
        let birthyear = this.state.birthyear;
        let sex = this.state.sex;
        let height = this.state.height;
        let weight = this.state.weight;
        let active = this.state.active;
        let vegantype = this.state.vegantype;

        this.props.onRegister(user_id, pw, birthyear, sex, height, weight, active, vegantype).then(
            (result) => {
                if(!result){
                    this.setState({
                        user_id:"",
                        pw:"",
                        birthyear:"",
                        sex:"",
                        height:"",
                        weight:"",
                        active:"",
                        vegantype:""
                    });
                }
            }
        )
    }
    handleLogin = () => {
        let user_id = this.state.user_id;
        let pw = this.state.pw;
        this.props.onLogin(user_id, pw).then(
            (success) => {
                if(!success) {
                    this.setState({
                        pw:''
                    });
                }
            }
        );
    }

    handleKeyPress = (e) => {
        if(e.charCode==13) {
            if(this.props.mode) {
                this.handleLogin();
            } else {
                this.handleRegister();
            }
        }
    }

    render(){
        const loginBoxes =    (
            <div>
                <div>
                    <input
                        placeholder="아이디"
                        name="user_id"
                        type="text"
                        className="validate"
                        onChange={this.handleChange}
                        value={this.state.user_id}/>
                </div>
                <div>
                    <input
                        placeholder="비밀번호"
                        name="pw"
                        type="password"
                        className="validate"
                        onChange={this.handleChange}
                        value={this.state.pw}
                        onKeyPress={this.handleKeyPress}/>
                </div>
            </div>
        );
        const inputBoxes = (
            <div>
                <div className="register-row">
                    <h3 className="register-title">
                        <label htmlFor="id">아이디</label>
                    </h3>
                    <input
                        name="user_id"
                        type="text"
                        className="validate"
                        onChange={this.handleChange}
                        value={this.state.user_id}/>
                </div>
                <div className="register-row">
                    <h3 className="register-title">
                        <label htmlFor="pw">비밀번호</label>
                    </h3>
                    <input
                        name="pw"
                        type="password"
                        className="validate"
                        onChange={this.handleChange}
                        value={this.state.pw}
                        onKeyPress={this.handleKeyPress}/>
                </div>
                <div className="register-row">
                    <h3 className="register-title">
                        <label htmlFor="birthyear">출생연도</label>
                    </h3>
                    <input
                        name="birthyear"
                        type="int"
                        className="validate"
                        onChange={this.handleChange}
                        value={this.state.birthyear}/>
                </div>
                <div className="register-row">
                    <h3 className="register-title">
                        <label htmlFor="active">성별</label>
                    </h3>
                    <div id="sex">
<<<<<<< HEAD
                        <label className="radio-inline">
                            <input type="radio" name="sex" className="validate"
                                                               onChange={this.sexChange} value="0"/>여자</label>
                        <label className="radio-inline">
                            <input type="radio" name="sex" className="validate"
                                                               onChange={this.sexChange}
                                                               value="1"/>남자</label>
=======
                        <input type="radio" name="sex" className="validate"
                               onChange={this.sexChange}
                               value="0"/> <label className="radio-inline col-12">여자</label>
                        <input type="radio" name="sex" className="validate"
                               onChange={this.sexChange}
                               value="1"/><label className="radio-inline col-12">남자</label>
>>>>>>> 127a5adf8f9f64d27efaa917c6dd3d80db6b5d30
                    </div>
                </div>
                <div className="register-row">
                    <h3 className="register-title">
                        <label htmlFor="height">키(cm)</label>
                    </h3>
                    <input
                        name="height"
                        type="number"
                        className="validate"
                        onChange={this.handleChange}
                        value={this.state.height}/>
                </div>
                <div className="register-row">
                    <h3 className="register-title">
                        <label htmlFor="weight">몸무게(kg)</label>
                    </h3>
                    <input
                        name="weight"
                        type="number"
                        className="validate"
                        onChange={this.handleChange}
                        value={this.state.weight}/>
                </div>
                <div className="register-row">
                    <h3 className="register-title">
                        <label htmlFor="active">활동량</label>
                    </h3>
                    <div id="active">
                        <input type="radio" name="active" className="radio"
                               onChange={this.activechange}
                               value="1"/>
                               <label className="radio-inline col-12">적다</label>
                        <input type="radio" name="active" className="radio"
                               onChange={this.activechange}
                               value="2"/>
                        <label className="radio-inline col-12">보통이다</label>
                        <input type="radio" name="active" className="radio"
                               onChange={this.activechange}
                               value="3"/>
                        <label className="radio-inline col-12">많다</label>
                    </div>
                </div>
                <div className="register-row">
                    <h3 className="register-title">
                        <label htmlFor="vegantype">채식타입</label>
                    </h3>
                    <select className="form-control" name="vegantype" id="vegantype">
                        <option selected>채식타입을 선택해주세요!</option>
                        <option name="vegantype"
                                className="validate"
                                onChange={this.handleChange}
                                value="1">페스코 베지테리언</option>
                        <option name="vegantype"
                                className="validate"
                                onChange={this.handleChange}
                                value="2">락토오보 베지테리언</option>
                        <option name="vegantype"
                                className="validate"
                                onChange={this.handleChange}
                                value="3">오보 베지테리언</option>
                        <option name="vegantype"
                                className="validate"
                                onChange={this.handleChange}
                                value="4">락토 베지테리언</option>
                        <option name="vegantype"
                                className="validate"
                                onChange={this.handleChange}
                                value="5">비건</option>
                    </select>
                </div>
            </div>
        );
        const loginView=(
            <div>
                <div className="card-content">
                    <div className="login-form">
                        {loginBoxes}
                        <button className="login_btn"
                                onClick={this.handleLogin}>로그인</button>
                        <p className="message">아직 회원이 아니신가요? <a href="/register">회원가입</a></p>
                    </div>
                </div>
            </div>
        );

        const registerView = (
            <div>
                <div className = "card-content">
                    <div className="register-form">
                        {inputBoxes}
                        <button className="btn"
                                onClick={this.handleRegister}>CREATE</button>
                        <p className="message">이미 회원이신가요? <a href="/login">로그인</a></p>
                    </div>
                </div>
            </div>
        );

        return (
            <div className="login-page">
                <div className="form">
                    {this.props.mode ? loginView : registerView }
                </div>
            </div>
        );
    }
}

Authentication.propTypes = {
    mode: PropTypes.bool,
    onRegister: PropTypes.func,
    onLogin: PropTypes.func
};

Authentication.defaultProps = {
    mode: true,
    onRegister: (user_id, pw, birthyear, sex, height, weight, active, vegantype) => { console.error("register function is not defined"); },
    onLogin: (user_id, pw) => {console.error("login function not defined");}
};

export default Authentication;