import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import EventItem from "../EventItem/EventItem";

const EventsContainer = ({ displayedEvents }) => {
  return (
    <Box sx={{ flexGrow: 1, paddingTop: "5vh" }}>
      <Grid container spacing={3}>
        {displayedEvents.map((event, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <EventItem event={event} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default EventsContainer;
