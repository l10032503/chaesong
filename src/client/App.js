import React, { Component } from 'react';
import './app.css';


class MyComponent extends Component {
    state={
        hi:"hello!"
    }
    render() {
        return(
            <div>
                <h1>{this.state.hi}</h1>
                <h1>chaesong react express test</h1>
                <h1>build 후 확인</h1>
            </div>
        );
    }
}

export default MyComponent;