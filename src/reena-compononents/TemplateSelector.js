import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Template from './Template';
import Template2 from './Template2';
import Template3 from './Template3';
import Template4 from './Template4';
import {ReactComponent as TemplateIcon} from '../Assets/Template.svg';
import {ReactComponent as Template2Icon} from '../Assets/Template2.svg';
import {ReactComponent as Template3Icon} from '../Assets/Template3.svg';
import {ReactComponent as Template4Icon} from '../Assets/Template4.svg';



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-prevent-tabpanel-${index}`}
      aria-labelledby={`scrollable-prevent-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-prevent-tab-${index}`,
    'aria-controls': `scrollable-prevent-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));


export default function ScrollableTabsButtonPrevent() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root} style={{backgroundColor: "transparent"}}>
      <AppBar position="static" style={{backgroundColor: "#3c4245", margin: "auto", textAlign: "center", width: "75%", color:"#00c9b7"}}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          aria-label="scrollable prevent tabs example"
        >
          <Tab icon={<TemplateIcon />} aria-label="" {...a11yProps(0)} />
          <Tab icon={<Template2Icon />} aria-label="" {...a11yProps(1)} />
          <Tab icon={<Template3Icon />} aria-label="" {...a11yProps(2)} />
          <Tab icon={<Template4Icon />} aria-label="" {...a11yProps(3)} />
         
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Template />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Template2 />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Template3 />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Template4 />
      </TabPanel>
    </div>
  );
}