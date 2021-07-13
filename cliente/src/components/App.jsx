import {Box, Grid} from '@material-ui/core';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Nav from './Global/Nav.jsx';
import Titulo from './Global/Titulo.jsx';
import TituloRegistro from './Global/TituloRegistro.jsx';
import TituloEditar from './Global/TituloEditar.jsx';
import Cuerpo from './Global/Cuerpo.jsx';
import NuevoUsuario from './Global/NuevoUsuario.jsx';
import EditarUsuario from './Global/EditarUsuario.jsx';



function App(){

  return (

    <Router>
      <div>
        <Box position="absolute" zIndex="-1" bgcolor="#f0f0f5" height="100vh" width="100vw">
          <Box bgcolor="#212737" height="150px" p={2}></Box>
        </Box>
        
        <Grid container>
          <Grid item xs={12}>
            <Box borderColor="grey.500" mx={8} mt={1} borderBottom={1}  >
              <Nav/>
            </Box>

            <Switch>
              <Route path="/crm" exact>
                <Box mx={8} mt={4} mb={1}>
                  <Titulo/>
                </Box>
                <Box bgcolor="white" height="75vh" mx={8}>
                  <Cuerpo/>
                </Box>
              </Route>

              <Router path="/crm/new_client">
                <Box mx={8} mt={4} mb={1}>
                  <TituloRegistro/> 
                </Box>
                <Box bgcolor="white" height="60vh" mx={8}>
                  <NuevoUsuario/>
                </Box>
              </Router>

              <Router path="/crm/edit_client/">
                <Box mx={8} mt={4} mb={1}>
                  <TituloEditar/> 
                </Box>
                <Box bgcolor="white" height="60vh" mx={8}>
                  <EditarUsuario/>
                </Box>
              </Router>

            </Switch>

          </Grid>
        </Grid>
      </div>
    </Router>    
  );
}

export default App;
