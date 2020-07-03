import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Layout } from 'antd/lib';
import LogoIcon from '@icons/LogoIcon';

import './styles.less';

const { Header } = Layout;

const PageHeader = () => {
  return (
    <Header style={{ display: 'inline-grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
      <Link to="/">
        <LogoIcon />
      </Link> 
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} style={{ display: 'inline-flex', justifySelf: 'flex-end', alignItems: 'center' }}>
        <Menu.Item key="1"><Link to="/login">Login</Link></Menu.Item>
        <Menu.Item key="2"><Link to="/logot">Logout</Link></Menu.Item>
      </Menu>
    </Header>
)};

export default PageHeader;
