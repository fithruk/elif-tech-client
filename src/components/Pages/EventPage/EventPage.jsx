import { Container, Typography, Link as MuiLink } from "@mui/material";
import { useState, useEffect } from "react";
import { Link as RouterLink, useParams } from "react-router-dom";

import { apiSercise } from "../../../apiService/apiServise";
import GuestsContainer from "../../GuestsContainer/GuestsComtainer";

const EventPage = () => {
  const [guests, setGuests] = useState([]);
  const [title, setTitle] = useState("...loading");
  const { id } = useParams();

  useEffect(() => {
    try {
      (async () => {
        const fetchedGuests = await apiSercise.getEventsGuests(id);
        setGuests(fetchedGuests.guests);
        setTitle(fetchedGuests.title);
      })();
    } catch (error) {
      console.log(error.message);
      alert(error.message);
    }
  }, []);

  return (
    <Container maxWidth="md" sx={{ padding: "5vw" }}>
      <Typography variant="h1" fontSize={"2vw"}>
        {title}
      </Typography>
      <MuiLink component={RouterLink} to={`/`} sx={{ mt: "auto" }}>
        Back to all
      </MuiLink>

      {guests.length === 0 ? (
        <Typography variant="h3" fontSize={"1vw"} paddingTop={"5vh"}>
          No one has registered yet
        </Typography>
      ) : (
        <GuestsContainer guests={guests} />
      )}
    </Container>
  );
};

export default EventPage;
