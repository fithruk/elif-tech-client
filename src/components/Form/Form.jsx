import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  TextField,
  Button,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
  Container,
  Box,
} from "@mui/material";

import { apiSercise } from "../../apiService/apiServise";

const AppForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    dateOfBirth: "",
    whereDidFound: "",
  });
  const { id } = useParams();
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = await apiSercise.registerNewGuest(formData, id);

    if (Array.isArray(data)) {
      data.forEach(({ msg }) => {
        alert(msg);
      });
    } else {
      alert(data.msg);
      setFormData({
        fullName: "",
        email: "",
        dateOfBirth: "",
        heardAbout: "",
      });
      navigate("/");
    }
  };

  return (
    <Container>
      <Box sx={{ mt: 4 }}>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Full Name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Date of Birth"
            name="dateOfBirth"
            type="date"
            value={formData.dateOfBirth}
            onChange={handleChange}
            margin="normal"
            required
            InputLabelProps={{
              shrink: true,
            }}
          />
          <FormControl component="fieldset" fullWidth margin="normal" required>
            <FormLabel component="legend">
              Where did you hear about this event?
            </FormLabel>
            <RadioGroup
              name="whereDidFound"
              value={formData.whereDidFound}
              onChange={handleChange}
            >
              <FormControlLabel
                value="website"
                control={<Radio />}
                label="Website"
              />
              <FormControlLabel
                value="friend"
                control={<Radio />}
                label="Friend"
              />
              <FormControlLabel
                value="socialMedia"
                control={<Radio />}
                label="Social Media"
              />
            </RadioGroup>
          </FormControl>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default AppForm;
