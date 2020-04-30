import React from "react";
import IframeResizer from "iframe-resizer-react";
import { Heading } from "grommet";

const ResizedIframe = (props) => {
  return (
    <div>
      <Heading size="small">Coronavirus: Explained</Heading>
      <IframeResizer
        src={props.src}
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        style={{
          height: "250px",
          minHeight: "100%",
          width: "1px",
          minWidth: "100%",
        }}
      ></IframeResizer>
    </div>
  );
};

export default ResizedIframe;
