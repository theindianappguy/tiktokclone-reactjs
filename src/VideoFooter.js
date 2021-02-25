import React from "react";
import "./VideoFooter.css";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import Ticker from "react-ticker";

export default function VideoFooter({ channel, description, song }) {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3 style={{ fontSize: "16px", marginBottom: "4px" }}>@{channel}</h3>
        <p style={{ marginBottom: "12px", fontSize: "14px" }}>{description}</p>
        <div className="videoFooter__ticker">
          <MusicNoteIcon className="musicIcon" />
          <Ticker mode="smooth">
            {({ index }) => (
              <>
                <p style={{ fontSize: "14px" }}>{song}</p>
              </>
            )}
          </Ticker>
        </div>
      </div>

      <img
        style={{ marginTop: "24px" }}
        className="videoFooter__record"
        src="https://static.thenounproject.com/png/934821-200.png"
        alt=""
      />
    </div>
  );
}
