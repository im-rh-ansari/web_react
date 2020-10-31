import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import CenterGrid from '../Cards/index';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor : "white"
  },
  boot : {
      marginLeft : "20px",
      boxShadow : "none"
  }
}));

export default function ScrollableTabsButtonForce() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="absolute" color="default">
        <Tabs
            className=""
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          <Tab className={classes.boot} label="All Courses"  {...a11yProps(0)} />
          <Tab className={classes.boot} label="Current"  {...a11yProps(1)} />
          <Tab className={classes.boot} label="Completed"  {...a11yProps(2)} />
          <Tab className={classes.boot} label="Upcoming"  {...a11yProps(3)} />
          
        </Tabs>
        
      </AppBar>
      <br/>
      <br/>
      <br/>
      <TabPanel value={value} index={0}>
          <br/>
        <CenterGrid/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Current
      </TabPanel>
      <TabPanel value={value} index={2}>
        Completed
      </TabPanel>
      <TabPanel value={value} index={3}>
        Upcoming
      </TabPanel>
     
    </div>
  );
}