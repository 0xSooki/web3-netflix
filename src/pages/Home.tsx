import { Link } from "react-router-dom";
import "./Home.css";
import Logo from "../images/Netflix";
import { ConnectButton, Icon, TabList, Tab, Button } from "web3uikit";
import { movies } from "../helpers/library";
import React from "react";

const Home = () => {
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
                <Button
                  id="test-button-primary"
                  onClick={function noRefCheck() {}}
                  text="Primary Button"
                  theme="secondary"
                  type="button"
                />
                <Button
                  id="test-button-primary"
                  onClick={function noRefCheck() {}}
                  text="Primary Button"
                  theme="translucent"
                  type="button"
                />
              </div>
            </div>
          </Tab>
          <Tab tabKey={2} tabName={"Series"}></Tab>
          <Tab tabKey={3} tabName={"MyList"}></Tab>
        </TabList>
      </div>
    </>
  );
};

export default Home;
