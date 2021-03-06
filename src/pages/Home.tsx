import { Link } from "react-router-dom";
import "./Home.css";
import Logo from "../images/Netflix";
import {
  ConnectButton,
  Icon,
  TabList,
  Tab,
  Button,
  Modal,
  useNotification,
} from "web3uikit";
import { movies } from "../helpers/library";
import React from "react";
import { useState } from "react";
import { Movie } from "../types/types";
import { useMoralis } from "react-moralis";
import PlayButton from "../components/PlayButton";
import AddToMyListButton from "../components/AddToMyListButton";

const Home = () => {
  const [visible, setVisible] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<Movie>();
  const { isAuthenticated } = useMoralis();

  const dispatch = useNotification();

  const handleNewNotification = () => {
    dispatch({
      type: "error",
      message: "Please connect your crypto wallet",
      title: "Not Authenticated",
      position: "topL",
    });
  };

  return (
    <>
      <div className="logo">
        <Logo />
      </div>
      <div className="connect">
        <Icon fill="#ffffff" size={24} svg="bell" />
        <ConnectButton />
      </div>
      <div className="topBanner">
        <TabList defaultActiveKey={1} tabStyle="bar">
          <Tab tabKey={1} tabName={"Movies"}>
            <div className="scene">
              <img src={movies[0].Scene} className="sceneImg" alt="" />
              <img src={movies[0].Logo} className="sceneLogo" alt="" />
              <p className="sceneDesc">{movies[0].Description}</p>
              <div className="playButton">
                {isAuthenticated ? (
                  <>
                    <Link to="/player" state={movies[0].Movie}>
                      <PlayButton />
                    </Link>

                    <AddToMyListButton />
                  </>
                ) : (
                  <>
                    <PlayButton click={handleNewNotification} />
                    <AddToMyListButton click={handleNewNotification} />
                  </>
                )}
              </div>
            </div>
            <div className="title">Movies</div>
            <div className="thumbs">
              <>
                {movies &&
                  movies.map((m) => {
                    return (
                      <img
                        src={m.Thumnbnail}
                        className="thumbnail"
                        alt=""
                        onClick={() => {
                          setSelectedMovie(m);
                          setVisible(true);
                        }}
                      />
                    );
                  })}
              </>
            </div>
          </Tab>
          <Tab tabKey={2} tabName={"Series"}></Tab>
          <Tab tabKey={3} tabName={"MyList"}></Tab>
        </TabList>
        {selectedMovie && (
          <div className="modal">
            <Modal
              onCloseButtonPressed={() => setVisible(false)}
              isVisible={visible}
              hasFooter={false}
              width="1000px"
            >
              <div className="modalContent">
                <img src={selectedMovie.Scene} className="modalImg" alt="" />
                <img src={selectedMovie.Logo} className="modalLogo" alt="" />
                <div className="modalPlayButton">
                  {isAuthenticated ? (
                    <>
                      <Link to="/player" state={selectedMovie.Movie}>
                        <PlayButton />
                      </Link>
                      <AddToMyListButton />
                    </>
                  ) : (
                    <>
                      <PlayButton click={handleNewNotification} />
                      <AddToMyListButton click={handleNewNotification} />
                    </>
                  )}
                </div>
                <div className="movieInfo">
                  <div className="description">
                    <div className="details">
                      <span>{selectedMovie.Year}</span>
                      <span>{selectedMovie.Duration}</span>
                    </div>
                    {selectedMovie.Description}
                  </div>
                  <div className="detailedInfo">
                    Genre: <span className="deets">{selectedMovie.Genre}</span>
                    <br />
                    Actors: <span className="deets">{selectedMovie.Actors}</span>
                  </div>
                </div>
              </div>
            </Modal>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
