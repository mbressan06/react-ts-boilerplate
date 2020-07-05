import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from 'antd/lib';
import { authenticationService } from '@services/index';
import { history } from '@utils/index';
import LogoIcon from '@icons/LogoIcon';

import './styles.less';

const logout = () => {
  authenticationService.logout();
  history.push('/login');
}

const Header = () => {
  return (
    <PageHeader 
      title={
        <Link to="/">
          <LogoIcon />
        </Link> 
      }
      style={{ 
        display: 'flex', 
        marginBottom: '10px'
      }}
      extra={[
        <Link to="/login">Login</Link>,
        <Link to="/" onClick={logout}>Logout</Link>
      ]}
    />
)};

export default Header;
