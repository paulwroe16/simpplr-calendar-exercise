import React, {Component} from "react";
import { BrowserRouter as Router, hashHistory, Route, IndexRoute, browserHistory, Switch } from 'react-router-dom';

//	Components
import Calendar from './Calendar';

const routes = (
	<Router history={hashHistory}>
		<Switch>
			<Route exact path="/" component={ Calendar } />
			<Route exact path="/:year?/:month?" component={ Calendar } />
		</Switch>
	</Router>
);

class App extends Component {
  render() {
    return routes;
  }
}

export default App;