import React from 'react';
import preloadData from '../helpers/preloadData';
import Item from './Item';
import Header from './Header';
import Loader from './Loader';
import _sort from '../helpers/_sort';
import _filter from '../helpers/_filter';

class StackOverFlow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      sorted: 'desc',
    }
  };

  // method in Header Component
  handle_sort = () => {
    const {
      data,
      sorted
    } = this.state;
    /*
      @data: array
      @sorted: string
    */
    const sorted_data = _sort(data,sorted);

    this.setState({
      data: sorted_data,
      sorted: sorted === 'desc' ? 'asc' : 'desc',
    });
  }

  componentDidMount() {
    const {
      sorted,
    } = this.state;
    /*
      request to StackOverFrow Api
      @r: array[{},...]
    */
    preloadData().then(r => {
      let data = r.items.map((e,index) => {
        return ({
          id: index,
          link: e.link,
          question_id: e.question_id,
          creation_date: e.creation_date,          
          is_answered: e.is_answered,
          title: e.title,
          owner: {
            profile_image: e.owner.profile_image,
            reputation: e.owner.reputation,
          },
        });
      });

      // filter request
      data = _filter(data);
      // sort request
      const sorted_data = _sort(data,sorted);
      /* 
        as the request pending time is low,
        I increase time before data will be saved
        to state
      */

      setTimeout(() => {
        this.setState({
          data: sorted_data,
          sorted: 'asc',
        });
      }, 1500);
    });
  }

  render() {
    const {
      data,
      sorted,
    } = this.state;

    let list;

    if (data.length) {
      list = data.map((e,i) => {
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
    
    // case rendering (data or Loader)
    if (data.length) {
      return (
        <div className='wrapper'>
          <Header
            handle_sort={this.handle_sort}
            order={sorted}
          />
          {list}
        </div>
      )
    } else return <Loader />
  }
}

export default StackOverFlow;


