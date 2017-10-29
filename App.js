import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'remote-redux-devtools';
import { NativeRouter as Router, Route, Switch } from 'react-router-native';
import { StyleProvider } from '@shoutem/theme';
import { View } from '@shoutem/ui';
import { StatusBar } from './components';
import { Initialize, Intro, Question, Results } from './containers';
import reducers from './reducers';
import sagas from './sagas';
import theme from './theme';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = composeWithDevTools({ realtime: true });
const store = createStore(reducers, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(sagas);

const App = () => (
  <Provider store={store}>
    <StyleProvider style={theme}>
      <View styleName="flexible">
        <StatusBar />
        <Router>
          <Switch>
            <Route path="/" component={Intro} exact />
            <Route path="/initialize" component={Initialize} />
            <Route path="/question" component={Question} />
            <Route path="/results" component={Results} />
          </Switch>
        </Router>
      </View>
    </StyleProvider>
  </Provider>
);

export default App;
