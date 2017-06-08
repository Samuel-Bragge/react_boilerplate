import React from 'react';
import PropTypes from 'prop-types';
import PlayerPreview from '../PlayerPreview';

export default function Player(props){
    console.log(props.profile);
    return(
        <div className="Player column">
            <h1>{props.label}</h1>
            <h3>{props.score}</h3>
            <PlayerPreview style={props.label} img={props.profile.avatar_url} username={props.profile.login}>
                <ul>
                    {props.profile.name && <li>{props.profile.name}</li>}
                    {props.profile.location && <li>{props.profile.location}</li>}
                    {props.profile.company && <li>{props.profile.company}</li>}
                    <li>Followers: {props.profile.followers}</li>
                    <li>Following: {props.profile.following}</li>
                    <li>Public Repos: {props.profile.public_repos}</li>
                    {props.profile.blog && <li><a href={props.profile.blog}>{props.profile.blog}</a></li>}
                </ul>
            </PlayerPreview>
        </div>
    );
}

Player.PropTypes = {
    label:PropTypes.string.isRequired,
    profile:PropTypes.object.isRequired,
    score:PropTypes.number.isRequired
}
