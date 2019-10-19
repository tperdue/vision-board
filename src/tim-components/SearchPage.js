import React from 'react';

import { makeStyles } from '@material-ui/core/styles';


import SearchBar from '../search-components/Search-bar';
import Results from '../search-components/Results';


const userStyles = makeStyles(theme => ({
    content: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: "5rem",
        padding: theme.spacing(3),
    },
    card: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
}));





const SearchPage = (props) => {
    const classes = userStyles();

    return (
        <div className={classes.content}>
            <SearchBar />
            <Results />
            
        </div>

    )
}

export default SearchPage;