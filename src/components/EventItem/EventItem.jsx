import {
  Card,
  CardContent,
  Typography,
  Box,
  Link as MuiLink,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const EventItem = ({ event }) => {
  return (
    <Card sx={{ height: "100%" }}>
      <CardContent
        sx={{ display: "flex", flexDirection: "column", height: "100%" }}
      >
        <Typography variant="h5" sx={{ flexShrink: 0 }}>
          {event.title}
        </Typography>
        <Typography
          variant="body2"
          sx={{ textOverflow: "ellipsis", overflow: "hidden", flexGrow: 1 }}
        >
          {event.description}
        </Typography>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          paddingTop={"2vh"}
        >
          <MuiLink
            component={RouterLink}
            to={`/register/${event._id}`}
            sx={{ mt: "auto" }}
          >
            Register
          </MuiLink>
          <MuiLink
            component={RouterLink}
            to={`/event/${event._id}`}
            sx={{ mt: "auto" }}
          >
            Wiew
          </MuiLink>
        </Box>
      </CardContent>
    </Card>
  );
};
export default EventItem;
