import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Layout } from 'antd/lib';
import PageHeader from '@layout/page-header';

const Home = React.lazy(() => import('../screens/home/Home'));
const Login = React.lazy(() => import('../screens/login/Login'));

const { Footer, Content } = Layout;

const publicPaths = [
    { exact: true, path: '/', component: Home },
    { exact: true, path: '/login', component: Login }
];

const publicRoutes = publicPaths.map(({ path, ...props }) => (
  <Route key={path} path={path} {...props} />
));

export default () => (
  <Layout className="layout">
    <Router>
      <PageHeader />
      <Switch>
        <Suspense fallback={<div />}>
          <Content style={{ padding: '0 50px' }}>
            <div>
              { publicRoutes }
            </div>
          </Content>
        </Suspense>
      </Switch>
    </Router>
    <Footer style={{ textAlign: 'center' }}>©2020 Created by Marcelo Bressan</Footer>
  </Layout>
);
