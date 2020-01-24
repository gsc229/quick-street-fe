import React from 'react';
import { Link } from 'react-router-dom';
//styling
import menu from '../../styles/scss/menu.module.scss';

const Menu = () => {
	return (
		<div className={menu.container}>
			<nav class={menu.nav}>
				<h1>Market Avenue</h1>
				<ul class={menu.links}>
					<li class={menu.item}>
						<Link to="/login">Login</Link>
					</li>
					<li class={menu.item}>
						<Link to="/register">Join Us</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Menu;
