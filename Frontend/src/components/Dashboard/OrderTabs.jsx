import * as React from 'react';
import { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import OrdersTable from './OrdersTable';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function OrderTabs() {
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [completedOrders, setCompletedOrders] = useState([]);
  const [pendingOrders, setPendingOrders] = useState([]);
  const [emergencyOrders, setEmergencyOrders] = useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  React.useEffect(() => {
    const fetchData = async() => {
      let response;
      try {
        switch(value) {
          case 0: 
            response = await axios.get('http://localhost:3000/api/orders/completed');
            setCompletedOrders(response.data);
            console.log(response.data);
            break;
          case 1: 
            response = await axios.get('http://localhost:3000/api/orders/inProcess');
            setPendingOrders(response.data);
            break;
          case 2: 
            response = await axios.get('http://localhost:3000/api/orders/emergency');
            setEmergencyOrders(response.data);
            break;
          default:
            break;
        }
      } catch (error) {
        console.error('Failed to fetch orders:', error);
      };
    }
    fetchData();
  }, [value]);

  return (
    <div className="w-full px-10 py-10">
        <Box sx={{ bgcolor: 'background.paper',  width: '100%'  }} >
        <AppBar position="static">
            <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="inherit"
            variant="fullWidth"
            aria-label="full width tabs example"
            >
            <Tab label="Completed Orders" {...a11yProps(0)} />
            <Tab label="Pending Orders" {...a11yProps(1)} />
            <Tab label="Emergency Orders" {...a11yProps(2)} />
            </Tabs>
        </AppBar>
        <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={value}
            onChangeIndex={handleChangeIndex}
            className=''
        >
            <TabPanel value={value} index={0} dir={theme.direction}>
                <OrdersTable orders={completedOrders} />
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
              <OrdersTable orders={pendingOrders} />
            </TabPanel>
            <TabPanel value={value} index={2} dir={theme.direction}>
              <OrdersTable orders={emergencyOrders} />
            </TabPanel>
        </SwipeableViews>
        </Box>
    </div>
  );
}