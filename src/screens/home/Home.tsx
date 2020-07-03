import React, { useEffect, useState } from 'react';
import { Card } from 'antd/lib';
import ListItem from '@components/data_entry/ListItem';
import './Home.less';

type Props = {};

const Home: React.FC<Props> = () => {
  const [fetching, setFetching] = useState(true);

  const list = [
      {id: 1, name: 'list1'},
      {id: 2, name: 'list2'},
      {id: 3, name: 'list3'},
      {id: 4, name: 'list4'}
  ]

  useEffect(() => {
    (async () => {
      setFetching(true);

      try {
        await list;
      } catch (error) {
        // console.log(error)
      }

      setFetching(false);
    })();
  }, [list]);

  return (
    <>
      {/* <Header /> */}
      <div className="home">
        <Card
          className="home__card"
          title="HomeCard"
          extra={
            <a className="home__link" href="/#" target="_blank" rel="noopener noreferrer">
              {/* <LogoIcon fill="#3f51b5" /> {t('githubLink')} */}
            </a>
          }
        >
          {fetching ? (
            <p>loading</p>
          ) : (
            list.map((item: IItem) => <ListItem key={item.id} item={item.name} />)
          )}
        </Card>
      </div>
    </>
  );
};

export default Home;
