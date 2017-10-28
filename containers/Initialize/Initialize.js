import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-native';
import { Spinner, View } from '@shoutem/ui';
import { resetted as gameResetted } from '../../actions/game';
import { fetchSent as questionsFetchSent } from '../../actions/questions';
import { questionShape } from '../../propTypeShapes/questions';

class Initialize extends PureComponent {
  componentWillMount() {
    const { gameReset, questionsFetch } = this.props;
    gameReset();
    questionsFetch();
  }

  render() {
    const { questions, round } = this.props;
    if (round === 0 && questions.length > 0) return <Redirect to="/question" />;
    return (
      <View styleName="flexible" style={{ justifyContent: 'center' }}>
        <Spinner style={{ size: 'large' }} />
      </View>
    );
  }
}

Initialize.propTypes = {
  gameReset: PropTypes.func.isRequired,
  questions: PropTypes.arrayOf(PropTypes.shape(questionShape)).isRequired,
  questionsFetch: PropTypes.func.isRequired,
  round: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  questions: state.questions,
  round: state.game.round,
});

const mapDispatchToProps = dispatch => ({
  gameReset: () => dispatch(gameResetted()),
  questionsFetch: () => dispatch(questionsFetchSent()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Initialize);
