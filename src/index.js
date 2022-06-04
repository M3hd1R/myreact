import react from "react";
import reactDom from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import App from "./App.js";
import "./styles.css";

const appRouting = (
    <Router>
        <Switch>
            <Route path="/">
                <App />
            </Route>
        </Switch>
    </Router>
);

ReactDOM.render(appRouting, document.getElementById("root"));

