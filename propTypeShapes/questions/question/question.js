import PropTypes from 'prop-types';

const questionShape = PropTypes.shape({
  category: PropTypes.string,
  difficulty: PropTypes.string,
  text: PropTypes.string,
  correctAnswer: PropTypes.bool,
});

export default questionShape;
