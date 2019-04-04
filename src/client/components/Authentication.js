import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

class Authentication extends React.Component{
    state={
        user_id:"",
        pw:"",
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

    handleRegister = () => {
        let user_id = this.state.user_id;
        let pw = this.state.pw;
        let birthyear = this.state.birthyear;
        let height = this.state.height;
        let weight = this.state.weight;
        let active = this.state.active;
        let vegantype = this.state.vegantype;

        this.props.onRegister(user_id, pw, birthyear, height, weight, active, vegantype).then(
            (result) => {
                if(!result){
                    this.setState({
                        user_id:"",
                        pw:"",
                        birthyear:"",
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

    render(){
        const loginBoxes =    (
            <div>
                <div className="input-field col s12">
                    <label>ID</label>
                    <input
                        name="user_id"
                        type="text"
                        className="validate"
                        onChange={this.handleChange}
                        value={this.state.user_id}/>
                </div>
                <div className="input-field col s12">
                    <label>PW</label>
                    <input
                        name="pw"
                        type="text"
                        className="validate"
                        onChange={this.handleChange}
                        value={this.state.pw}/>
                </div>
            </div>
        );
        const inputBoxes = (
            <div>
                <div className="input-field col s12">
                    <label>ID</label>
                    <input
                        name="user_id"
                        type="text"
                        className="validate"
                        onChange={this.handleChange}
                        value={this.state.user_id}/>
                </div>
                <div className="input-field col s12">
                    <label>PW</label>
                    <input
                        name="pw"
                        type="text"
                        className="validate"
                        onChange={this.handleChange}
                        value={this.state.pw}/>
                </div>
                <div className="input-field col s12">
                    <label>출생년도</label>
                    <input
                        name="birthyear"
                        type="int"
                        className="validate"
                        onChange={this.handleChange}
                        value={this.state.birthyear}/>
                </div>
                <div className="input-field col s12">
                    <label>키</label>
                    <input
                        name="height"
                        type="int"
                        className="validate"
                        onChange={this.handleChange}
                        value={this.state.height}/>
                    <label>cm</label>
                </div>
                <div className="input-field col s12">
                    <label>몸무게</label>
                    <input
                        name="weight"
                        type="int"
                        className="validate"
                        onChange={this.handleChange}
                        value={this.state.weight}/>
                    <label>kg</label>
                </div>
                <div className="radio">
                    <label>활동량</label>
                    <label>
                        <input
                            name="active"
                            type="radio"
                            className="validate"
                            onChange={this.handleChange}
                            value="1"/>
                            적다
                    </label>
                    <label>
                        <input
                            name="active"
                            type="radio"
                            className="validate"
                            onChange={this.handleChange}
                            value="2"/>
                        보통
                    </label>
                    <label>
                        <input
                            name="active"
                            type="radio"
                            className="validate"
                            onChange={this.handleChange}
                            value="3"/>
                        많음
                    </label>
                </div>
                <div className="radio">
                    <label>채식타입</label>
                    <input
                        name="vegantype"
                        type="radio"
                        className="validate"
                        onChange={this.handleChange}
                        value="1"/>
                        페스코
                    <input
                        name="vegantype"
                        type="radio"
                        className="validate"
                        onChange={this.handleChange}
                        value="2"/>
                        락토 오보
                    <input
                        name="vegantype"
                        type="radio"
                        className="validate"
                        onChange={this.handleChange}
                        value="3"/>
                        오보
                    <input
                        name="vegantype"
                        type="radio"
                        className="validate"
                        onChange={this.handleChange}
                        value="4"/>
                        락토
                    <input
                        name="vegantype"
                        type="radio"
                        className="validate"
                        onChange={this.handleChange}
                        value="5"/>
                        비건
                </div>
            </div>
        );
        const loginView=(
            <div>
                <div className="card-content">
                    <div className="row">
                        {loginBoxes}
                        <button className="login_btn"
                                onClick={this.handleLogin}>LOGIN</button>
                    </div>
                </div>

                <div className="footer">
                    <div className="card-content">
                        <div className="right">
                            New Here? <Link to ="/register">Create an account</Link>
                        </div>
                    </div>
                </div>
            </div>
        );

        const registerView = (
            <div className="card-content">
                <div className="row">
                    {inputBoxes}
                    <button className="btn"
                            onClick={this.handleRegister}>CREATE</button>
                </div>
            </div>
        );

        return (
            <div className="container auth">
                <Link className="logo" to="/">Chaesong</Link>
                <div className="card">
                    <div className="header center">
                        <div className="card-content">{this.props.mode ? "채송 로그인" : "회원가입"}</div>
                    </div>
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
    onRegister: (user_id, pw, birthyear, height, weight, active, vegantype) => { console.error("register function is not defined"); },
    onLogin: (user_id, pw) => {console.error("login function not defined");}
};

export default Authentication;
