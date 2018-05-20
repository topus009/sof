import _ from 'lodash';

const _filter = (data) => {
  data = _.filter(data, (e) => {
    return e.is_answered && e.owner.reputation >= 50;
  });

  return data
}

export default _filter

