import React from 'react';
import MainNav from './MainNav';
import Home from './Home';
import Battle from './Battle';
import Result from './Result';
import Popular from './Popular';
import {BrowserRouter, Route, Switch} from 'react-router-dom';




export default class App extends React.Component {
    render(){
        return(
            <BrowserRouter>
                <div className="App">
                    <MainNav/>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/battle" component={Battle}/>
                        <Route path="/battle/result" component={Result}/>
                        <Route path="/popular" component={Popular}/>
                        <Route render={()=>{
                                return <h1>Not Found</h1>
                            }} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}
