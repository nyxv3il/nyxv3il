import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { Props } from "../../App";
import { faGithub, faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faShield } from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";

export default function Footer({ data }: Props) {
  return (
    <footer>
      <div className="socials">
        <div
          className="socialTag action"
          onClick={() => {
            open(data.userData?.html_url);
          }}
        >
          <FontAwesomeIcon icon={faGithub} /> GitHub
        </div>
        <div
          className="socialTag action"
          onClick={() => {
            open("https://tryhackme.com/p/nyxv3il");
          }}
        >
          <FontAwesomeIcon icon={faShield} /> TryHackMe
        </div>
        <div
          className="socialTag action"
          onClick={() => {
            if (data.siteData?.discord) {
              navigator.clipboard.writeText(data.siteData.discord);
              alert("Discord username copied to clipboard");
            } else alert("Something went wrong fetching discord username");
          }}
        >
          <FontAwesomeIcon icon={faDiscord} />
          Discord
        </div>
      </div>
      <hr />
      <p>2026 &copy; {data.userData?.login.toUpperCase()}</p>
    </footer>
  );
}
