import Axios from "axios";

const baseUrl = "http://covid-19-data-api.herokuapp.com";

async function countryHttpRequest() {
  const requestUrl = baseUrl + "/country/germany";
  try {
    const results = await Axios.get(requestUrl);
    const cases = results.cum_conf;
    const deaths = results.cum_death;
  } catch {
    console.log(err);
  }
}
