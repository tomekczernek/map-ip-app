import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

function Information({
  latitude,
  longitude,
  city,
  continent,
  country,
  ip,
  flag,
  userLocation,
}) {
  const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
    },
    appInfoBold: {
      fontWeight: "bold",
    },
    appInfoIp: {
      padding: "12px 16px 12px 16px",
    },
    appInfoFlag: {
      width: 25,
      border: "solid 1px #ccc"
    },
    appInfoSmall: {
      fontWeight: "bold",
      "@media (max-width: 360px)": {
        fontSize: "0.8rem"
      },
    },
  }));

  const classes = useStyles();

  return (
    <div>
      {latitude && longitude ? (
        <div>
          <Accordion>
            <div className={classes.appInfoIp}>
              <Typography>
                {userLocation ? (
                  <span>Your IP address:</span>
                ) : (
                  <span>IP address:</span>
                )}
                {" "}
                <span className={classes.appInfoSmall}>{ip}</span>
                {" "}
                <img
                  className={classes.appInfoFlag}
                  src={flag}
                  alt={`Flag of ${country}`}
                />
              </Typography>
            </div>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
            >
              <Typography>Details</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Latitude:{" "}
                <span className={classes.appInfoBold}>{latitude}</span>
                <br />
                Longitude:{" "}
                <span className={classes.appInfoBold}>{longitude}</span>
                <br />
                Location:{" "}
                <span
                  className={classes.appInfoBold}
                >{`${continent} / ${country} / ${city}`}</span>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      ) : null}
    </div>
  );
}

export default Information;
