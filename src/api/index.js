import axios from "../config/axiosConfig";

export const fetchReading = async () => {
  try {
    const params = {
      start: "2022-08-01",
      end: "2023-02-01",
    };
    const response = await axios.get("meters/2080448990211/readings", { params });
    return response.data;
  } catch (err) {
    console.warn(err);
    return err;
  }
};

export const fetchBills = async () => {
  try {
    const params = {
      start: "2022-01-01",
      end: "2023-02-01",
    };
    const response = await axios.get("services/2080448990210/bills", { params });
    console.log(response);
    return response.data;
  } catch (err) {
    console.warn(err);
    return err;
  }
};
