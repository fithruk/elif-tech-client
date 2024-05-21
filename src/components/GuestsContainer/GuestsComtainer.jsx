import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import GuestITem from "../GuestItem/GuestItem";

const GuestsContainer = ({ guests }) => {
  return (
    <Box sx={{ flexGrow: 1, paddingTop: "5vh" }}>
      <Grid container spacing={3}>
        {guests.map((guest, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <GuestITem guest={guest} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default GuestsContainer;
