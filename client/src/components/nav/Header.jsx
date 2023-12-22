import React, { useState } from "react";
import { Menu } from "antd";
import {
  LoginOutlined,
  HomeOutlined,
  SettingOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
// import './Header.css'
import {Link} from 'react-router-dom';



const { SubMenu, Item } = Menu;

const Header = () => {
  const [current, setCurrent] = useState("home");

  const handleClick = (e) => {
    // console.log(e.key);
    setCurrent(e.key);
  };

  return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
      <Item key="home" icon={<HomeOutlined />}>
      <Link to='/'>   Home</Link>
      
      </Item>
      <SubMenu icon={<SettingOutlined />} title="Username">
      <Item key="setting:1">Option 1</Item>
      <Item key="setting:2">Option 2</Item>
    </SubMenu>

    <Item key="login" icon={<LoginOutlined />} className="float-right btn-primary rounded-pill"  style={
      {marginLeft: "auto",
      marginRight:"4px",
      color:"black"}
    }>
    <Link to='/login'>   Login</Link>
    </Item>
      <Item key="register" icon={<UserAddOutlined />} className="btn-danger"  style={{color:"black"}}>
      <Link to='/register'>   Register</Link>
      </Item>

     

   
    </Menu>
  );
};

export default Header;
