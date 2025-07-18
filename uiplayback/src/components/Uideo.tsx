"use client";
import React, { useRef, useState, useEffect } from "react";

export default function Uideo({
  src,
  title = "🎀 Ui Playback",
}: {
  src: string;
  title?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  // Fix lag: Separate seek state
  const [isSeeking, setIsSeeking] = useState(false);
  const [seekValue, setSeekValue] = useState(0);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const handleSeek = (value: number) => {
    if (videoRef.current) {
      videoRef.current.currentTime = value;
    }
    setCurrentTime(value);
  };

  const handleVolume = (value: number) => {
    if (videoRef.current) videoRef.current.volume = value;
    setVolume(value);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const update = () => {
      setCurrentTime(video.currentTime);
      setDuration(video.duration);
    };

    video.addEventListener("timeupdate", update);
    video.addEventListener("loadedmetadata", update);

    return () => {
      video.removeEventListener("timeupdate", update);
      video.removeEventListener("loadedmetadata", update);
    };
  }, []);

  return (
    <div
      className="rounded-2xl shadow-lg overflow-hidden flex flex-col"
      style={{
        width: "640px",
        height: "500px",
        backgroundColor: "#ffeeea",
        maxWidth: "80%",
        maxHeight: "80%",
      }}
    >
      {/* Header */}
      <div
        className="flex items-center justify-between px-4 py-2 text-white text-lg"
        style={{ backgroundColor: "#f5727c" }}
      >
        {/* Window Buttons */}
        <div className="flex gap-2 items-center">
          {/* Close */}
          <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              width="14"
              height="14"
              fill="none"
              stroke="#f5727c"
              strokeWidth="3"
              strokeLinecap="square"
              strokeLinejoin="miter"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>

          {/* Maximize */}
          <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              width="14"
              height="14"
              fill="none"
              stroke="#f5727c"
              strokeWidth="3"
              strokeLinecap="square"
              strokeLinejoin="miter"
            >
              <rect x="5" y="5" width="14" height="14" rx="0" />
            </svg>
          </div>

          {/* Minimize */}
          <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              width="14"
              height="14"
              fill="none"
              stroke="#f5727c"
              strokeWidth="5"
              strokeLinecap="square"
              strokeLinejoin="miter"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </div>
        </div>

        {/* Title */}
        <div className="flex-1 text-center">{title}</div>
        <div className="w-12" />
      </div>

      {/* Video */}
      <div className="flex-1 bg-black flex items-center justify-center">
        <video
          ref={videoRef}
          src={src}
          className="max-w-full max-h-[360px] object-contain"
          preload="metadata"
        />
      </div>

      {/* Footer Controls */}
      <div
        className="px-4 pt-4 pb-2 text-white text-sm"
        style={{ backgroundColor: "#f5727c" }}
      >
        {/* Seek Bar */}
        <div className="mb-3 w-full">
          <input
            type="range"
            min={0}
            max={duration || 0}
            step={0.1}
            value={isSeeking ? seekValue : currentTime}
            onChange={(e) => {
              setSeekValue(Number(e.target.value));
              setIsSeeking(true);
            }}
            onMouseUp={() => {
              handleSeek(seekValue);
              setIsSeeking(false);
            }}
            onTouchEnd={() => {
              handleSeek(seekValue);
              setIsSeeking(false);
            }}
            className="w-full appearance-none h-1 bg-white rounded-full"
            style={{
              accentColor: "#ffd600", // bright yellow thumb
            }}
          />
          <style jsx>{`
            input[type="range"]::-webkit-slider-thumb {
              background-color: #ffd600;
              border-radius: 9999px;
              width: 12px;
              height: 12px;
              appearance: none;
              cursor: pointer;
            }
            input[type="range"]::-moz-range-thumb {
              background-color: #ffd600;
              border-radius: 9999px;
              width: 12px;
              height: 12px;
              cursor: pointer;
            }
          `}</style>
        </div>

        {/* Controls Row */}
        <div className="flex items-center justify-between">
          <div className="flex-1 flex justify-center gap-6 text-white text-2xl">
            <button onClick={togglePlay}>{isPlaying ? "⏸" : "▶"}</button>
            <button onClick={() => handleSeek(currentTime - 5)}>⏮</button>
            <button onClick={() => handleSeek(0)}>⏹</button>
            <button onClick={() => handleSeek(currentTime + 5)}>⏭</button>
          </div>

          </div>
        </div>
      </div>

  );
}
