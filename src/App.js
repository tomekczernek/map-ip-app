import { useEffect, useState } from "react";
import api from "./api";

import Map from "./components/Map";
import Information from "./components/Information";
import StorageBox from "./components/StorageBox";
import Header from "./components/Header";
import MessageBox from "./components/MessageBox";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

function App() {
  const [userIPData, setUserIPData] = useState(null);
  const [searchIPData, setSearchIPData] = useState(null);
  const [searchIPValue, setSearchIPValue] = useState("");
  const [arrayOfSearchIPValue, setArrayOfSearchIPValue] = useState([]);
  const [messageBoxOpen, setMessageBoxOpen] = useState(false);
  const [messageBoxText, setMessageBoxText] = useState("");

  useEffect(() => {
    api.get("check").then((response) => {
      setUserIPData(response.data);
    });
  }, []);

  const handleIPValueChange = (event) => {
    setSearchIPValue(event.target.value);
  };

  const handleSearchIpSubmit = (event) => {
    event.preventDefault();
    if (searchIPValue) {
      api.get(searchIPValue).then((response) => {
        setSearchIPData(response.data);
        if (!response.data.latitude || !response.data.longitude) {
          setMessageBoxText("No results for the entered value");
          setMessageBoxOpen(true);
        }
        setArrayOfSearchIPValue([
          ...arrayOfSearchIPValue,
          {
            ip: searchIPValue,
            latitude: response.data.latitude,
            longitude: response.data.longitude,
          },
        ]);
        setSearchIPValue("");
      });
    } else {
      setMessageBoxText("Enter value");
      setMessageBoxOpen(true);
    }
  };

  const handleMessageBoxClose = () => {
    setMessageBoxOpen(false);
  };

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    appGrid: {
      marginTop: "5rem",
    },
    appPaper: {
      margin: "0.75rem",
    },
    appSearchInput: {
      width: "100%",
    },
    appSearchBtn: {
      width: "100%",
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <Grid container className={classes.appGrid}>
        <Grid container item xs={12} sm={12} md={9}>
          <Grid item xs={12} sm={12} md={6}>
            <Paper elevation={4} className={classes.appPaper}>
              {userIPData && (
                <Map
                  latitude={userIPData.latitude}
                  longitude={userIPData.longitude}
                  city={userIPData.city}
                />
              )}
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Paper elevation={4} className={classes.appPaper}>
              {userIPData && (
                <Information
                  latitude={userIPData.latitude}
                  longitude={userIPData.longitude}
                  city={userIPData.city}
                  continent={userIPData.continent_name}
                  country={userIPData.country_name}
                  ip={userIPData.ip}
                  flag={userIPData.location.country_flag}
                  userLocation={true}
                />
              )}
            </Paper>
          </Grid>
          <Grid item xs={12} sm={9}>
            <Paper elevation={4} className={classes.appPaper}>
              <TextField
                className={classes.appSearchInput}
                label="Enter IP or URL"
                variant="outlined"
                size="small"
                value={searchIPValue}
                onChange={handleIPValueChange}
              />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Paper elevation={4} className={classes.appPaper}>
              <Button
                className={classes.appSearchBtn}
                variant="contained"
                color="primary"
                size="large"
                onClick={handleSearchIpSubmit}
              >
                Search
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Paper elevation={4} className={classes.appPaper}>
              {searchIPData && (
                <Map
                  latitude={searchIPData.latitude}
                  longitude={searchIPData.longitude}
                  city={searchIPData.city}
                />
              )}
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Paper elevation={4} className={classes.appPaper}>
              {searchIPData && (
                <Information
                  latitude={searchIPData.latitude}
                  longitude={searchIPData.longitude}
                  city={searchIPData.city}
                  continent={searchIPData.continent_name}
                  country={searchIPData.country_name}
                  ip={searchIPData.ip}
                  flag={searchIPData.location.country_flag}
                  userLocation={false}
                />
              )}
            </Paper>
          </Grid>
        </Grid>
        <Grid container item xs={12} sm={12} md={3}>
          <Grid item xs={12}>
            <Paper elevation={4} className={classes.appPaper}>
              <StorageBox arrayOfSearchIPValue={arrayOfSearchIPValue} />
            </Paper>
          </Grid>
        </Grid>
      </Grid>

      <MessageBox
        messageBoxOpen={messageBoxOpen}
        message={messageBoxText}
        messageBoxClose={handleMessageBoxClose}
      />
    </div>
  );
}

export default App;
