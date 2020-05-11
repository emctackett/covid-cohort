import React, { useState, useEffect } from "react";
import { Heading, Box, Grommet, TextInput } from "grommet";
import { Search } from "grommet-icons";
import { Paragraph } from "grommet";
import guidelines from "./StateGuideline";

const clientKey =
  "EyIxMVuESlLENffWT3GfNGh5CyjUW04eanXAST44y4BEaxSm5q4hf4frdGJqjWLd";

const IconTextInput = () => {
  return (
    <TextInput id="zip-entry" icon={<Search />} placeholder="search ..." />
  );
};

const Location = () => {
  const [isLoaded, setLoaded] = useState(false);
  const [hasError, setErrors] = useState(false);
  const [locale, setLocale] = useState({});

  async function fetchData() {
    const zipContainer = document.getElementById("zip-entry");
    const zipcode = zipContainer.value.substring(0, 5);
    const requestUrl = `https://www.zipcodeapi.com/rest/${clientKey}/info.json/${zipcode}/radians`;

    const res = await fetch(requestUrl);
    res
      .json()
      .then((res) => {
        setLocale(res);
        const state = locale.state;
        const stateElement = document.getElementById("state-guide-display");
        stateElement.textContent = `Your zipcode indicates you are located in ${state}.`;
        const guideElement = document.getElementById("guide");
        const link = guidelines[state];
        guideElement.textContent = `View your guidelines here: ${link}`;
      })
      .catch((err) => setErrors(err));
  }

  const handleKeyPress = (e) => {
    if (e.which === 13) {
      this.fetchData();
    }
  };

  return (
    <div align="center">
      <Heading size="medium" color="#8F1701" margin={{ top: "small" }}>
        View your state guidelines:
      </Heading>
      <input
        type="text"
        placeholder="Enter zipcode.."
        style={{ height: "40px", width: "500px" }}
        onKeyPress={handleKeyPress}
      ></input>
      <Paragraph
        color="#8F1701"
        fill={true}
        margin={{ left: "xlarge", right: "xlarge" }}
        size="large"
        textAlign="center"
      >
        <span id="state-guide-display"></span>

        <span id="guide">{}</span>
      </Paragraph>
    </div>
  );
};

export default Location;
