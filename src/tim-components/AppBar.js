import React from 'react';
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { drawerWidth } from '../configs/app-constants';
import { toggleDrawer } from '../redux-store/actions';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    appBar: {
        marginLeft: drawerWidth,
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
        },
    },
    title: {
        flexGrow: 1,
    },
}));

const ButtonAppBar = (props) => {
    const classes = useStyles();

    return (



        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={props.toggleDrawer}
                    className={classes.menuButton}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap>
                    Vision Board
                    </Typography>
            </Toolbar>
        </AppBar>



    );
}

const mapStateToProps = (state) => {

    const { open } = state.drawer;
    return { open }
};
const mapDispatchToProps = {
    toggleDrawer
}


export default connect(mapStateToProps, mapDispatchToProps)(ButtonAppBar);