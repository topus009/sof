import React from 'react';
import ReactDOM from 'react-dom';
import DevTools from 'mobx-react-devtools'
import {AppContainer} from 'react-hot-loader';
import {observer} from 'mobx-react';
import StackOverFlow from './components/StackOverFlow';
import Store from './Store';

import '../styles/base/_main.sass';

const renderApp = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component store={Store}>
        <DevTools />
      </Component>
    </AppContainer>,
    document.getElementById('root')
  );
};

renderApp(observer(StackOverFlow));

if (module.hot) {
  module.hot.accept('./components/StackOverFlow', () => {
    renderApp(require('./components/StackOverFlow').default);
  })
}
