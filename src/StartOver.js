import React from "react";
import { Box, Button} from "grommet";

const refreshPage = (e) => {
  window.location.reload(false);
}

const StartOver = () => (
    <Box  className="start-over">
      <Button
        className="start-over-btn"
        label="Start Over"
        alignSelf="end"
        size="small"
        onClick={refreshPage}>
      </Button>
    </Box>
);

export default StartOver;
