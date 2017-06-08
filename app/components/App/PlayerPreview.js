import React from 'react';
import PropTypes from 'prop-types';

export default function PlayerPreview (props) {
    return(
        <div className="PlayerPreview column">
            <ul>
                <li><img className={'battlePic '+props.style} src={props.img} alt={props.username}/></li>
                <li className="header username">@{props.username}</li>
            </ul>
            {props.children}
        </div>
    );
}

PlayerPreview.PropTypes = {
    img:PropTypes.string.isRequired,
    username:PropTypes.string.isRequired,
    style:PropTypes.string
}
