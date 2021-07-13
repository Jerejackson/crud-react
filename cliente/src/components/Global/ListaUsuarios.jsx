import React,{ useState,useEffect } from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';
import { InputAdornment, TextField, Typography, IconButton, Box, Grid, makeStyles, List, ListItem, ListItemAvatar, Avatar, ListItemText } from '@material-ui/core';

import SearchIcon from '@material-ui/icons/Search';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const UseStyles = makeStyles(theme => ({
  fondoBtnEliminar: {
    width: "30px",
    height: "30px",
    backgroundColor: "#f44336",
    color: "#fff",
    borderRadius: 0,
    padding: 0, 
    marginLeft: "15px"
    
  },
  fondoBtnEditar: {
    width: "30px",
    height: "30px",
    backgroundColor: "#1976d2",
    color: "#fff",
    borderRadius: 0,
    padding: 0
  },
  scroll:{
    maxHeight: 300,
    overflow: 'auto'
  }
}));

  
const ListaUsuarios = () => {  

  const [USERS, setUSERS] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:3001/crm').then((response) => {
        setUSERS(response.data);
    })
  }, [])

  const EliminarUsuario = (id) =>{
    Axios.delete('http://localhost:3001/crm/delete/'+id);
    window.location="http://localhost:3000/crm";
  };

  const cambiarEditar = (id) =>{
  };

const classes = UseStyles();

//filtro

  const [name, setName] = useState('');
  const [foundUsers, setFoundUsers] = useState(USERS);

  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== '') {
      const results = USERS.filter((user) => {
        return user.nombre.toLowerCase().startsWith(keyword.toLowerCase());
      });
      setFoundUsers(results);
    } else {
      setFoundUsers(USERS);
    }

    setName(keyword);
  };



  return (
    <div className="ListaUsuarios">
      <Box mx={7}>
        <TextField type="search"
        value={name}
        onChange={filter}
        onFocus={filter}
        className="input" fullWidth id="inputBusqueda" placeholder="Buscar..." variant="outlined" InputProps={
          { startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }
        }/>
      </Box>
      <Box className={classes.scroll}>
        {foundUsers && foundUsers.length > 0 ? (
          foundUsers.map((val) => {
            return ( 
              <List>
                <Box mx={7} borderBottom={1} borderColor="grey.500">
                  <ListItem>
                    <Grid container>
                      <Grid item xs={9}>
                        <Grid container>
                          <Grid item xs={1} >
                            <ListItemAvatar>
                              <Avatar>
                                <SearchIcon />
                              </Avatar>
                            </ListItemAvatar>
                          </Grid>
                          <Grid item xs={11}>
                            <ListItemText primary={val.nombre} secondary={val.email} />                  
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs={3}>
                        <Grid item xs={12} container direction="row" justifyContent="flex-end">
                          <Typography component="div">
                            <Box fontSize="11px">
                              {val.fechaNac} | {val.fechaCreacion}
                            </Box>
                          </Typography>
                        </Grid>
                        <Grid item xs={12} container direction="row" justifyContent="flex-end">
                          <Box mt={1}>
                            <Link to ={"/crm/edit_client/"} onClick = {() => {cambiarEditar(val.identificacion)}}>
                            <IconButton id={val.identificacion} aria-label="upload picture" component="span" className={classes.fondoBtnEditar}>
                              <EditIcon />
                            </IconButton>
                            </Link>
                            <IconButton onClick = {() => {EliminarUsuario(val.identificacion)}} aria-label="upload picture" component="span" className={classes.fondoBtnEliminar}>
                              <DeleteIcon />
                            </IconButton>
                          </Box>
                        </Grid>
                      </Grid>
                    </Grid>
                  </ListItem>
                </Box>  
              </List>
            )
          }) 
        ) : (
          <h1>No results found!</h1>
          )
        } 
      </Box>         
    </div>
  );  
}

export default ListaUsuarios;
