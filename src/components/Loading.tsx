import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Loading.css";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
export default function Loading() {
  return (
    <main id="loading">
      <FontAwesomeIcon icon={faCircleNotch} className="buffer" />
    </main>
  );
}
