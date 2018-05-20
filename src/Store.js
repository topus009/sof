import _ from 'lodash';
import { decorate, observable, action } from 'mobx';
import preloadData from './helpers/preloadData';
import filterData from './helpers/filterData';

class Store {
    sorted = 'desc';
    data = [];
    preloadData = async () => {
      const {items} = await preloadData();
        const data = _.map(items, (item, index) => {
          const {link, question_id, creation_date, is_answered, title, owner} = item;
          const {profile_image, reputation} = owner;
          return ({
            id: index,
            link,
            question_id,
            creation_date,          
            is_answered,
            title,
            owner: {
              profile_image,
              reputation,
            },
          });
        });
      this.data = _.orderBy(filterData(data), 'creation_date', this.sorted);
    }
    toggleSort = () => {
      this.sorted = this.sorted === 'asc' ? 'desc' : 'asc',
      this.sortData();
    }
    sortData = () => {
      this.data = _.orderBy(this.data, 'creation_date', this.sorted);
    }
}

decorate(
  Store, {
    sorted: observable,
    data: observable,
    toggleSort: action,
    preloadData: action,
    sortData: action
  }
)

export default new Store();
