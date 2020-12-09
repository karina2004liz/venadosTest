import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import { Avatar } from "antd";
import VenadosServices from "../services/venados.service";
import { Modal } from "antd";
import "./gamers.css";

const Gamers = () => {
  const [gamers, setGamers] = useState([]);

  useEffect(()=>{
    VenadosServices.getGames().then((data) => {
      setGamers(data.results)
    });
  },[])

  const openInfoGamer = (data) => {
    return Modal.info({
      title: false,
      icon: false,
      content: (
        <div style={{ height: "450px" }}>
          <div className="modalUp">
            <center>
              <h2 style={{ color: "white" }}>FICHA TÉCNICA</h2>
              <Avatar size={100} src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} />
              <p>{data.title}</p>
              <p>{data.release_date}</p>
            </center>
          </div>
          <center>
            <h4>POPULARIDAD</h4>
            <p><b>{data.popularity}</b></p>
            <h4>PROMEDIO DE VOTOS</h4>
            <p><b>{data.vote_average}</b></p>
            <h4>VOTOS</h4>
            <p><b>{data.vote_count}</b></p>
          </center>
        </div>
      ),
      onOk() {},
    });
  };


  return (
    <center >
      <h1>Jugadores</h1>
      <div  style={{ width:"90%", display:"grid", alignItems:"center", gridTemplateColumns:"repeat(auto-fit, minmax(110px, 1fr))"}}>
        { gamers.map((element) => {
          return (
              <div
                style={{margin:"5%", height:150}}
                onClick={() => {
                openInfoGamer(element);
                }} 
              >     
                <Avatar
                  size={{
                    xs: 80,
                    sm: 80,
                    md: 80,
                    lg: 90,
                    xl: 100,
                    xxl: 100,
                  }}
                  src={`https://image.tmdb.org/t/p/w500${element.poster_path}`}
                />               
                <p>{element.title}</p>
              </div>
            );
        })}
      </div>
    </center>
  );
};

export default Gamers;
