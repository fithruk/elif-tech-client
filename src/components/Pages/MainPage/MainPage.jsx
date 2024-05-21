import { Container, Typography, Box, Button } from "@mui/material";
import { useEffect, useState } from "react";

import { apiSercise } from "../../../apiService/apiServise";
import AppPagination from "../../Pagination/Pagination";
import EventsContainer from "../../EventsContainer/EventsContainer";
import Animations from "../../Skeleton/Skeleton";
import ErrorBoundary from "../../ErrorBondary/ErrorBondary";

const MainPage = () => {
  const [events, setEvents] = useState([]);
  const [page, setPage] = useState(1);
  let elementsPerPage = 12;
  let displayedEvents = events.slice(
    (page - 1) * elementsPerPage,
    page * elementsPerPage
  );

  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    (async () => {
      try {
        const fetchedEvents = await apiSercise.getAllEvents();
        setEvents(fetchedEvents);
      } catch (error) {
        console.log(error.message);
        alert(error.message);
      }
    })();
  }, []);

  return (
    <ErrorBoundary>
      {" "}
      <Container
        maxWidth="md"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          height: "100vh",
          alignItems: "center",
        }}
      >
        <Typography variant="h1" fontSize={"5vw"} alignSelf={"start"}>
          Events
        </Typography>
        {events.length !== 0 ? (
          <EventsContainer displayedEvents={displayedEvents} />
        ) : (
          <Animations />
        )}

        <AppPagination
          page={page}
          handleChange={handleChange}
          size={Math.ceil(events.length / elementsPerPage)}
        />
      </Container>
    </ErrorBoundary>
  );
};

export default MainPage;
