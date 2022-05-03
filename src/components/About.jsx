import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/index.scss';

const About = () => {
	return (
		<div className="abt-dis">

          <img src="/main_logo_home.png" alt="assetto logo" />
										<div className="btn-dis">
										<Link role="button" to="/home">
											CLICK HERE, TO	LEARN MORE ABOUT ASSETTO !!
										</Link>
         </div>

     </div>
	);
};

export default About;
