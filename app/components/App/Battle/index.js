import React from 'react';
import PlayerInput from './PlayerInput';
import PlayerPreview from '../PlayerPreview';
import {Link} from 'react-router-dom';

export default class Battle extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            playerOneName:'',
            playerTwoName:'',
            playerOneImage:null,
            playerTwoImage:null
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReset = this.handleReset.bind(this);

    }

    render(){
        return(
            <div className="Battle">
                <div className="row">
                    {!this.state.playerOneName ?
                        <PlayerInput id='playerOne' label='Player One' onSubmit={this.handleSubmit} />:

                        <PlayerPreview img={this.state.playerOneImage} username={this.state.playerOneName}>
                            <a className="reset" onClick={this.handleReset.bind(null, 'playerOne')}>reset</a>
                        </PlayerPreview>}

                    {!this.state.playerTwoName ?
                        <PlayerInput id='playerTwo' label='Player Two' onSubmit={this.handleSubmit} />:

                        <PlayerPreview img={this.state.playerTwoImage} username={this.state.playerTwoName}>
                            <a className="reset" onClick={this.handleReset.bind(null, 'playerTwo')}>reset</a>
                        </PlayerPreview>}

                </div>
                {(this.state.playerOneImage && this.state.playerTwoImage) &&
                <Link
                    className="row"
                    to={{
                    pathname:this.props.match.url+'/result',
                    search:'?playerOneName='+this.state.playerOneName+'&playerTwoName='+this.state.playerTwoName
                    }} >
                    <button className="button">Battle</button>
                </Link>}
            </div>
        );



    }

    handleReset(id){
        var newState = {};
        newState[id+'Name'] = '';
        newState[id+'Image'] = null;
        this.setState(newState);
    }

    handleSubmit(id, username){
        var newState = {};
        newState[id+'Name'] = username;
        newState[id+'Image'] = 'https://github.com/'+username+'.png?size=200';
        this.setState(newState);

    }
}
