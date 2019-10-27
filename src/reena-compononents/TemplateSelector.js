// import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
// import Template from './Template'
// import Template2 from './Template2'
// import Template3 from './Template3'
// import Template4 from './Template4'



// export default function TemplateSelector() {
//   return (
//     <Router>
//       <div>
//         <ul>
//           <li>
//             <Link to="/template">1</Link>
//           </li>
//           <li>
//             <Link to="/template2">2</Link>
//           </li>
//           <li>
//             <Link to="/template3">3</Link>
//           </li>
//           <li>
//             <Link to="/template4">4</Link>
//           </li>
//         </ul>
//         <hr />

//         <Switch>
//           <Route exact path="/template">
//             <Template />
//           </Route>
//           <Route path="/template2">
//             <Template2 />
//           </Route>
//           <Route path="/template3">
//             <Template3 />
//           </Route>
//           <Route path="/template4">
//             <Template4 />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }


// import React from 'react';
// import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/core/styles';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';
// import Template from './Template'
// import Template2 from './Template2'
// import Template3 from './Template3'
// import Template4 from './Template4'
// import {ReactComponent as TemplateIcon} from '../Assets/Template.svg'

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <Typography
//       component="div"
//       role="tabpanel"
//       hidden={value !== index}
//       id={`vertical-tabpanel-${index}`}
//       aria-labelledby={`vertical-tab-${index}`}
//       {...other}
//     >
//       <Box p={3}>{children}</Box>
//     </Typography>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.any.isRequired,
//   value: PropTypes.any.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `vertical-tab-${index}`,
//     'aria-controls': `vertical-tabpanel-${index}`,
//   };
// }

// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1,
//     backgroundColor: theme.palette.background.paper,
//     display: 'flex',
//     height: 224,
//   },
//   tabs: {
//     borderRight: `1px solid ${theme.palette.divider}`,
//   },
// }));

// export default function VerticalTabs() {
//   const classes = useStyles();
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <div className={classes.root} style={{backgroundColor: "transparent"}}>
//       <Tabs
//         orientation="vertical"
//         variant="scrollable"
//         value={value}
//         onChange={handleChange}
//         aria-label="Vertical tabs example"
//         className={classes.tabs}
//       >
//         <Tab icon={<TemplateIcon />} {...a11yProps(0)} />
//         <Tab label="Fancy" {...a11yProps(1)} />
//         <Tab label="More" {...a11yProps(2)} />
//         <Tab label="Item Four" {...a11yProps(3)} />
//         <Tab label="Item Five" {...a11yProps(4)} />
//         <Tab label="Item Six" {...a11yProps(5)} />
//         <Tab label="Item Seven" {...a11yProps(6)} />
//       </Tabs>
//       <TabPanel value={value} index={0}>
//         <Template />
//       </TabPanel>
//       <TabPanel value={value} index={1}>
//         <Template2 />
//       </TabPanel>
//       <TabPanel value={value} index={2}>
//         <Template3 />
//       </TabPanel>
//       <TabPanel value={value} index={3}>
//         <Template4 />
//       </TabPanel>
//       <TabPanel value={value} index={4}>
//         Item Five
//       </TabPanel>
//       <TabPanel value={value} index={5}>
//         Item Six
//       </TabPanel>
//       <TabPanel value={value} index={6}>
//         Item Seven
//       </TabPanel>
//     </div>
//   );
// }

import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';
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
      <AppBar position="static" style={{backgroundColor: "transparent", margin: "auto", textAlign: "center", width: "75%", color:"gray"}}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          aria-label="scrollable prevent tabs example"
        >
          <Tab icon={<TemplateIcon />} aria-label="phone" {...a11yProps(0)} />
          <Tab icon={<Template2Icon />} aria-label="favorite" {...a11yProps(1)} />
          <Tab icon={<Template3Icon />} aria-label="person" {...a11yProps(2)} />
          <Tab icon={<Template4Icon />} aria-label="help" {...a11yProps(3)} />
         
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