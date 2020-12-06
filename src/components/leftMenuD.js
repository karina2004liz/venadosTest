import 'antd/dist/antd.css';
import './principalContainer.css'
import { Layout, Menu, Drawer, Button } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined, MenuOutlined } from '@ant-design/icons';
import React, { useState } from "react";
import { Tabs } from 'antd';

const { TabPane } = Tabs;

const { Header, Content, Footer, Sider, Navbar } = Layout;


const LeftMenuDesktop = () => {


    return(                    
        <Tabs  defaultActiveKey="1" tabPosition={"left"} style={{ height: "100%" }}>
        <TabPane tab="Tab 1" key="1">
          Content of Tab 1
        </TabPane>
        <TabPane tab="Tab 2" key="2">
          Content of Tab 2
        </TabPane>
        <TabPane tab="Tab 3" key="3">
          Content of Tab 3
        </TabPane>
      </Tabs>
    )

}

export default LeftMenuDesktop