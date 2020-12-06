import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import { Avatar } from "antd";
import VenadosService from "../services/venados.service";
import { AntDesignOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import "./gamers.css";

const Gamers = () => {
  const [gamers, setGamers] = useState([]);

  useEffect(() => {
    VenadosService.getPlayers().then((data) => {
      console.log(data);
    });
  }, []);

  const openInfoGamer = (data) => {
    return Modal.info({
      title: false,
      icon: false,
      content: (
        <div style={{ height: "450px" }}>
          <div className="modalUp">
            <center>
              <h2 style={{ color: "white" }}>FICHA TÉCNICA</h2>
              <Avatar size={100} icon={<AntDesignOutlined />} />
              <p>{data.lastName}</p>
            </center>
          </div>
          <center>
            <h3>FECHA DE NACIMIENTO</h3>
            <h3>LUGAR DE NACIMIENTO</h3>
            <h3>PESO</h3>
            <h3>ALTURA</h3>
            <h3>EQUIPO ANTERIOSR</h3>
          </center>
        </div>
      ),
      onOk() {},
    });
  };

  const employees = [
    { firstName: "John", lastName: "Doe" },
    { firstName: "Anna", lastName: "Smith" },
    { firstName: "Peter", lastName: "Jones" },
  ];

  return (
    <center>
      <h1>Jugadores</h1>
      {employees.map((element) => {
        return (
          <div
            onClick={() => {
              openInfoGamer(element);
              console.log(element);
            }}
            style={{ width: "33%", float: "left" }}
          >
            <Avatar
              size={{
                xs: 70,
                sm: 80,
                md: 100,
                lg: 120,
                xl: 160,
                xxl: 200,
              }}
              icon={<AntDesignOutlined />}
            />
            <p>{element.firstName}</p>
          </div>
        );
      })}
    </center>
  );
};

export default Gamers;
