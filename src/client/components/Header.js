import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Header extends Component {

    render() {
        const loginButton = (
            <li>
                <Link to="/login">
                    <i className="material-icons">vpn_key</i>
                </Link>
            </li>
        );
        const logoutButton = (
            <li>
                <a>
                    <i className="material-icons">lock_open</i>
                </a>
            </li>
        );
        const main_header = (
            <div className="main-header">
                <div className="logo-header">
                    <img src="../../asset/img/chaesong-logo2.png"/>
                    <button className="navbar-toggler sidenav-toggler ml-auto" type="button" data-toggle="collapse"
                            data-target="collapse" aria-controls="sidebar" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon">
                        </span>
                    </button>
                </div>
                <button className="topbar-toggler more">
                    <i className="la la-ellipsis-v">
                    </i>
                </button>
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
                        <div className="navbar-nav topbar-nav ml-md-auto align-items-center">
                            <ul className="navbar-nav topbar-nav ml-md-auto align-items-center">
                                <li className="nav-item dropdown hidden-caret">
                                    #크롤링&nbsp
                                </li>
                                <li className="nav-item dropdown hidden-caret">
                                    #크롤링&nbsp
                                </li>
                                <li className="nav-item dropdown">
                                    #크롤링&nbsp
                                </li>
                                <li className="nav-item dropdown">
                                    #크롤링&nbsp
                                </li>
                                <li className="nav-item dropdown">
                                    #크롤링&nbsp
                                </li>
                            </ul>
                        </div>

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
								채눈송
                                <span className="user-level">락토오보 베지테리언</span>
                                </span>
                            </a>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                    <ul className="nav">
                        <li className="nav-item">
                            <a href="">
                                <i className="la la-bookmark-o"></i>
                                <p>Scrapped Recipe</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="">
                                <i className="la la-check-circle-o"></i>
                                <p>Nutritional Status</p>
                            </a>
                        </li>
                        <li className="nav-item update-pro">
                            <button data-toggle="modal" data-target="#modalUpdate">
                                <i className="la la-reply"></i>
                                <p>Logout</p>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        )

        return (
            <div>
                {main_header}
                {nav_header}
                {side_bar}
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

