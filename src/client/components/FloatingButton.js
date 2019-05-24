import React, { Component } from 'react';
import PropTypes from 'prop-types';
import jQuery from "jquery";
import Modal from 'react-awesome-modal';
window.$ = window.jQuery = jQuery;

class FloatingButton extends Component {
    constructor(props){
        super(props);
        this.state={
            visible : false
        }
    }

    openModal() {
        this.setState({
            visible : true
        });
    }

    closeModal() {
        this.setState({
            visible : false
        });
    }


    render(){

        const mapDataToLinks = (data) =>{

        };

        const floatingModal = (
            <div>
                <Modal visible={this.state.visible} width="400" height="400" effect="fadeInRight" onClickAway={() => this.closeModal()}>
                    <div id="floating-Modal-content">
                        <h1>먹은 재료 직접 입력</h1>
                        <div className="container">
                            <input placeholder="Search a user">
                            </input>
                            <ul className="search-results">
                                { mapDataToLinks(this.props.ingredient_names) }
                            </ul>
                        </div>
                        <a href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a>
                    </div>
                </Modal>
            </div>
        )

        const floatingButton = (
            <div id="floatingbutton">
                <img src="https://trello-attachments.s3.amazonaws.com/5ce636e5f2414e595f40bf7e/377x364/85c8414a92615ceaf07566442141e552/%E1%84%8E%E1%85%A2%E1%84%89%E1%85%A9%E1%86%BC%E1%84%85%E1%85%A9%E1%84%80%E1%85%A9_%E1%84%8C%E1%85%A2%E1%84%85%E1%85%AD%E1%84%8E%E1%85%AE%E1%84%80%E1%85%A1.png" onClick={() => this.openModal()} alt=""/>
            </div>
        )

        return(
            <div>
                {floatingButton}
                {floatingModal}
            </div>
        )
    }
}

export default FloatingButton;