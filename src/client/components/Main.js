import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Cookies from 'js-cookie';
import {RecipeViewTest} from "./index";

class Main extends Component{
    constructor(props){
        super(props);
        this.state={
            user_Id : Cookies.get('member')
        }
    } // cookie
    render(){
        const userID= Cookies.get('member');
        const loginSuccess = (
            <div>
                <h1>
                    로그인 ID : {userID}
                </h1>
            </div>
        );
        const loginFail = (
            <h1>
                비로그인 상태
            </h1>
        );
        const logoutButton =(
          <button onClick={this.props.onLogout}>
              로그아웃
          </button>
        );
        return(
            <div className="main-panel" id="main-panel">
                <div className="content">
                    <div className="container-fluid">
                        <h4 className="page-title">조회된 레시피</h4>
                        <RecipeViewTest data={this.props.recipeData}
                                        currentUser = {this.props.currentUser}
                                        onScrap={this.handleScrap}
                                        onEat={this.handleEat}
                                        onSearch={this.handleSearch}
                                        history={this.props.history}/>
                    </div>
                </div>
            </div>
        )
    }
}

Main.propTypes = {
    isLoggedIn : PropTypes.bool,
    onLogout: PropTypes.func
};

Main.defaultProps = {
    isLoggedIn : false,
    onLogout: () => {console.error("logout function not defined")}
};

const mapStateToProps = (state) => {
    return{
        recipeData : state.recipe.list.data,
        listStatus : state.recipe.list.status,
        isLast: state.recipe.isLast,
        scrapstatus: state.recipe.scrap.scrapstatus,
        eatstatus: state.recipe.eat.eatstatus,
        errorCode : state.recipe.scrap.error,
        searchstatus: state.search.status,
        searchData : state.search.data,
    };
};



export default Main;