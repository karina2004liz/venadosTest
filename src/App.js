import './App.css';
import { Switch, Route } from "react-router-dom";
import Container from './components/home'
import Stadistics from './components/stadistics'
import Gamers from './components/gamers'
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import React from "react";
import HeaderDrawer from './components/drawer';
const { Content, Footer } = Layout;

const App = ()=> {


  return (
    <div className="App">
        <Layout className="layout" style={{ minHeight: "100vh"  }}  >
          
          <HeaderDrawer/>
        
        <Content style={{ padding: "0 0", backgroundColor:"white" }}>
          <div className="site-layout-content">
            <Switch >
              <Route exact path="/" component={Container} />
              <Route exact path="/stadistics" component={Stadistics} />
              <Route exact path="/gamers" component={Gamers} />
            </Switch>
           
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>WebApp Venados FC</Footer>
      </Layout>
      
    </div>
  );
}

export default App;
