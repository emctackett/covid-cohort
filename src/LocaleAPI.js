import React, { useState, useEffect } from "react";
import axios from "axios";
import { Heading, Paragraph } from "grommet";
import guidelines from "./StateGuideline";

const LocaleAPI = ({ query }) => {
  const [isLoaded, setLoaded] = useState(false);
  const [locale, setLocale] = useState();
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState();

  function renderConditional() {
    if (isError === true) {
      return <span>An error was encountered... Please try again!</span>;
    } else {
      return <span>Loading...</span>;
    }
  }

  useEffect(() => {
    async function fetchData() {
      try {
        setLoaded(false);
        console.log(query);
        const requestUrl = `https://api.zippopotam.us/us/${query}`;
        const res = await axios.get(requestUrl);
        console.log(res.data.places[0].state);
        setLocale(res.data.places[0].state);
        setLoaded(true);
      } catch (err) {
        setIsError(true);
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
        renderConditional()
      )}
    </div>
  );
};

export default LocaleAPI;
