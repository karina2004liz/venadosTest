import React, { useEffect, useState } from "react";
import 'antd/dist/antd.css';
import { Table} from 'antd';
import VenadosServices from '../services/venados.service'
import "./stadistics.css"

const Stadistics = () => {

    const [stadistics, setStadistics] = useState([])

    useEffect(()=>{
      VenadosServices.getGames().then((data) => {
        setStadistics(data.results)
      });
    },[])
 
    const columns = [
      {
        title: 'Título',
        dataIndex: 'title',
        key: 'title',
      },
      {
        title: 'Popularidad',
        dataIndex: 'popularity',
        key: 'popularity',
      },
      {
        title: 'Promedio de votos',
        dataIndex: 'vote_average',
        key: 'vote_average',
      },
      {
          title: 'Votos',
          dataIndex: 'vote_count',
          key: 'vote_count',
        }
    ];

    return(
        <div className="screenScroll" >
           <Table pagination={false} columns={columns} dataSource={stadistics} />
        </div>
    )
}

export default Stadistics