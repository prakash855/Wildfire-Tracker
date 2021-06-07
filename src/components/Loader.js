import Spinner from "./spinner.gif";

const Loader = () => {
  return (
    <div className="loader">
      <img src={Spinner} alt="" />
      <h1>Fetching Location...</h1>
      <p>Please Wait</p>
    </div>
  );
};

export default Loader;
