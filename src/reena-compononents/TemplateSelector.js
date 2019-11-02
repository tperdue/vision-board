import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Template from './Template';
import { ReactComponent as TemplateIcon } from '../Assets/Template.svg';
import { ReactComponent as Template2Icon } from '../Assets/Template2.svg';
import { ReactComponent as Template3Icon } from '../Assets/Template3.svg';
import { ReactComponent as Template4Icon } from '../Assets/Template4.svg';
import { connect } from 'react-redux';
import { switchTemplate } from '../redux-store/actions/template';
import '../CSS/TemplateSelector.css';
import { createMuiTheme } from '@material-ui/core/styles';
import { MuiThemeProvider } from '@material-ui/core/styles';




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
  tabClasses: {
    color: "#f6f078"
  }
  
}));



const theme = createMuiTheme({
  palette: {
    secondary: {
      main: '#f6f078',
    },
  },
});


const tabStyles = makeStyles(theme => ({
  flexContainer: {
    justifyContent: "center",
  }
}))

const ScrollableTabsButtonPrevent = (props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const templateMap = ['template1', 'template2', 'template3', 'template4'];

  const handleChange = (event, newValue) => {
    const { switchTemplate } = props;
    const templateName = templateMap[newValue];
    setValue(newValue);
    switchTemplate(templateName);

  };

  const tabClasses = tabStyles();

  return (
    <div className={classes.root} style={{ backgroundColor: "transparent" }}>
     <MuiThemeProvider theme={theme} >
      <AppBar position="static" style={{ backgroundColor: "#3c4245", margin: "auto", textAlign: "center", width: "91%", color: "#f6f078" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          aria-label="scrollable prevent tabs example"
          classes={tabClasses}

        >
          <Tab icon={<TemplateIcon />} aria-label="" {...a11yProps(0)} />
          <Tab icon={<Template2Icon />} aria-label="" {...a11yProps(1)} />
          <Tab icon={<Template3Icon />} aria-label="" {...a11yProps(2)} />
          <Tab icon={<Template4Icon />} aria-label="" {...a11yProps(3)} />

        </Tabs>
      </AppBar>
    </MuiThemeProvider>

      <TabPanel value={value} index={0}>
        <Template />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Template />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Template />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Template />
      </TabPanel>
    </div>
  );
}

const mapDispatchToProps = {
  switchTemplate
}

export default connect(null, mapDispatchToProps)(ScrollableTabsButtonPrevent);