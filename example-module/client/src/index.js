import { render } from 'react-dom';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { Provider } from 'react-redux';
import Injector, { InjectorProvider, provideInjector, inject, loadComponent } from 'lib/Injector';
import App from './components/App';
import HelloComponent from './components/HelloComponent';

Injector.component.register('MyApp', App);
Injector.component.register('HelloComponent', HelloComponent);

const MyApp = loadComponent('MyApp');

  $('#notes-app').entwine({
    onmatch() {
      render(
        <MyApp />,
        this[0]
      );
    }
  });
// });
