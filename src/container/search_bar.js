import React, {Component} from  'react';
import {connect} from 'react-redux';
import {featchWeather} from '../actions/index';
import  {bindActionCreators} from 'redux';



class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state={term : ''};
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {this.setState({term: event.target.value})};
    onFormSubmit(event){
        event.preventDefault();
        this.props.featchWeather(this.state.term);
        this.setState({term: ''});
    }
    render (){
      console.log('111111');
        return (
            <form onSubmit={this.onFormSubmit}  className="input-group">
                <input
                placeholder="Get a 5 day forecast in your favorite city"
                className="form-control"
                value={this.state.term}
                onChange={this.onInputChange}/>
               <span className="input-group-btn">
                   <button type="submit" className="btn btn-secondary ">submit</button>
               </span>
            </form>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({featchWeather}, dispatch)
}
export default connect (null, mapDispatchToProps)(SearchBar);
