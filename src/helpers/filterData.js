import _ from 'lodash';

export default function filterData(data) {
  return _.filter(data, e => e.is_answered && e.owner.reputation >= 0)
}

