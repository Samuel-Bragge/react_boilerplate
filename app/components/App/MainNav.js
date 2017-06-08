import React from 'react';
import {NavLink} from 'react-router-dom';


export default () => {
    return(
        <ul className="MainNav row">
            <li>
                <NavLink exact activeClassName="currentPage" to="/">Home</NavLink>
            </li>
            <li>
                <NavLink activeClassName="currentPage" to="/battle">Battle</NavLink>
            </li>
            <li>
                <NavLink activeClassName="currentPage" to="/popular">Popular</NavLink>
            </li>
        </ul>
    )
}
