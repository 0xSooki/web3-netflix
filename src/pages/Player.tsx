import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./Player.css";
import { Button } from "web3uikit";

const Player = () => {
  const { state: currentlyPlaying } = useLocation();
  return (
    <>
      <div className="playerPage">
        <video autoPlay controls className="videoPlayer">
          <source src={currentlyPlaying} type="video/mp4"></source>
        </video>

        <div className="backHome">
          <Link to="/">
            <Button
              icon="arrowCircleLeft"
              iconLayout="icon-only"
              id="test-button-outline-icon-only"
              size={"large"}
              text="Outline icon only"
              theme="secondary"
              type="button"
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Player;
