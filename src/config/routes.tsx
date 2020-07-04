import React, { Suspense } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { Layout } from 'antd/lib';
import Header from '@layout/header';
import { PrivateRoute } from '../config/routes.private';
import { history } from '@utils/index';

const Home = React.lazy(() => import('../screens/home/Home'));
const Login = React.lazy(() => import('../screens/login/Login'));

const { Footer, Content } = Layout;

const publicPaths = [
    { exact: true, path: '/login', component: Login }
];

const privatePaths = [
  { exact: true, path: '/', component: Home },
];

const publicRoutes = publicPaths.map(({ path, ...props }) => (
  <Route key={path} path={path} {...props} />
));

const privateRoutes = privatePaths.map(({ path, ...props }) => (
  <PrivateRoute key={path} path={path} {...props} />
));

type Props = {};

const Routes: React.FC<Props> = () => {
  return (
  <Layout className="layout">
    <Router history={history}>
      <Header />
      <Switch>
        <Suspense fallback={<div />}>
          <Content style={{ padding: '0 50px' }}>
            <div>
              { publicRoutes }
              { privateRoutes }
            </div>
          </Content>
        </Suspense>
      </Switch>
    </Router>
    <Footer style={{ textAlign: 'center' }}>©2020 Created by Marcelo Bressan</Footer>
  </Layout>
    
  )
};

export default Routes;