import React, { useState, useEffect } from "react";
import axios from "axios";
import { Heading, Paragraph } from "grommet";
import guidelines from "./StateGuideline";

const clientKey =
  "js-U3pNGi8tqCc1UHpbkCCSts7uesec7I4pU1IVTqO4dhxoNkFG8IOHWB0NjykTt5sD";

const LocaleAPI = ({ query }) => {
  const [isLoaded, setLoaded] = useState(false);
  const [locale, setLocale] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        setLoaded(false);
        console.log(query);
        const requestUrl = `https://www.zipcodeapi.com/rest/${clientKey}/info.json/${query}/radians`;
        const res = await axios.get(requestUrl);
        setLocale(res);
        setLoaded(true);
      } catch (err) {
        console.log(err);
      }
    }

    fetchData();
  });
  console.log(locale);

  //const link = guidelines[locale.state];
  const link = "sample";

  return (
    <div>
      {isLoaded === true ? (
        <div id="results-wrapper">
          <Heading size="small" color="#8F1701" margin={{ bottom: "small" }}>
            You are located in {locale.state}.
          </Heading>
          <Paragraph fill={true} size="large" textAlign="center">
            You can find your state guidelines here: {link}.
          </Paragraph>
        </div>
      ) : (
        <span> Loading...</span>
      )}
    </div>
  );
};

export default LocaleAPI;
