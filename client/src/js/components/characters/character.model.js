import PropTypes from 'prop-types';

const client = require('client');

export const HOUSES = client.com.objectpartners.plummer.kotlin.domain.House.values().map(item => item.name);

export default PropTypes.shape({
  id: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
  house: PropTypes.oneOf(HOUSES),
  importance: PropTypes.number,
  type: PropTypes.oneOf(client.com.objectpartners.plummer.kotlin.domain.GoodOrBad.values().map(item => item.name)),
  episodeId: PropTypes.number
});
