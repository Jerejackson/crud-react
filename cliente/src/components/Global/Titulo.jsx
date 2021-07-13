import {makeStyles, Button, Grid, Typography, ThemeProvider, createTheme} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1
  },

  letra: {
    color: "#fff"
  },
  btn: {
    borderRadius: 0
  }
}));

const theme = createTheme({
  palette: {
    primary: {
     main: '#1976d2',
    }
  },
});

const Titulo = () => {
  const classes = useStyles()

  return (
    <div className="Titulo">
      <Grid container>
        <Grid className={classes.title}>
          
          <Typography variant="h4" component="h4" className={classes.letra}>
            Clientes
          </Typography>    
        </Grid>

        <Grid>
           <ThemeProvider theme={theme}>
            <Button href="/crm/new_client" variant="contained" color="primary" startIcon={<AddIcon />} className={classes.btn}>
              Nuevo cliente
            </Button>
          </ThemeProvider>
        </Grid>
      </Grid>
      


    </div>
  );  
}

export default Titulo;
