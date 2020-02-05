import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Context as AuthContext } from '../../contexts/AuthContext.js';
import { Context as CartContext } from '../../contexts/TestCartContext';
import Modal from './Modal';
import ShoppingCartItems from './ShoppingCart/ShoppingCartItems';
import Drawer from '@material-ui/core/Drawer';
import { shopping_cart_light } from '../../assets/svgs/index';
const useStyles = makeStyles((theme) => ({
	avatar: {
		height: '42px',
		width: '42px'
	},
	numbder: {
		position: 'absolute'
	},
	grow: {
		flexGrow: 1
	},
	menuButton: {
		marginRight: theme.spacing(2)
	},
	title: {
		color: 'white',
		display: 'none',
		[theme.breakpoints.up('lg')]: {
			display: 'block'
		}
	},
	search: {
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		'&:hover': {
			backgroundColor: fade(theme.palette.common.white, 0.25)
		},
		marginRight: theme.spacing(2),
		marginLeft: 0,
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing(3),
			width: 'auto'
		}
	},
	searchIcon: {
		width: theme.spacing(7),
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	},
	inputRoot: {
		color: 'inherit'
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 7),
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('md')]: {
			width: 200
		}
	},
	sectionDesktop: {
		display: 'none',
		[theme.breakpoints.up('md')]: {
			display: 'flex'
		},
		links: {
			color: 'white'
		}
	},
	sectionMobile: {
		display: 'flex',
		[theme.breakpoints.up('md')]: {
			display: 'none'
		}
	},
	list: {
		width: 300,
		backgroundColor: '#00B2ED',
		paddingLeft: 40,
		paddingRight: 40,
		paddingTop: 50,
		paddingBottom: 50,
		color: 'white'
	}
}));

const Nav = () => {
	const { signout } = useContext(AuthContext);
	const { state, getCartItems } = useContext(CartContext);
	const cart = state.cart;
	const classes = useStyles();
	const token = localStorage.getItem('token');
	const isVendor = localStorage.getItem('isVendor');
	const customerId = localStorage.getItem('user_id');
	const [ anchorEl, setAnchorEl ] = React.useState(null);
	const [ mobileMoreAnchorEl, setMobileMoreAnchorEl ] = React.useState(null);
	const [ stateDrawer, setStateDrawer ] = React.useState({
		top: false
	});
	const cartQuantity = (cart) => {
		if (cart.items) {
			return cart.items.length;
		} else {
			return 0;
		}
	};
	console.log('Customer ID', customerId);
	useEffect(() => {
		getCartItems(customerId);
	}, []);
	console.log('State Items', state);
	const toggleDrawer = (side, open) => (event) => {
		if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
			return;
		}
		setStateDrawer({ ...stateDrawer, [side]: open });
	};

	console.log('HERE', { isVendor });
	console.log('our token', { token });
	console.log('cart', cart);
	const isMenuOpen = Boolean(anchorEl);
	const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
	const handleProfileMenuOpen = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleMobileMenuClose = () => {
		setMobileMoreAnchorEl(null);
	};
	const handleMenuClose = () => {
		setAnchorEl(null);
		handleMobileMenuClose();
	};
	const handleMobileMenuOpen = (event) => {
		setMobileMoreAnchorEl(event.currentTarget);
	};
	const menuId = 'primary-search-account-menu';
	const renderMenu = (
		<Menu
			anchorEl={anchorEl}
			anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
			id={menuId}
			keepMounted
			transformOrigin={{ vertical: 'top', horizontal: 'right' }}
			open={isMenuOpen}
			onClose={handleMenuClose}
		>
			<MenuItem onClick={handleMenuClose}>Dashboard</MenuItem>
			<MenuItem onClick={handleMenuClose}>
				<Link to="/login" onClick={() => signout()}>
					Sign Out
				</Link>
			</MenuItem>
		</Menu>
	);
	const sideList = (side) => (
		<div
			className={classes.list}
			role="presentation"
			onClick={toggleDrawer(side, false)}
			onKeyDown={toggleDrawer(side, false)}
		>
			<List>
				<h1>Your Cart</h1>
			</List>
			<ShoppingCartItems />
			{cart && <p>Total: {cart.total}</p>}
			<button onClick={toggleDrawer('right', false)}>Keep Shopping</button>
			{/* <button onClick={handleCheckout}>Checkout</button> */}
			{cart && <Link to={{ pathname: `/orderreview/${cart._id}` }}>Checkout</Link>}
		</div>
	);
	const mobileMenuId = 'primary-search-account-menu-mobile';
	const renderMobileMenu = (
		<React.Fragment>
			<Menu
				anchorEl={mobileMoreAnchorEl}
				anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
				id={mobileMenuId}
				keepMounted
				transformOrigin={{ vertical: 'top', horizontal: 'right' }}
				open={isMobileMenuOpen}
				onClose={handleMobileMenuClose}
			>
				<MenuItem>
					<IconButton onClick={toggleDrawer('right', true)} aria-label="show items in car" color="inherit">
						<Badge badgeContent={4} color="secondary">
							<ShoppingCartIcon />
						</Badge>
					</IconButton>
					<Drawer anchor="right" open={stateDrawer.right} onClose={toggleDrawer('right', false)}>
						{sideList('right')}
					</Drawer>
				</MenuItem>
				<MenuItem>
					<Link to="/dashboard">Dashboard</Link>
				</MenuItem>
			</Menu>
		</React.Fragment>
	);

	return (
		<div className={classes.grow}>
			<AppBar
				// style={{ background: 'transparent', boxShadow: 'none' }}
				style={token ? { background: '#00B2ED' } : { background: 'transparent', boxShadow: 'none' }}
				position="static"
			>
				<Toolbar>
					<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="open drawer">
						<MenuIcon />
					</IconButton>
					<Typography className={classes.title} variant="h6" noWrap>
						Market Avenue
					</Typography>
					<div className={classes.grow} />
					<div className={classes.sectionDesktop}>
						{!token && (
							<div className={classes.sectionDesktop}>
								<Link
									style={{
										margin: '1rem',
										color: 'white',
										textDecoration: 'none',
										fontSize: '2.4rem'
									}}
									to="/login"
								>
									Login
								</Link>
								<Link
									style={{
										margin: '1rem',
										color: 'white',
										textDecoration: 'none',
										fontSize: '2.4rem'
									}}
									to="/register"
								>
									Join Us
								</Link>
							</div>
						)}
						{isVendor === 'true' && (
							<MenuItem>
								<IconButton
									edge="end"
									aria-label="account of current user"
									aria-controls={menuId}
									aria-haspopup="true"
									onClick={handleProfileMenuOpen}
									color="inherit"
								>
									<AccountCircle style={{ height: '30px', width: '30px' }} />
								</IconButton>
							</MenuItem>
						)}
						{isVendor === 'false' && (
							<React.Fragment>
								<MenuItem>
									<IconButton
										edge="end"
										aria-label="account of current user"
										aria-controls={menuId}
										aria-haspopup="true"
										onClick={handleProfileMenuOpen}
										color="inherit"
									>
										<AccountCircle style={{ height: '30px', width: '30px' }} />
									</IconButton>
								</MenuItem>
								<MenuItem>
									<IconButton
										onClick={toggleDrawer('right', true)}
										aria-label="show items in car"
										color="inherit"
									>
										<Badge badgeContent={cartQuantity(cart)} color="secondary">
											<ShoppingCartIcon style={{ height: '30px', width: '30px' }} />
										</Badge>
									</IconButton>
									<Drawer
										anchor="right"
										open={stateDrawer.right}
										onClose={toggleDrawer('right', false)}
									>
										{sideList('right')}
									</Drawer>
								</MenuItem>
							</React.Fragment>
						)}
					</div>
				</Toolbar>
			</AppBar>
			{renderMobileMenu}
			{renderMenu}
		</div>
	);
};
export default Nav;
