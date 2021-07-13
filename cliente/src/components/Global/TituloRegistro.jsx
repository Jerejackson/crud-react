import {makeStyles, Typography} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  letra: {
    color: "#fff"
  }
}));

const TituloRegistro = () => {
  const classes = useStyles()

  return (
    <div className="TituloRegistro">
      <Typography variant="h4" component="h4" className={classes.letra}>
        Nuevo Cliente
      </Typography>       
    </div>
  );  
}

export default TituloRegistro;
