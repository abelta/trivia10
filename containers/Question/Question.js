import React from 'react';
import PropTypes from 'prop-types';
import { Title, View } from '@shoutem/ui';

const Question = ({ match }) => (
  <View styleName="flexible">
    <Title>QUESTION</Title>
  </View>
);

Question.propTypes = {
  match: PropTypes.object.isRequired,
};

export default Question;
