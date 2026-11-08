import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faExpand, faCompress } from "@fortawesome/free-solid-svg-icons";
import type { Props } from "../../App";
import "./Home.css";

export default function Home({ data }: Props) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const videoSrc = `${import.meta.env.BASE_URL}polish-cow.mp4`;

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handleClose = () => {
    setIsPlaying(false);
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      overlayRef.current?.requestFullscreen?.().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  useEffect(() => {
    if (!isPlaying) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };

    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("fullscreenchange", handleFullscreenChange);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, [isPlaying]);

  return (
    <section id="home">
      <img
        src={data.userData?.avatar_url ?? ""}
        alt="PFP"
        className="action"
        style={{ cursor: "pointer" }}
        onClick={handlePlay}
      />
      <h1>{data.userData?.login.toUpperCase()}</h1>
      <h3>{data.siteData?.role}</h3>

      {isPlaying &&
        createPortal(
          <div ref={overlayRef} className="cow-overlay">
            <div className="cow-controls">
              <button
                type="button"
                className="action cow-btn"
                onClick={toggleFullscreen}
                title={isFullscreen ? "Exit Fullscreen" : "Toggle Fullscreen"}
                aria-label={isFullscreen ? "Exit Fullscreen" : "Toggle Fullscreen"}
              >
                <FontAwesomeIcon icon={isFullscreen ? faCompress : faExpand} />
              </button>
              <button
                type="button"
                className="action cow-btn"
                onClick={handleClose}
                title="Close (Esc)"
                aria-label="Close video"
              >
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>
            <video
              ref={videoRef}
              className="cow-video"
              src={videoSrc}
              autoPlay
              controls
              playsInline
              loop
            />
          </div>,
          document.body
        )}
    </section>
  );
}
