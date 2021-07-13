import React, {useState} from 'react';
import { Button, TextField, Grid, Box, Typography, makeStyles } from '@material-ui/core';
import Axios from 'axios';

const useStyles = makeStyles(theme => ({
  letra: {
    color: "#fff"
  },
  btnCancelar: {
    backgroundColor: "#f44336",
    color: "#fff",
    borderRadius: 0,
    textTransform: "capitalize",
    width: "13vw"
  },
  btnGuardar: {
    backgroundColor: "#1976d2",
    color: "#fff",
    borderRadius: 0,
    textTransform: "capitalize",
    width: "13vw",
    marginLeft: "15px"
  }
}));

const NuevoUsuario = () => {
  const classes = useStyles()

  const [nombre, setNombre] = useState("");
  const [documento, setDocumento] = useState("");
  const [fechaNac, setFechaNac] = useState("");
  const [email, setEmail] = useState("");

  const registrarCliente = () => {

    Axios.post("http://localhost:3001/crm/new_client/insert", {
      txtDocumento: documento,
      txtNombre: nombre,
      txtFechaNac: fechaNac,
      txtEmail: email
    });
  };

  return (

    <div className="NuevoUsuario">
      <Box mx={6} pt={4} borderBottom={1} borderColor="grey.500">
        <Grid container>
            <Grid item xs={8}>
              <Box pr={10}>
                <Box xs={12} >
                  <Typography component="h4">
                    Nombre Completo
                  </Typography> 
                </Box>
                <Box xs={12}>
                  <TextField onChange={(e) => {setNombre(e.target.value)}} fullWidth name="nombre" placeholder="Nombre completo" variant="outlined"/>
                </Box>
                
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box xs={12}>
                <Typography component="h4">
                  Número de documento
                </Typography> 
              </Box>
              <Box xs={12}>
                <TextField onChange={(e) => {setDocumento(e.target.value)}} fullWidth name="documento" placeholder="Número de documento" variant="outlined"/>
              </Box>
            </Grid>
            
        </Grid>

        <Box py={5}>
          
          <Grid container mt={3}>
              <Grid item xs={4}>
                <Box xs={12}>
                  <Typography component="h4">
                    Fecha de nacimiento
                  </Typography> 
                </Box>
                <Box xs={12}>
                  <TextField onChange={(e) => {setFechaNac(e.target.value)}} fullWidth name="fechaNac" placeholder="yyyy/mm/dd" variant="outlined"/>
                </Box>
              </Grid>

              <Grid item xs={8}>
                <Box pl={10}>
                  <Box xs={12} >
                    <Typography component="h4">
                      Email
                    </Typography> 
                  </Box>
                  <Box xs={12}>
                    <TextField onChange={(e) => {setEmail(e.target.value)}} fullWidth name="email" placeholder="Email" variant="outlined"/>
                  </Box>
                </Box>
              </Grid>
          </Grid>
        </Box>
      </Box>

      <Grid item xs={12} container direction="row" justifyContent="flex-end">
        <Box mx={6} mt={4}>
          <Button href="/crm" className={classes.btnCancelar}>Cancelar</Button>
          <Button onClick = {registrarCliente} className={classes.btnGuardar} href="/crm">Guardar</Button>
        </Box>        
      </Grid>
    </div>
  );  
}

export default NuevoUsuario;
