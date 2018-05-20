import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import StackOverFlow from './components/StackOverFlow';

import '../styles/base/_main.sass';

const renderApp = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component/>
    </AppContainer>,
    document.getElementById('root')
  );
};

renderApp(StackOverFlow);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/StackOverFlow', () => {
    renderApp(require('./components/StackOverFlow').default);
  })
}
