import React, {Component} from 'react';
import {scrapListRequest} from "../actions/personal";
import {connect} from 'react-redux';
import {PersonalPage} from '../components';
import CanvasJSReact from '../../canvasjs.react.js';
const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

class personalview extends Component{
    componentDidMount() {
        this.props.eatenListRequest(true, undefined);
    }

    render(){
        const options = {
            toolTip: {
                shared: true
            },
            legend: {
                verticalAlign: "top"
            },
            axisY: {
                suffix: "%"
            },
            backgroundColor: 'transparent',
            data: [{
                type: "stackedBar100",
                color: "#4CAF50",
                name: "섭취",
                showInLegend: true,
                indexLabel: "{y}",
                indexLabelFontColor: "white",
                yValueFormatString: "#,###'%'",
                dataPoints: [
                    {label: "Health & Clinical Science", y: 85},
                    {label: "Education", y: 79},
                ]
            }, {
                type: "stackedBar100",
                color: "#7f7f7f",
                name: "미섭취",
                showInLegend: true,
                indexLabel: "{y}%",
                indexLabelFontColor: "white",
                yValueFormatString: "#,###'%'",
                dataPoints: [
                    {label: "Health & Clinical Science", y: 15},
                    {label: "Education", y: 21},
                ]
            }]
        }

        return (
            <div className="Wrapper">
                <PersonalPage data={this.props.scrapData}
                              currentUser = {this.props.currentUser}
                              />
                <CanvasJSChart options = {options}/>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        scrapData : state.personalpage.list.data,
        listStatus : state.personalpage.list.status
    };
};

const mapDispatchToProps = (dispatch) => {
    return{
        eatenListRequest: (isInitial, listType) => {
            return dispatch(scrapListRequest(isInitial, listType));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(personalview);