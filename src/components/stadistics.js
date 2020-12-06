import React, { useEffect, useState } from "react";
import 'antd/dist/antd.css';
import { Table, Tag, Space } from 'antd';
import VenadosService from '../services/venados.service'


const Stadistics = () => {

    const [stadistics, setStadistics] = useState([])

    useEffect(()=>{
        VenadosService.getStadistics().then((data)=>{
            console.log(data)
        })
    })


    
const columns = [
    {
      title: 'Tabla General',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'JJ',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'DG',
      dataIndex: 'address',
      key: 'address',
    },
    {
        title: 'PTS',
        dataIndex: 'address',
        key: 'address',
      }
  ];

  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 6,
      
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 6,
      
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 6,
    },
  ];


    return(
        <div>
           <Table pagination={false} columns={columns} dataSource={data} />
        </div>
    
    )
}

export default Stadistics