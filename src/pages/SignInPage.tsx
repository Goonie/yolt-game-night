import React from 'react';

import MockupOptions from 'components/MockupOptions';
import MockupOptionsLink from 'components/MockupOptionsLink';

const SignInPage: React.FC = () => (
	<main>
		<h1>Sign In Todo</h1>
		<ul>
			<li>Sign in with Google</li>
			<li>Sign in with GitHub</li>
		</ul>

		<MockupOptions>
			<MockupOptionsLink to="/create-profile">
				New Profile
			</MockupOptionsLink>
			<MockupOptionsLink to="/planner">
				Existing Profile
			</MockupOptionsLink>
		</MockupOptions>
	</main>
);

export default SignInPage;
