import "../styles/spinner.css";

const Spinner = () => {
  return (
    <div className="relative min-h-screen flex flex-col  text-white pt-20">
      <div className="relative sm:max-w-sm w-full">
        <div className="relative w-full px-10 py-4 shadow-md">
          <span className="loader"></span>
        </div>
      </div>
    </div>
  );
};

export default Spinner;
