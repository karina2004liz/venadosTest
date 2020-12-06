import React, { useState, useEffect } from "react";
import VenadosServices from "./../services/venados.service";
import LogoVenados from "./../assets/Venadosfc.png";
import "antd/dist/antd.css";
import { Tabs } from "antd";
import "./home.css";
const { TabPane } = Tabs;

const Home = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    VenadosServices.getGames().then((data) => {
      console.log(data);
    });
    VenadosServices.getPlayers().then((data) => {
      console.log(data);
    });
  }, []);

  return (
    <center>
      <img alt="" src={LogoVenados} className="logoVenados"></img>
      <Tabs
        size={"large"}
        centered
        defaultActiveKey="1"
        tabPosition={"top"}
        style={{ width: "100%" }}
      >
        <TabPane tab="COPA MX" key={1}>
          COsa 1
        </TabPane>
        <TabPane tab="ASCENSO MX" key={2}>
          Cosa 2
        </TabPane>
      </Tabs>
    </center>
  );
};

export default Home;
