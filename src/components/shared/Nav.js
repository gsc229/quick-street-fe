import React, { useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';

// context
import { Context as AuthContext } from '../../contexts/AuthContext';
import { Context as CartContext } from '../../contexts/TestCartContext';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
	},
	tabs: {
		display: 'flex',
		flexGrow: 1,
		justifyContent: 'space-evenly',
		fontSize: '2rem'
	},
	login: {
		flexGrow: 0.1,
		display: 'flex',
		fontSize: '2rem',
		justifyContent: 'space-evenly'
	},
	menuButton: {
		marginRight: theme.spacing(2)
	},
	title: {}
}));

const Nav = () => {
	const { state, getCartItems } = useContext(CartContext);
	const { signout } = useContext(AuthContext);
	const classes = useStyles();
	useEffect(() => {
		getCartItems();
	}, []);
	const itemsGive = state.cart && state.cart.items && state.cart.items.map((item) => <p>{item}</p>);
	console.log('items', itemsGive);
	return (
		<div className={classes.root}>
			<AppBar position="static" style={{ background: 'transparent', boxShadow: 'none' }}>
				<Toolbar>
					<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" className={classes.title}>
						<Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
							<h1>Marketavenue</h1>
						</Link>
					</Typography>
					<div className={classes.tabs}>
						<Link style={{ color: 'white', textDecoration: 'none' }}>Food</Link>
						<Link style={{ color: 'white', textDecoration: 'none' }}>Services</Link>
						<Link
							style={{
								color: 'white',
								textDecoration: 'none',
								textDecoration: 'none'
							}}
						>
							About
						</Link>
					</div>
					<div className={classes.login}>
						<Link to="/login" style={{ color: 'white', textDecoration: 'none' }}>
							Log In
						</Link>
						<Link to="/register" style={{ color: 'white', textDecoration: 'none' }}>
							Join Us
						</Link>
						<Link to="/login" style={{ color: 'white', textDecoration: 'none' }} onClick={() => signout()}>
							Log Out
						</Link>
					</div>
					Cart # of items
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default Nav;
