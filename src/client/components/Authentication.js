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
        vegantype:""
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

        this.props.onRegister(user_id,pw).then(
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

    render(){
        const inputBoxes = (
            <div>
                <div className="input-field col s12 user_id">
                    <label>ID</label>
                    <input
                        name="user_id"
                        type="text"
                        className="validate"
                        onChange={this.handleChange}
                        value={this.state.user_id}/>
                </div>
                <div className="input-field col s12">
                    <label>Password</label>
                    <input
                        name="pw"
                        type="text"
                        className="validate"
                        onChange={this.handleChange}
                        value={this.state.pw}/>
                </div>
                <div className="input-field col s12">
                    <label>birthyear</label>
                    <input
                        name="birthyear"
                        type="text"
                        className="validate"
                        onChange={this.handleChange}
                        value={this.state.birthyear}/>
                </div>
                <div className="input-field col s12">
                    <label>height</label>
                    <input
                        name="height"
                        type="int"
                        className="validate"
                        onChange={this.handleChange}
                        value={this.state.height}/>
                </div>
                <div className="input-field col s12">
                    <label>weight</label>
                    <input
                        name="weight"
                        type="int"
                        className="validate"
                        onChange={this.handleChange}
                        value={this.state.weight}/>
                </div>
                <div className="input-field col s12">
                    <label>active</label>
                    <input
                        name="active"
                        type="int"
                        className="validate"
                        onChange={this.handleChange}
                        value={this.state.active}/>
                </div>
                <div className="input-field col s12">
                    <label>vegantype</label>
                    <input
                        name="vegantype"
                        type="int"
                        className="validate"
                        onChange={this.handleChange}
                        value={this.state.vegantype}/>
                </div>
            </div>
        );
        const loginView=(
          <div>
              <div className="card-content">
                  <div className="row">
                      {inputBoxes}
                      <a className="btn">

                      </a>
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
                        <div className="card-content">{this.props.mode ? "LOGIN" : "REGISTER"}</div>
                    </div>
                    {this.props.mode ? loginView : registerView }
                </div>
            </div>
        );
    }
}

Authentication.propTypes = {
    mode: PropTypes.bool,
    onRegister: PropTypes.func
};

Authentication.defaultProps = {
    mode: true,
    onRegister: (user_id, pw) => { console.error("register function is not defined"); }
};

export default Authentication;
