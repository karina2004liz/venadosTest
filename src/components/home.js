import React, { useState, useEffect } from "react";
import VenadosServices from "./../services/venados.service";
import LogoVenados from "./../assets/Venadosfc.png";
import "antd/dist/antd.css";
import { Tabs } from "antd";
import "./home.css";
import { PullToRefresh } from "react-js-pull-to-refresh";
import {
  PullDownContent,
  ReleaseContent,
  RefreshContent,
} from "react-js-pull-to-refresh";

const { TabPane } = Tabs;

const Home = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(false);

  const onRefreshData = () => {
    return VenadosServices.getGames()
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        Promise.reject();
      });
  };

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
          <PullToRefresh
            pullDownContent={<PullDownContent />}
            refreshContent={<RefreshContent />}
            pullDownThreshold={100}
            onRefresh={onRefreshData}
            triggerHeight={50}
            backgroundColor="white"
            startInvisible={true}
          >
            <div style={{ height: "40vh", textAlign: "center" }}>
              <div>PullToRefresh</div>
            </div>
          </PullToRefresh>
        </TabPane>
        <TabPane tab="ASCENSO MX" key={2}>
          Cosa 2
        </TabPane>
      </Tabs>
    </center>
  );
};

export default Home;
