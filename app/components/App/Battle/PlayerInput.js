import React from 'react';
import PropTypes from 'prop-types';

export default class PlayerInput extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            username:''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        this.setState({username:e.target.value});
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.onSubmit(
            this.props.id,
            this.state.username
        );
    }


    render(){
        return(
            <form className="PlayerInput column" onSubmit={this.handleSubmit }>
                <label className="header" htmlFor={this.props.id}>
                    {this.props.label}
                </label>
                <input
                    id={this.props.id}
                    placeholder="Github Username"
                    type="text"
                    autoComplete="off"
                    value={this.state.username}
                    onChange={this.handleChange}
                    />
                <button
                    className="button"
                    type="submit"
                    disabled={!this.state.username}
                    >Submit</button>
            </form>
        );
    }
}

PlayerInput.PropTypes = {
    id:PropTypes.string.isRequired,
    label:PropTypes.string.isRequired,
    onSubmit:PropTypes.func.isRequired
}
