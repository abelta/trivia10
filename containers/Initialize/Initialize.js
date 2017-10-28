import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-native';
import { Spinner, View } from '@shoutem/ui';
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
    const { loading } = this.props;
    return (
      <View styleName="flexible" style={{ justifyContent: 'center' }}>
        {
          loading
            ? <Spinner style={{ size: 'large' }} />
            : <Redirect to="/question/0" />
        }
      </View>
    );
  }
}

Initialize.propTypes = {
  gameReset: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  questionsFetch: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  loading: state.network.questions.fetch.loading,
});

const mapDispatchToProps = dispatch => ({
  gameReset: () => dispatch(gameResetted()),
  questionsFetch: () => dispatch(questionsFetchSent()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Initialize);
