import {makeStyles, Typography} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  letra: {
    color: "#fff"
  }
}));

const TituloEditar = () => {
  const classes = useStyles()

  return (
    <div className="TituloEditar">
      <Typography variant="h4" component="h4" className={classes.letra}>
        Editar Cliente
      </Typography>       
    </div>
  );  
}

export default TituloEditar;
