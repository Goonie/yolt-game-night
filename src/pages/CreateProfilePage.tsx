import React from 'react';

import MockupOptions from 'components/MockupOptions';
import MockupOptionsLink from 'components/MockupOptionsLink';

const CreateProfilePage: React.FC = () => (
	<main>
		<h1>Create Profile Todo</h1>
		<ul>
			<li>Render form</li>
			<li>Add to 'players' collection</li>
		</ul>

		<MockupOptions>
			<MockupOptionsLink to="/planner">Planner</MockupOptionsLink>
		</MockupOptions>
	</main>
);

export default CreateProfilePage;
