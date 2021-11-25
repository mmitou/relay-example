import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { RelayEnvironmentProvider } from 'react-relay';
import App from './App';
import RelayEnvironment from './RelayEnvironment';

ReactDOM.render(
  <React.StrictMode>
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback={<p>loading toplevel</p>}>
        <App />
      </Suspense>
    </RelayEnvironmentProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
