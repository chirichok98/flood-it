import * as React from 'react';
import { NavLink  } from 'react-router-dom';

const Navigator: React.FunctionComponent<{}> = () => {
	return (
		<div className="navigator">
			<NavLink activeClassName="selected" exact to="/settings">Settings</NavLink >
			<NavLink activeClassName="selected" exact to="/">Game</NavLink >
			<NavLink activeClassName="selected" exact to="/about">About</NavLink >
		</div>
	);
};

export default Navigator;