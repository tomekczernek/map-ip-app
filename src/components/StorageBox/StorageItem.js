import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

function StorageItem({ ip, latitude, longitude }) {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
      >
        <Typography>{ip}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Latitude: <span>{latitude}</span>
          <br />
          Longitude: <span>{longitude}</span>
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}

export default StorageItem;
