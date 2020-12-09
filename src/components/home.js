import React, { useState, useEffect } from "react";
import VenadosServices from "./../services/venados.service";
import LogoVenados from "./../assets/Venadosfc.png";
import "antd/dist/antd.css";
import { Tabs } from "antd";
import "./home.css";
import { PullToRefresh } from "react-js-pull-to-refresh";
import { PullDownContent, RefreshContent } from "react-js-pull-to-refresh";
import { CalendarOutlined } from "@ant-design/icons";
const { TabPane } = Tabs;

const Home = () => {

  const [games, setGames] = useState([]);

  const gapi = window.gapi;
  const CLIENT_ID = window.env.CLIENT_ID;
  const API_KEY = window.env.API_KEY;
  const DISCOVERY_DOCS = [window.env.DISCOVERY_DOCS];
  const SCOPES = window.env.SCOPES;

  useEffect(() => {
    VenadosServices.getGames().then((data) => {
      console.log(data.results);
      setGames(data.results);
    });
  }, []);

  const handleClick = (info) => {
    const { overview, title } = info;

    gapi.load("client:auth2", () => {
      console.log("loaded client");

      gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES,
      });

      gapi.client.load("calendar", "v3", () => console.log("ready"));

      gapi.auth2
        .getAuthInstance()
        .signIn()
        .then(() => {
          const event = {
            summary: `I wanna see the movie ${title}`,
            location: "800 Howard St., San Francisco, CA 94103",
            description: overview,
            start: {
              dateTime: "2020-12-25T09:00:00-07:00",
              timeZone: "America/Los_Angeles",
            },
            end: {
              dateTime: "2020-12-25T17:00:00-07:00",
              timeZone: "America/Los_Angeles",
            },
            recurrence: ["RRULE:FREQ=DAILY;COUNT=2"],
            attendees: [
              { email: "lpage@example.com" },
              { email: "sbrin@example.com" },
            ],
            reminders: {
              useDefault: false,
              overrides: [
                { method: "email", minutes: 24 * 60 },
                { method: "popup", minutes: 10 },
              ],
            },
          };

          const request = gapi.client.calendar.events.insert({
            calendarId: "primary",
            resource: event,
          });

          request.execute((event) => {
            window.open(event.htmlLink);
          });
        });
    });
  };

  const onRefreshData = () => {
    return VenadosServices.getGames()
      .then((data) => {
        console.log(data.results);
        setGames(data.results);
      })
      .catch((error) => console.log(error));
  };

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
            triggerHeight={100}
            backgroundColor="white"
            startInvisible={true}
          >
            <div className="pullRefresh">
              <div className="gridContent">
                {games !== undefined &&
                  games.map((data) => {
                    return (
                      <div className="individualInfo" key={data.id}>
                        <h5>Title: {data.title}</h5>
                        <img
                          alt={data.title}
                          style={{ width: "150px" }}
                          src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                        ></img>
                        <p>
                          <CalendarOutlined
                            value="Add"
                            onClick={() => {
                              handleClick(data);
                            }}
                            style={{ 
                            fontSize: "60px",
                            color: " #01910d"}}
                          />
                        </p>
                        <p>
                          <b>Add to calendar</b>
                        </p>
                      </div>
                    );
                  })}
              </div>
            </div>
          </PullToRefresh>
        </TabPane>
        <TabPane tab="ASCENSO MX" key={2}>
          <PullToRefresh
            pullDownContent={<PullDownContent />}
            refreshContent={<RefreshContent />}
            pullDownThreshold={100}
            onRefresh={onRefreshData}
            triggerHeight={100}
            backgroundColor="white"
            startInvisible={true}
          >
            <div className="pullRefresh">
              <div className="gridContent">
                {games !== undefined &&
                  games
                    .filter((ele) => ele.vote_average > 7)
                    .map((data) => {
                      return (
                        <div className="individualInfo" key={data.id}>
                          <h5>Title: {data.title}</h5>
                          <img
                            alt={data.title}
                            style={{ width: "150px" }}
                            src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                          ></img>
                          <p>
                            <CalendarOutlined
                              value="Add"
                              onClick={() => {
                                handleClick(data);
                              }}
                              style={{ 
                                fontSize: "60px", 
                                color: " #01910d"}}
                            />
                          </p>
                          <p>
                            <b>Add to calendar</b>
                          </p>
                        </div>
                      );
                    })}
              </div>
            </div>
          </PullToRefresh>
        </TabPane>
      </Tabs>
    </center>
  );
};

export default Home;
