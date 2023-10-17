import loader from "./loader.gif";
import react from "react";

function Loader(props) {
  return (
    <img
      src={loader}
      alt="loading..."
      style={{
        width: props.width,
        height: props.height
      }}
    />
  );
}

export default Loader;
