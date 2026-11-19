import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { Props } from "../../App";
import { faGithub, faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faShield } from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";

function TryHackMeBadge() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const doc = iframe.contentDocument || iframe.contentWindow?.document;
    if (!doc) return;

    doc.open();
    doc.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <base target="_blank" />
          <style>
            body {
              margin: 0;
              padding: 0;
              display: flex;
              justify-content: center;
              align-items: center;
              background: transparent;
              overflow: hidden;
            }
          </style>
        </head>
        <body>
          <script src="https://tryhackme.com/badge/t/e2466585161ab10e294f4919758ef53c9995a7bdb4d06e8f5b33e9c6e1a60534c0b6442ab2020760ebbbd8a97caf6636?theme=dark"></script>
        </body>
      </html>
    `);
    doc.close();
  }, []);

  return (
    <iframe ref={iframeRef} title="TryHackMe Badge" className="thmBadge" />
  );
}

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
      <TryHackMeBadge />
      <hr />
      <p>2026 &copy; {data.userData?.login.toUpperCase()}</p>
    </footer>
  );
}
