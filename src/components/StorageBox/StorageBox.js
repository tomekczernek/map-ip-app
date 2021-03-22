import { Fragment } from "react";

import StorageItem from "./StorageItem";

import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import Typography from "@material-ui/core/Typography";

function StorageBox({ arrayOfSearchIPValue }) {
  const useStyles = makeStyles((theme) => ({
    appHistoryBold: {
      fontWeight: "bold",
    },
    appHistoryTitle: {
      padding: "12px 16px 12px 16px",
    },
  }));

  const classes = useStyles();
  return (
    <Fragment>
      <Accordion>
        <div className={classes.appHistoryTitle}>
          <Typography className={classes.appHistoryBold}>
            Search history
          </Typography>
        </div>
      </Accordion>
      {arrayOfSearchIPValue.map((item, index) => (
        <StorageItem
          key={`storageItem-${index}`}
          ip={item.ip}
          latitude={item.latitude}
          longitude={item.longitude}
        ></StorageItem>
      ))}
    </Fragment>
  );
}

export default StorageBox;
