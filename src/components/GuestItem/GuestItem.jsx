import { Card, CardContent, Typography } from "@mui/material";

const GuestITem = ({ guest }) => {
  return (
    <Card sx={{ height: "100%" }}>
      <CardContent
        sx={{ display: "flex", flexDirection: "column", height: "100%" }}
      >
        <Typography variant="h5" sx={{ flexShrink: 0 }}>
          {guest.fullName}
        </Typography>
        <Typography
          variant="body2"
          sx={{ textOverflow: "ellipsis", overflow: "hidden", flexGrow: 1 }}
        >
          {guest.email}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default GuestITem;
