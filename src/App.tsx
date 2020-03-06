import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import LoadingPage from 'pages/LoadingPage';
import SignInPage from 'pages/SignInPage';
import CreateProfilePage from 'pages/CreateProfilePage';
import PlannerPage from 'pages/PlannerPage';

import 'styles/app.scss';

const App: React.FC = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={LoadingPage} />
			<Route exact path="/sign-in" component={SignInPage} />
			<Route exact path="/create-profile" component={CreateProfilePage} />
			<Route exact path="/planner" component={PlannerPage} />
		</Switch>
	</BrowserRouter>
);

export default App;
