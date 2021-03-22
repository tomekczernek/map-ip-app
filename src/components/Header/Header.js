import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import NotListedLocationIcon from "@material-ui/icons/NotListedLocation";

function Header() {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    appBar: {
      alignItems: "center",
      backgroundColor: "#3f51b5",
    },
    appBarIcon: {
      marginRight: "1rem",
    },
    appBarTitle: {
      flexGrow: 1,
    },
  }));

  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <NotListedLocationIcon
          fontSize="large"
          className={classes.appBarIcon}
        />
        <Typography variant="h5" className={classes.appBarTitle}>
          map-ip-app
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
