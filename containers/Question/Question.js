import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-native';
import { Button, Heading, Row, Text, Title, View } from '@shoutem/ui';
import he from 'he';
import { right as answeredRight, wrong as answeredWrong } from '../../actions/answers';
import * as constants from '../../constants';
import { questionByRound as selectQuestionByRound } from '../../selectors/questions';
import { question as questionShape } from '../../propTypeShapes/questions';

class Question extends PureComponent {
  constructor(props) {
    super(props);
    this.answer = this.answer.bind(this);
  }

  answer(choice) {
    const { answerRight, answerWrong, question: { correctAnswer } } = this.props;
    choice === correctAnswer
      ? answerRight()
      : answerWrong();
  }

  render() {
    const { question: { category, text }, round } = this.props;
    if (round === constants.GAME_ROUNDS_TOTAL) return <Redirect to="/results" />;
    return (
      <View styleName="flexible">
        <View styleName="flexible">
          <Heading>{category}</Heading>
          <Text styleName="small">{round + 1} of {constants.GAME_ROUNDS_TOTAL}</Text>
        </View>
        <View styleName="flexible">
          <Text>{he.unescape(text)}</Text>
        </View>
        <View styleName="flexible">
          <Row>
            <Button onPress={() => this.answer(true)}><Title>TRUE</Title></Button>
            <Button onPress={() => this.answer(false)}><Title>FALSE</Title></Button>
          </Row>
        </View>
      </View>
    );
  }
}

Question.propTypes = {
  answerRight: PropTypes.func.isRequired,
  answerWrong: PropTypes.func.isRequired,
  question: questionShape.isRequired,
  round: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  question: selectQuestionByRound(state),
  round: state.game.round,
});

const mapDispatchToProps = dispatch => ({
  answerRight: () => dispatch(answeredRight()),
  answerWrong: () => dispatch(answeredWrong()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Question);
