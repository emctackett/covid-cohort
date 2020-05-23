import React, { useState } from "react";
import { Button, Heading } from "grommet";
import { Search } from "grommet-icons";
import LocaleAPI from "./LocaleAPI";

const Location = () => {
  const [runSearch, setSearch] = useState(false);

  function handleKeyPress(e) {
    if (e.which === 13) {
      setSearch(true);
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
        primary={true}
        label="Search"
        margin="small"
        icon={<Search />}
        onClick={() => setSearch(true)}
      />
      {runSearch === true ? (
        <LocaleAPI query={document.getElementById("search").value} />
      ) : (
        <span />
      )}
    </div>
  );
};

export default Location;
