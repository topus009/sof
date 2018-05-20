import React from 'react';
import Item from './Item';
import Header from './Header';
import Loader from './Loader';
import {observer} from 'mobx-react';
import {lifecycle} from 'recompose';
import _ from 'lodash';

function StackOverFlow({store: {sorted, data, toggleSort}}) {
  let list;
  if (data.length) {
    list = _.map(data, (e,i) => {
      return (
        <Item
          key={'k_' + i}
          title={e.title}
          logo={e.owner.profile_image}
          link={e.link}
          date={e.creation_date}
        />
      )
    });
  } else list = <div>Список не загрузился. =(</div>;
  if (data.length) {
    return (
      <div className='wrapper'>
        <Header toggleSort={toggleSort} order={sorted}/>
        {list}
      </div>
    );
  } else return <Loader />
}

const WithPosts = lifecycle({
  componentDidMount() {
    const {preloadData, sortData} = this.props.store;
    setTimeout(() => {
      preloadData();
      sortData();
    }, 1000);
  }
});

export default WithPosts(observer(StackOverFlow));