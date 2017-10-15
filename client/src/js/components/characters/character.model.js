import PropTypes from 'prop-types';

export default PropTypes.shape({
  id: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
  house: PropTypes.oneOf(['ARRYN', 'BARATHEON', 'BOLTON', 'FREY', 'GREYJOY', 'LANNISTER', 'MARTELL', 'STARK', 'TARGARYEN', 'TULLY', 'TYRELL']),
  importance: PropTypes.number,
  type: PropTypes.oneOf(['GOOD', 'BAD']),
  episodeId: PropTypes.number
});
