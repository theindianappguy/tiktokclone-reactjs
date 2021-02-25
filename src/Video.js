import React, { useRef, useState, useEffect } from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";

export default function Video({
  url,
  channel,
  description,
  song,
  likes,
  messages,
  shares,
}) {
  const [play, setplay] = useState(false);
  const videoRef = useRef(null);

  const onVideoPress = () => {
    if (play) {
      videoRef.current.pause();
      setplay(false);
    } else {
      videoRef.current.play();
      setplay(true);
    }
  };

  return (
    <div className="video">
      <video
        ref={videoRef}
        onClick={onVideoPress}
        className="video__player"
        src={url}
      />
      {/* Video Footer */}
      <VideoFooter channel={channel} description={description} song={song} />
      {/* Video Sidebar */}

      <VideoSidebar likes={likes} messages={messages} shares={shares} />
    </div>
  );
}
