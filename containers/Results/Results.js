import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Subtitle, Text, Title, View } from '@shoutem/ui';
import { LinkButton } from '../../components';
import * as constants from '../../constants';

const Results = ({ score }) => (
  <View styleName="flexible">
    <Title>You scored</Title>
    <Title>{`${score}/${constants.GAME_ROUNDS_TOTAL}`}</Title>
    <Subtitle>Want to try again?</Subtitle>
    <LinkButton to="/initialize"><Text>PLAY AGAIN</Text></LinkButton>
  </View>
);

Results.propTypes = {
  score: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  score: state.game.score,
});

export default connect(mapStateToProps)(Results);
