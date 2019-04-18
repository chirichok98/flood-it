import * as React from 'react';
import about1 from'../images/about1.png';
import about2 from'../images/about2.png';

const About: React.FunctionComponent<{}> = () => {
	return (<div className="about">
		<p>Color Flood is a fun addictive brain and puzzle game. The objective of this game is to flood fill the entire board with one color.</p>
		<p>PUZZLE RULES:</p>
		<ul className="list">
			<li>Each time you tap on a color from the bottom of the screen the tiles starting from the top left corner will change to that color.</li>
			<li>All adjacent tiles with the same color will change too.</li>
			<li>In the available moves shown above you have to tap the colors until the whole puzzle board is filled with one color.</li>
			<li>Can Select the Number of Colors</li>
		</ul>
		<div className="images">
			<img src={about1} alt="About 1"/>
			<img src={about2} alt="About 2"/>
		</div>
	</div>);
};

export default About;