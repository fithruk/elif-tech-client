import axios from "axios";

class ApiService {
  async getAllEvents() {
    try {
      const { data, status } = await axios.get(process.env.REACT_APP_API_URL);
      if (status === 200) {
        return data;
      } else {
        throw new Error(`Unexpected response status: ${status}`);
      }
    } catch (error) {
      console.error("Error fetching events:", error);
      throw error;
    }
  }

  async getEventsGuests(id) {
    try {
      const { data, status } = await axios.get(
        `${process.env.REACT_APP_API_URL}/:${id}`,
        {
          params: {
            id,
          },
        }
      );
      if (status === 200) {
        return data;
      } else {
        throw new Error(`Unexpected response status: ${status}`);
      }
    } catch (error) {
      console.error("Error fetching guests:", error);
      throw error;
    }
  }

  async registerNewGuest(userUnswers, id) {
    try {
      const { data, status } = await axios.post(
        `${process.env.REACT_APP_API_URL}/:${id}`,
        {
          ...userUnswers,
        }
      );
      if (status === 200) {
        return data;
      } else {
        throw new Error(`Unexpected response status: ${status}`);
      }
    } catch (error) {
      console.error("Error fetching events:", error);
      throw error;
    }
  }
}
const apiSercise = new ApiService();
export { apiSercise };
