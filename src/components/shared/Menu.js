import React from 'react';

//styling
import '../../styles/scss/menu.scss';

const Menu = () => {
	return (
		<div className="menu-container">
			<nav class="navbar">
				Market Avenue
				<ul class="nav-links">
					<li class="nav-item">
						<a href="#">Food</a>
					</li>
					<li class="nav-item">
						<a href="#">Services</a>
					</li>
					<li class="nav-item">
						<a href="#">About</a>
					</li>
					<li class="nav-item">
						<a href="#">Login</a>
					</li>
					<li class="nav-item">
						<a href="#">Join Us</a>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Menu;
