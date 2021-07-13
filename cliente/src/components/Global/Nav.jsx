import {AppBar, Toolbar, makeStyles, IconButton, Button, Avatar} from '@material-ui/core';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import icono from '../../img/icono.png';

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2),
    color: theme.palette.common.white
  },
  title: {
    flexGrow: 1
  },

}))

const Nav = () => {
  const classes = useStyles()

  return (
    <div className="Nav">
      <AppBar position="relative" color="transparent" elevation={0}>
        <Toolbar>
          <img src={icono} className={classes.menuButton} alt="icono" />
          <Button className={classes.menuButton}> Pólizas </Button>
          <Button href="/crm" className={classes.menuButton}> CRM </Button>
          <Button className={classes.menuButton}> Archivos </Button>
          <Button className={classes.menuButton}> Cartera </Button>

          <div className={classes.title}></div>
          
          <IconButton edge="start"  aria-label="menu">
            <NotificationsNoneIcon style={{ color: "#fff" }} />
          </IconButton>
          <Avatar alt="Jeremi Sanchez" src={icono} />
        </Toolbar>
      </AppBar>
    </div>
  );  
}

export default Nav;
