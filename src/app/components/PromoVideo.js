"use client";

import React, { useRef, useState, useEffect } from "react";

import { BiSolidCameraMovie } from "react-icons/bi";
import { RiMovie2Fill } from "react-icons/ri";

const PromoVideo = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (video.paused || video.ended) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (video.muted) {
      video.muted = false;
      setIsMuted(false);
    } else {
      video.muted = true;
      setIsMuted(true);
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video.muted) {
      setIsMuted(true);
    }
    if (!video.paused) {
      setIsPlaying(true);
    }
  }, []);

  return (
    <>
      <div
        style={{
          backgroundColor: "#040615",
          padding: "30px",
          position: "relative",
        }}
      >
        <div
          style={{
            color: "white",
            fontSize: "30px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "50px",
          }}
        >
          Promo Video
        </div>

        <div className="video-background" style={{ marginTop: "20px" }}>
          <div className="video-container" id="videoSection">
            <video
              ref={videoRef}
              id="myVideo"
              controls
              loop
              muted={isMuted}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            >
              <source
                src="https://player.vimeo.com/external/194837908.sd.mp4?s=c350076905b78c67f74d7ee39fdb4fef01d12420&profile_id=164"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            <div className="control-buttons">
              <button className="control-button" onClick={togglePlayPause}>
                <span className="control-icon" id="playPauseIcon">
                  {isPlaying ? "❚❚" : "►"}
                </span>
              </button>
              <button className="control-button" onClick={toggleMute}>
                <span className="control-icon" id="muteUnmuteIcon">
                  {isMuted ? "🔇" : "🔊"}
                </span>
              </button>
            </div>
          </div>
        </div>

        <div
          className="filter"
          style={{
            position: "absolute",
            top: "50%",
            right: "10%",
            color: "blue",
            fontSize: "100px",
          }}
        >
          <BiSolidCameraMovie />
        </div>

        <div
          className="filter1"
          style={{
            position: "absolute",
            top: "30%",
            left: "10%",
            color: "blue",
            fontSize: "50px",
          }}
        >
          <RiMovie2Fill />
        </div>
      </div>
    </>
  );
};

export default PromoVideo;
