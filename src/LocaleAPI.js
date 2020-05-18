import React, { useState, useEffect } from "react";
import axios from "axios";
import { Heading, Paragraph } from "grommet";
import guidelines from "./StateGuideline";

const clientKey =
  "EyIxMVuESlLENffWT3GfNGh5CyjUW04eanXAST44y4BEaxSm5q4hf4frdGJqjWLd";

const LocaleAPI = ({ query }) => {
  const [isLoaded, setLoaded] = useState(false);
  const [locale, setLocale] = useState();

  useEffect((props) => {
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

  return (
    <div>
      {isLoaded === true ? (
        <div id="results-wrapper">
          <Heading size="small" color="#8F1701" margin={{ bottom: "small" }}>
            You are located in {locale.state}.
          </Heading>
          <Paragraph fill={true} size="large" textAlign="center">
            You can find your state guidelines here: .
          </Paragraph>
        </div>
      ) : (
        <span> Loading...</span>
      )}
    </div>
  );
};

export default LocaleAPI;
