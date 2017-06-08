import React from 'react';
import {Link} from 'react-router-dom';

export default class Home extends React.Component {
    render(){
        return(
            <div className="Home">
                <h1>Github Battle your friends!</h1>
                <Link to="/battle">
                    <button className="button">Battle</button>
                </Link>
            </div>
        );
    }
}
