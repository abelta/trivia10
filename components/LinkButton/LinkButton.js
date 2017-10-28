import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-native';
import { Button } from '@shoutem/ui';

const LinkButton = ({ children, history, style, styleName, to }) => {
  const redirect = () => history.push(to);
  return (
    <Button onPress={redirect} style={style} styleName={styleName}>
      {children}
    </Button>
  );
};

LinkButton.propTypes = {
  children: PropTypes.node.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  history: PropTypes.object.isRequired,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  styleName: PropTypes.string,
  to: PropTypes.string.isRequired,
};

LinkButton.defaultProps = {
  style: null,
  styleName: '',
};

export default withRouter(LinkButton);
