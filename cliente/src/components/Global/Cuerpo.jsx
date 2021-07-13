import React from 'react';
import { AppBar, Tabs, Tab, Box, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

import Lista from './ListaUsuarios.jsx';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
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
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function foco(){
  document.getElementById('inputBusqueda').focus();
}

const Cuerpo = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (

    <div className="Cuerpo">
        <AppBar position="static" color="transparent" elevation={0}>
          <Box  borderColor="grey.500" borderBottom={1} pl={5}>
              <Tabs indicatorColor="primary" textColor="primary" value={value} onChange={handleChange} aria-label="simple tabs example">
                <Tab label="Prospectos" {...a11yProps(0)} />
                <Tab  label="Clientes" {...a11yProps(1)} />
                <Tab label="Gráficos" {...a11yProps(2)} />
              </Tabs>
          </Box>
        </AppBar>
        <TabPanel value={value} index={0}>
          Prospectos
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Lista/>
        </TabPanel>
        <TabPanel value={value} index={2}>
          Gráficos
        </TabPanel>
    </div>
  );  
}

export default Cuerpo;
