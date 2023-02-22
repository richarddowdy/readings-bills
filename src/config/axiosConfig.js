import axios from "axios";

const instance = axios.create({
  baseURL: "https://snapmeter.com/api/public/",
});

instance.defaults.headers.common["Authorization"] = "4f981c43-bf28-404c-ba22-461b5979b359";

export default instance;
