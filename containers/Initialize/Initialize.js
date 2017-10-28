import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-native';
import { Spinner, Title, View } from '@shoutem/ui';
import { fetchSent as questionsFetchSent } from '../../actions/questions';
import { resetted as gameResetted } from '../../actions/game';

class Initialize extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    const { gameReset, questionsFetch } = this.props;
    gameReset();
    questionsFetch();
  }

  render() {
    return (
      <View styleName="flexible">
        <Title>INITIALIZE</Title>
        <Spinner size="large" />
      </View>
    );
  }
}

Initialize.propTypes = {
  gameReset: PropTypes.func.isRequired,
  questionsFetch: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  gameReset: () => dispatch(gameResetted()),
  questionsFetch: () => dispatch(questionsFetchSent()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Initialize);
