import React, { useState, useEffect } from "react";
import axios from "axios";
import { Heading, Paragraph } from "grommet";
import guidelines from "./StateGuideline";

const LocaleAPI = ({ query }) => {
  const [isLoaded, setLoaded] = useState(false);
  const [locale, setLocale] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        setLoaded(false);
        console.log(query);
        const requestUrl = `http://api.zippopotam.us/us/${query}`;
        const res = await axios.get(requestUrl);
        console.log(res.data.places[0].state);
        setLocale(res.data.places[0].state);
        setLoaded(true);
      } catch (err) {
        console.log(err);
      }
    }

    fetchData();
  }, [query]);

  const link = guidelines[locale];

  return (
    <div>
      {isLoaded === true ? (
        <div id="results-wrapper">
          <Heading size="small" color="#8F1701" margin={{ bottom: "small" }}>
            You are located in {locale}.
          </Heading>
          <Paragraph fill={true} size="large" textAlign="center">
            You can find your state guidelines <a href={link}>here.</a>
          </Paragraph>
        </div>
      ) : (
        <span> Loading...</span>
      )}
    </div>
  );
};

export default LocaleAPI;
