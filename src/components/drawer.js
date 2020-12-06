import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import React, { useState } from "react";
import LogoVenados from "./../assets/Venadosfc.png";
import "antd/dist/antd.css";
import { Layout, Menu, Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import "../App.css";
const { Header } = Layout;

const HeaderDrawer = () => {
  const [isToggled, setToggled] = useState(false);
  const toggleTrueFalse = () => setToggled(!isToggled);
  const onClose = () => {
    setToggled(false);
  };

  return (
    <div>
      <Drawer
        placement="left"
        onClose={onClose}
        closable={false}
        visible={isToggled}
        className="hideOnDesktop"
        bodyStyle={{ backgroundColor: "white", padding: "0" }}
      >
        <Menu
          onClick={() => {
            toggleTrueFalse();
          }}
          theme="light"
          mode="inline"
          defaultSelectedKeys={["1"]}
        >
          <center>
            <img src={LogoVenados} style={{ width: 200 }}></img>
          </center>

          <Menu.Item key="1">
            <Link to={"/"} className="nav-link">
              Home
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to={"/stadistics"} className="nav-link">
              Stadistics
            </Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to={"/gamers"} className="nav-link">
              Gamers
            </Link>
          </Menu.Item>
        </Menu>
      </Drawer>

      <Header
        mode="inline"
        style={{ textAlign: "left", padding:0, backgroundColor: "white" }}
      >
        <div style={{ width: "100%" }} className="hideOnDesktop">
          <Button
            style={{ height: 60, width: 90, border: "none" }}
            onClick={() => {
              toggleTrueFalse();
            }}
          >
            <MenuOutlined />
          </Button>
        </div>

        <Menu
          className="hideOnMobile"
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
        >
          <img src={LogoVenados} style={{ width: 50 }}></img>
          <Menu.Item key="1">
            <Link to={"/"} className="nav-link">
              Home
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to={"/stadistics"} className="nav-link">
              Stadistics
            </Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to={"/gamers"} className="nav-link">
              Gamers
            </Link>
          </Menu.Item>
        </Menu>
      </Header>
    </div>
  );
};

export default HeaderDrawer;
