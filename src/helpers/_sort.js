import _ from 'lodash';

const _sort = (data, sorted) => {
  const order = sorted === 'asc' ? 'desc' : 'asc';
  data = _.orderBy(data, 'creation_date', order);

  return data
}

export default _sort
