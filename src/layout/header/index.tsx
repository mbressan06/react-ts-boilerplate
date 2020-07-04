import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from 'antd/lib';
import LogoIcon from '@icons/LogoIcon';
import { authenticationService } from '@services/index';
import { history } from '@utils/index';

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
        display: 'inline-grid', 
        gridTemplateColumns: 'repeat(2, 1fr)',
        backgroundColor: '#e62e6b',
        marginBottom: '10px'
      }}
      extra={[
        <Link to="/login">Login</Link>,
        <Link to="/" onClick={logout}>Logout</Link>
      ]}
    />
)};

export default Header;
