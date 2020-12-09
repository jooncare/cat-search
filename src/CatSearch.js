import './CatSearch.css';

import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const handleCatClick = name => alert(`That's ${name}!`);

const CatSearch = () => {
  return (
    <div className="cats-container">
      <div className="query-input-container">
        <input type="text" className="query-input" />
        <div className="spinner">
          <Loader type="TailSpin" height={28} width={28} color="#aaa" />
        </div>
      </div>
      <div className="results-list">
        {/* TODO: display cats here */}
      </div>
    </div>
  );
}

export default CatSearch;
