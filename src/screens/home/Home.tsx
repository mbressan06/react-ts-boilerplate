import React, { useEffect } from 'react';
import { Card } from 'antd/lib';
import { history } from '@utils/index';
import './Home.less';


type Props = {};

const Home: React.FC<Props> = () => {
  useEffect(()=>{
    if (!localStorage.getItem('currentUser')) { 
      history.push('/login');
  }

  },[])
  return (
      <div className="home">
        <Card
          className="home__card"
          title="HomeCard"
        >
          <div>
              {/* <h1>Hi {currentUser.name}!</h1> */}
              <p>You're logged in with React & JWT!!</p>
              <h3>Users from secure api end point:</h3>
              
          </div>
        </Card>
      </div>
  );
};

export default Home;
