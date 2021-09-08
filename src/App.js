import React from 'react';
import './myStyle.css';
import Header from "./Components/Header/Header";
import LeftBody from "./Components/Body/LeftBody";
import {Route, Switch} from "react-router-dom";
import Home from "./Home";

function App() {
    return (
        <main>
            <Switch>
                <Route path="/" component={Home} exact/>
            </Switch>
        </main>
    );
}

export default App;
