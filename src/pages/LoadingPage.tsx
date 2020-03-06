import React from 'react';

import MockupOptions from 'components/MockupOptions';
import MockupOptionsLink from 'components/MockupOptionsLink';

const LoadingPage: React.FC = () => (
	<main>
		<h1>Loading Todo</h1>
		<ul>
			<li>Wait for Firebase auth</li>
		</ul>

		<MockupOptions>
			<MockupOptionsLink to="/sign-in">Sign In</MockupOptionsLink>
			<MockupOptionsLink to="/planner">Planner</MockupOptionsLink>
		</MockupOptions>
	</main>
);

export default LoadingPage;
