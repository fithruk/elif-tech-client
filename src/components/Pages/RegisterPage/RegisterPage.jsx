import { Container, Typography, Link as MuiLink } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import AppForm from "../../Form/Form";

const RegisterPage = () => {
  return (
    <Container
      maxWidth="md"
      sx={{
        paddingTop: "10vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography
        variant="h1"
        fontSize={"3vw"}
        alignSelf={"start"}
        paddingLeft={"3.5vh"}
      >
        Event registration
      </Typography>
      <MuiLink
        component={RouterLink}
        to={`/`}
        sx={{ mt: "auto" }}
        paddingLeft={"3.5vh"}
        alignSelf={"start"}
      >
        Back to all
      </MuiLink>
      <AppForm />;
    </Container>
  );
};

export default RegisterPage;
