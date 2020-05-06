import React from "react";
import IframeResizer from "iframe-resizer-react";
import { Heading } from "grommet";

const ResizedIframe = (props) => {
  return (
    <div>
      <Heading size="small" textAlign="center">Coronavirus: Explained</Heading>
      <IframeResizer
        src={props.src}
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        style={{
          height: "500px",
          minHeight: "100%",
          width: "700px",
          minWidth: "100%",
        }}
      ></IframeResizer>
    </div>
  );
};

export default ResizedIframe;
