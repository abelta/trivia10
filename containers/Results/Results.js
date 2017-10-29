import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Heading, Title, View } from '@shoutem/ui';
import { LinkButton } from '../../components';
import * as constants from '../../constants';

const Results = ({ score }) => (
  <View styleName="flexible">
    <View styleName="flexible">
      <Heading>You scored</Heading>
      <Heading>{`${score}/${constants.GAME_ROUNDS_TOTAL}`}</Heading>
    </View>
    <View styleName="flexible">
      <Title>Want to try again?</Title>
    </View>
    <View styleName="flexible">
      <LinkButton to="/initialize"><Title>PLAY AGAIN</Title></LinkButton>
    </View>
  </View>
);

Results.propTypes = {
  score: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  score: state.game.score,
});

export default connect(mapStateToProps)(Results);
