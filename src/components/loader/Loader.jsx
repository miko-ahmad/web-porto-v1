import './loader.css'

const Loader = ({ isLoading }) => {
  return (
    <div id="loading" className={isLoading ? "show" : "hide"}>
      <div className="loader">
        <span>&lt;</span>
        <span>/&gt;</span>
      </div>
    </div>
  );
};

export default Loader;
    
