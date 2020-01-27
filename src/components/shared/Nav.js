import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import navBar from '../../styles/scss/navBar.module.scss';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

const Nav = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar className={navBar.style} position='static'>
        <Toolbar>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' className={classes.title}>
            <h2>Marketavenue</h2>
          </Typography>
          <Button color='inherit'>Log In</Button>
          <Button color='inherit'>Join Us</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Nav;
