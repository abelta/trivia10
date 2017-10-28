import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-native';
import { Spinner } from '@shoutem/ui';
import { fetchSent as questionsFetchSent } from '../actions/questions';

class Initialize extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    const { questionsFetch } = this.props;
    questionsFetch();
  }

  render() {
    return <Spinner size="large" />;
  }
}

Initialize.propTypes = {
  questionsFetch: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  questionsFetch: () => dispatch(questionsFetchSent()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Initialize));
