import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Cookies from "js-cookie";
import jQuery from "jquery";
window.$ = window.jQuery = jQuery;

class Header extends Component {
    constructor(props){
        super(props);
        this.state={
            user_Id : Cookies.get('member')
        }
    }

    componentDidMount() {
        let toggle_sidebar = false;
        let toggle_topbar = false;
        let nav_open = 0;
        let topbar_open = 0;

        if (!toggle_sidebar) {
            const $toggle = $('.sidenav-toggler');

            $toggle.click(function () {
                if (nav_open == 1) {
                    $('html').removeClass('nav_open');
                    $toggle.removeClass('toggled');
                    nav_open = 0;
                } else {
                    $('html').addClass('nav_open');
                    $toggle.addClass('toggled');
                    nav_open = 1;
                }
            });
            toggle_sidebar = true;
        }
        // 상단 우측 ... 누르면 나오는 검색창
        if (!toggle_topbar) {
            const $topbar = $('.topbar-toggler');

            $topbar.click(function () {
                if (topbar_open == 1) {
                    $('html').removeClass('topbar_open');
                    $topbar.removeClass('toggled');
                    topbar_open = 0;
                } else {
                    $('html').addClass('topbar_open');
                    $topbar.addClass('toggled');
                    topbar_open = 1;
                }
            });
            toggle_topbar = true;
        }
    }

    render(){
        const userID= Cookies.get('member')

        const topbar = (
            <div className="navbar-nav topbar-nav ml-md-auto align-items-center">
                <ul className="navbar-nav topbar-nav ml-md-auto align-items-center">
                    <li className="nav-item dropdown hidden-caret">
                        #크롤링
                    </li>
                    <li className="nav-item dropdown hidden-caret">
                        #크롤링
                    </li>
                    <li className="nav-item dropdown">
                        #크롤링
                    </li>
                    <li className="nav-item dropdown">
                        #크롤링
                    </li>
                    <li className="nav-item dropdown">
                        #크롤링
                    </li>
                </ul>
            </div>
        );

        const nav_header = (
            <div>
                <nav className="navbar navbar-header navbar-expand-lg">
                    <div className="container-fluid">
                        <form className="navbar-left navbar-form nav-search mr-md-3 mt-2" action="">
                            <div className="input-group">
                                <input type="text" placeholder="Search ..." className="form-control"/>
                                <div className="input-group-append">
								        <span className="input-group-text">
									    <i className="la la-search search-icon">
                                        </i>
								        </span>
                                </div>
                            </div>
                        </form>
                        {topbar}
                    </div>
                </nav>
            </div>
        );

        const side_bar = (
            <div className="sidebar">
                <div className="scrollbar-inner sidebar-wrapper">
                    <div className="user">
                        <div className="info">
                            <a className="" data-toggle="collapse" href="#collapseExample" aria-expanded="true">
							<span>
                                {userID} 님
                                <span className="user-level">락토오보 베지테리언</span>
                                </span>
                            </a>
                            <div className="clearfix">
                            </div>
                        </div>
                    </div>
                    <ul className="nav">
                        <li className="nav-item">
                            <a href="">
                                <i className="la la-bookmark-o">
                                </i>
                                <p>Scrapped Recipe</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="">
                                <i className="la la-check-circle-o">
                                </i>
                                <p>Nutritional Status</p>
                            </a>
                        </li>
                        <li className="nav-item update-pro">
                            <button data-toggle="modal" data-target="#modalUpdate">
                                <i className="la la-reply">
                                </i>
                                <p>Logout</p>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        )

        const HEADER = (
            <div className="wrapper">
                <div className="main-header">
                    <div className="logo-header">
                        <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FbYhiUv%2FbtqvpAxTrJt%2Fnv4acApc3o0VWm7PMBBgKk%2Fimg.png" alt="logo"/>
                        <button className="navbar-toggler sidenav-toggler ml-auto" type="button" data-toggle="collapse"
                                data-target="collapse" aria-controls="sidebar" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon">
                        </span>
                        </button>
                        <button className="topbar-toggler more">
                            <i className="la la-ellipsis-v">
                            </i>
                        </button>
                    </div>
                    <nav className="navbar navbar-header navbar-expand-lg">
                        <div className="container-fluid">
                            <form className="navbar-left navbar-form nav-search mr-md-3 mt-2" action="">
                                <div className="input-group">
                                    <input type="text" placeholder="Search ..." className="form-control"/>
                                    <div className="input-group-append">
								        <span className="input-group-text">
									    <i className="la la-search search-icon">
                                        </i>
								        </span>
                                    </div>
                                </div>
                            </form>
                            {topbar}
                        </div>
                    </nav>
                </div>
                {side_bar}
            </div>
        )

        return (
            <div>
                {HEADER}
            </div>
        );
    }
}

Header.propTypes = {
    isLoggedIn: PropTypes.bool
};

Header.defaultProps = {
    isLoggedIn: false
};

export default Header;
