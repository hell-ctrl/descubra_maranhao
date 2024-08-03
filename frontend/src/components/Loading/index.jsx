import loadingIcon from "../../assets/loading.svg";
import "./index.css";

function Loading() {
  return (
    <div className="loading">
      <img src={loadingIcon} alt="loading icon" />
    </div>
  )
}

export default Loading;