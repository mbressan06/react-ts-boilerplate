import React, { useEffect, useState } from 'react';
import { Card } from 'antd/lib';

import './Home.less';
import { User } from 'src/schema/User';

import { userService, authenticationService } from '@services/index';

type Props = {};

const Home: React.FC<Props> = () => {
  const [currentUser, setCurrentUser] = useState();
  const [users, setUsers] = useState();

  useEffect(()=>{
    setCurrentUser(authenticationService.currentUserValue);
    setUsers(undefined);

    console.log(authenticationService.currentUserValue)

  },[users])
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
              {users &&
                  <ul>
                      {/* {users.map((user: User) => <li key={user.id}>{user.name} {user.email}</li>)}  */}
                  </ul>
              }
          </div>
        </Card>
      </div>
  );
};

export default Home;
