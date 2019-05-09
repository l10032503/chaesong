import React, {Component} from 'react';

class Search extends Component{
    render(){
        const mapDataToLinks = (data) = {

        }

        return(
          <div className="search=screen white-text">
                <div className="right">
                    <a className="btn">CLOSE</a>
                </div>
                <div className="container">
                    <input placeholder="Search a user"></input>
                    <ul className="search-results">
                        { mapDataToLinks(this.props.searchWord) }
                    </ul>
                </div>
          </div>
        );
    }
}

export default Search;