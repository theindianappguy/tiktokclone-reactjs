import React, { useState } from "react";
import "./VideoSidebar.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import MessageIcon from "@material-ui/icons/Message";
import ShareIcon from "@material-ui/icons/Share";

export default function VideoSidebar({ likes, comments, shares }) {
  const [liked, setLiked] = useState(false);
  const [likedCount, setLikedCount] = useState(likes ? likes : 0);

  function toggleLike() {
    // update liked count
    if (liked) {
      setLikedCount(likedCount - 1);
    } else {
      setLikedCount(likedCount + 1);
    }
    setLiked(!liked);
  }

  return (
    <div className="videoSidebar">
      {liked ? (
        <div onClick={toggleLike} className="videoSidebar__button">
          <FavoriteIcon style={{ color: "#EE1D52" }} />
          <p>{likedCount}</p>
        </div>
      ) : (
        <div onClick={toggleLike} className="videoSidebar__button">
          <FavoriteBorderIcon />
          <p>{likedCount}</p>
        </div>
      )}
      <div className="videoSidebar__button">
        <MessageIcon />
        <p>{comments}</p>
      </div>
      <div className="videoSidebar__button">
        <ShareIcon />
        <p>{shares}</p>
      </div>
    </div>
  );
}
