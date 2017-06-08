import React from 'react';
import qs from 'query-string';
import github from '../../../utility/api';
import {Link} from 'react-router-dom';
import Player from './Player';


export default class Result extends React.Component {


    constructor(props){
        super(props);
        this.state = {
            winner:null,
            loser:null,
            error:null,
            loading:true
        }
    }

    componentDidMount(){
        let players = qs.parse(this.props.location.search);
        github.battle([
            players.playerOneName,
            players.playerTwoName
        ]).then((res)=>{
            if(res === null){
                return this.setState({
                    error:'Error battling, do both players have Github accounts?',
                    loading:false
                })
            }else{
                this.setState({
                    winner:res[0],
                    loser:res[1],
                    loading:false
                })
            }
        })
    }


    render(){

        let r;
        if(this.state.loading){
            r = <h1>Loading</h1>
        }else if(!this.state.error === null){

            r = (
                <div>
                    <h1>{this.state.error}</h1>
                    <Link to="/battle" >Try Again</Link>
                </div>
            )
        }else{
            r = (
                <div className="Result row">
                    <Player
                        label="winner"
                        profile={this.state.winner.profile}
                        score={this.state.winner.score}/>
                    <Player
                        label="loser"
                        profile={this.state.loser.profile}
                        score={this.state.loser.score}/>

                </div>
            );
        }
        return r;
    }
}
