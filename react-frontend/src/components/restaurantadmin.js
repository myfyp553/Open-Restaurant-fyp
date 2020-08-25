import React,{Component} from 'react';
import addwaiter from './addwaiter';
import logo2 from '../assets/images/logo2.png'; 
import 'antd/dist/antd.css';
import viewwaiters from './viewwaiters';
import addstaff from './addstaff';
import viewstaff from './viewstaff';
import accountsandreports from './accountsandreports';
import practice from './practice';
import './superadmin.css';

import { Layout, Menu,Button} from 'antd';
import { MenuOutlined} from '@ant-design/icons';




  import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

  
  const API = 'http://localhost:4000/restaurant-admin/waiter';

class Restaurantadmin extends Component{
    constructor(){
    super()
    
};
render(){
    return(
        <Router>
            <Layout>
    <Header className="header">
      <div className="App-logo" />
     {/*  <img className="App-logo" src={logo2} alt="Logo"/>  */}
     <h3 className="App-name"><span className="open">Open </span><span className="rest">Restaurant</span></h3>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        
     
      </Menu>
    </Header>
    <Layout>
    
      <Sider width={200} className="site-layout-background">
        <Menu 
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <SubMenu key="sub1" icon={<MenuOutlined />} title="Dashboard">
          <SubMenu key="sub2" title="Waiters">
            <Menu.Item key="1" ><Link className="link" to="/addwaiter" >Add Waiter</Link></Menu.Item>
            
            <Menu.Item key="2"><Link className="link" to="/viewwaiters" >View Waiters</Link></Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" title="staff">
            <Menu.Item key="3" ><Link className="link" to="/addstaff" >Add Staff</Link></Menu.Item>
            
            <Menu.Item key="4"><Link className="link" to="/viewstaff" >View Staff</Link></Menu.Item>
            </SubMenu>
            <Menu.Item key="5"><Link className="link" to="/practice" >Accounts and reports</Link></Menu.Item>
        
         
           
    
           
            
          </SubMenu>

         
        </Menu>
          
      
      </Sider>
      <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 800,
          }}
        >
            <Switch>
            <Route path="/addwaiter" component={addwaiter}/>
         
            <Route path="/viewwaiters" component={viewwaiters}/>
            <Route path="/addstaff" component={addstaff}/>
            <Route path="/viewstaff" component={viewstaff}/>
            <Route path="/practice" component={practice}/>

           
 


           
           
 


            </Switch>
        </Content>
        
    </Layout>
    <Footer style={{ textAlign: 'center', color:"black" }}></Footer>
    </Layout>
    
    

        
    

        </Router>
  
        

        
    
        
    );

    

    

}
}
export default Restaurantadmin