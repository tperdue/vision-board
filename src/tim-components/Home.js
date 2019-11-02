import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Template from '../reena-compononents/Template';

import VerticalTabs from '../reena-compononents/TemplateSelector';


const userStyles = makeStyles(theme => ({
    content: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: "5rem",
        padding: theme.spacing(3),
    }

}));





const Home = (props) => {
    const classes = userStyles();

    return (
        <div className={classes.content} style={{ backgroundColor: "#transparent" }}>
            <VerticalTabs />
        </div>

    )
};


export default Home;