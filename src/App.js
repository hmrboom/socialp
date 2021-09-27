import React from 'react';
import './myStyle.css';
import {Route, Switch} from "react-router-dom";
import Home from "./Home";
import Register from "./Components/Form/Register";
import Login from "./Components/Form/Login";
function App() {
    return (
        <main>
            <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login}/>
            </Switch>
        </main>
    );
}

export default App;
