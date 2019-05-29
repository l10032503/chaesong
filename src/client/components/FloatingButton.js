import React, { Component } from 'react';
import PropTypes from 'prop-types';
import jQuery from "jquery";
import Modal from 'react-awesome-modal';
import {ingredientSearchRequest} from "../actions/ingredient";
import {connect} from "react-redux";
import ReactAutocomplete from 'react-autocomplete';
window.$ = window.jQuery = jQuery;

class FloatingButton extends Component {
    constructor(props){
        super(props);
        this.state={
            values : '',
            visible : false,
            keyword : ''
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

    handleChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    componentDidMount(){
        this.props.ingredientSearchRequest(true, undefined);
    }





    render(){

        const floatingModal = (
            <div>
                <Modal visible={this.state.visible} width="400" height="400" effect="fadeInRight" onClickAway={() => this.closeModal()}>
                    <div className="modal-header bg-primary">
                        <h4 id="modal-title">먹은 재료 직접 입력 </h4>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => this.closeModal()}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div id="auto-complete">
                        <ReactAutocomplete
                            items={this.props.ingredient_names}
                            shouldItemRender={(item, value) => item.ingredient_name.toLowerCase().indexOf(value.toLowerCase()) > -1}
                            getItemValue={item => item.ingredient_name}
                            renderItem={(item, highlighted) =>
                                <div
                                    key={item.ingredient_code}
                                    style={{ backgroundColor: highlighted ? '#eee' : 'transparent'}}
                                >
                                    {item.ingredient_name}
                                </div>
                            }
                            menuStyle={this.props.menuStyle}
                            value={this.state.value}
                            onChange={e => this.setState({ value: e.target.value })}
                            onSelect={value => this.setState({ value })}
                        />
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

const mapStateToProps = (state) => {
    return {
        ingredient_names : state.ingredient.ingredient_names,
        menuStyle : {
            left:0,
            borderRadius: '3px',
            boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)',
            background: 'rgba(255, 255, 255, 0.9)',
            padding: '2px 0',
            fontSize: '90%',
            position: 'fixed',
            overflow: 'auto',
            height: '200px'
            }
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        ingredientSearchRequest:(isInitial, listType) =>{
            return dispatch(ingredientSearchRequest(isInitial, listType));
        }
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(FloatingButton);