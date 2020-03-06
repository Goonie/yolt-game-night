import React from 'react';
import { Link } from 'react-router-dom';

interface MockupOptionsLinkProps {
	to: string;
}

const MockupOptionsLink: React.FC<MockupOptionsLinkProps> = props => (
	<li className="mockup-options__link">
		<Link to={props.to}>{props.children}</Link>
	</li>
);

export default MockupOptionsLink;
