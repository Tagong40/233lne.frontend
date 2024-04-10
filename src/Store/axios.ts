import axios_ from "axios";

const API_URL = "https://api.glofacts.com/api/v1/";

const axios = axios_.create({
  baseURL: API_URL,
  headers: {
    Authorization:
      "Bearer 131|mVxEiGCqLZw0ZCcbnBel6KrYUTHjDUivMjuhhJwk03d0abb3",
    "x-api-key": "rEXmtrBvz8hEWVxlwgMJwAnAJmqbv6qvfGD0hoqEl3c8ooE8qmETTx6EUAdD",
    "Content-Type": "application/json",
  },
});

export default axios;
