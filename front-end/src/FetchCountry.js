import React, { useState } from "react";
import Axios from "axios";

const baseUrl = "https://covidtracking.com/api";

async function countryHttpRequest(props) {
  const [isLoaded, setLoaded] = useState(false);

  function handleLoadChange() {
    setLoaded(true);
  }

  const requestUrl = baseUrl + this.props.search;
  try {
    const results = await Axios.get(requestUrl);
  } catch {
    console.log(err);
  }
}
