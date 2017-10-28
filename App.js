import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'remote-redux-devtools';
import { AppLoading, Font } from 'expo';
import { NativeRouter as Router, Route, Switch } from 'react-router-native';
import { View } from '@shoutem/ui';
import fonts from './assets/fonts';
import { StatusBar } from './components';
import { Intro, Question, Results } from './containers';
import reducers from './reducers';

const store = createStore(reducers, composeWithDevTools());

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isFontsReady: false };
  }

  async componentWillMount() {
    await Font.loadAsync(fonts);
    this.setState({ isFontsReady: true });
  }

  render() {
    const { isFontsReady } = this.state;
    if (!isFontsReady) return <AppLoading />;
    return (
      <Provider store={store}>
        <View styleName="flexible">
          <StatusBar />
          <Router>
            <Switch>
              <Route path="/" component={Intro} exact />
              <Route path="/question/:round" component={Question} />
              <Route path="/results" component={Results} />
            </Switch>
          </Router>
        </View>
      </Provider>
    );
  }
}

export default App;
