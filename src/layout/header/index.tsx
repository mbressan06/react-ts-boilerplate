import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader, Button } from 'antd/lib';
import LogoIcon from '@icons/LogoIcon';

import './styles.less';

const Header = () => {
  return (
    <PageHeader 
      title={
        <Link to="/">
          <LogoIcon />
        </Link> 
      }
      style={{ 
        display: 'inline-grid', 
        gridTemplateColumns: 'repeat(2, 1fr)',
        backgroundColor: '#e62e6b',
        marginBottom: '10px'
      }}
      extra={[
        <Button key="1" href="/login">Login</Button>
      ]}
    />
)};

export default Header;
