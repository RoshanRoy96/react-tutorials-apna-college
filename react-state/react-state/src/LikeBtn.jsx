import { useState } from "react";

function LikeButton() {
  let [isLiked, setIsLiked] = useState(false);
  let [clicks, setClicks] = useState(0);
  let toggleLike = () => {
    setIsLiked(!isLiked);
    setClicks(clicks+1);
  };

  let styles = {color: "red"}
  return (
    <div>
        <p>Click = {clicks}</p>
      <p onClick={toggleLike}>
        {isLiked ? (
          <i className="fa-solid fa-heart" style = {styles}></i>
        ) : (
          <i className="fa-regular fa-heart"></i>
        )}
      </p>
    </div>
  );
}

export default LikeButton;
