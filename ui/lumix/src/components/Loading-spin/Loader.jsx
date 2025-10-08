import loader from "./loader.gif";

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
