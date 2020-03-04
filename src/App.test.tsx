import React from 'react';
import { render } from '@testing-library/react';

import App from './App';

it('renders the app without problems', () => {
	const container = render(<App />);
	expect(container.getByText('Yolt Game Night')).toBeInTheDocument();
});
