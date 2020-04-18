import IframeResizer from "iframe-resizer-react";

const ResizedIframe = () => {
  return (
    <div>
      <Heading size="small">Coronavirus: Explained</Heading>
      <IframeResizer
        src="https://www.youtube.com/embed/BtN-goy9VOY"
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
