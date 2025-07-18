"use client";
import Uideo from "../components/Uideo";
import { useState } from "react";

export default function Home() {
  const clips = ["/videos/clip1.mp4", "/videos/clip2.mp4", "/videos/clip3.mp4"];
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % clips.length); // loop around
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + clips.length) % clips.length); // loop back
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#fff7f0]">
<Uideo
  src="/videos/clip1.mp4"
  title="Shigure Clip 💖"
/>
    </div>
  );
}
