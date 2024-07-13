import Navbar from "./Navbar";

const PageHoc = (WrappedComponent) => {
  return function (props) {
    return (
      <div>
        <Navbar />
        <main>
          <WrappedComponent {...props} />
        </main>
      </div>
    );
  };
};
export default PageHoc;
