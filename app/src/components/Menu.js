import React from 'react';
import { Link } from 'react-router-dom';
//styling
import './Menu.css';

const Menu = () => {
	return (
		<div className="menu-container">
			<nav class="navbar">
				Market Aveune
				<ul class="nav-links">
					{/* <li class="nav-item">
                <a href="#">Food</a>
            </li>
            <li class="nav-item">
                <a href="#">Services</a>
            </li>
            <li class="nav-item">
                <a href="#">About</a>
            </li> */}
					<li class="nav-item">
						<Link to="/login">Login</Link>
					</li>
					<li class="nav-item">
						<Link to="/register">Join Us</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Menu;
