import React, { useState, useEffect } from "react";
import { Button, Heading, Box, Grommet, TextInput } from "grommet";
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
  const [runSearch, setSearch] = useState(false);
  const [isLoaded, setLoaded] = useState(false);
  const [hasError, setErrors] = useState(false);
  const [locale, setLocale] = useState({});

  async function fetchData() {
    const zipContainer = document.getElementById("search");
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

  function handleKeyPress(e) {
    if (e.which === 13) {
      fetchData();
    }
  }

  return (
    <div align="center">
      <Heading size="medium" color="#8F1701" margin={{ top: "small" }}>
        View Your State Guidelines
      </Heading>
      <input
        id="search"
        type="text"
        placeholder=" Enter your zipcode.."
        onChange={() => setSearch(false)}
        onKeyPress={handleKeyPress}
        style={{ width: "800px", height: "40px" }}
      />
      <Button
        size="small"
        color="#8F1701"
        type="button"
        primary="true"
        label="Search"
        margin="small"
        icon={<Search />}
        onClick={() => setSearch(true)}
      />
      {isLoaded === true ? <span /> : <span />}
    </div>
  );
};

export default Location;
