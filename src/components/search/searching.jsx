import React, {Component} from 'react';


export default class Search extends Component {
    state = {
        value: ''
    };

    handleChange = (e) => {
        this.setState({value: e.target.value});
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.value);
        this.setState({value: ''});
    };

    render(){
        const {value}=this.state;
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={value} onChange={this.handleChange} />
                <button type="submit">Search</button>
            </form>
        );
    }  
}