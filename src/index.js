import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { connect, Provider } from 'react-redux';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './store';
import { ErrorBoundary } from 'react-error-boundary';
import Fallback from './components/Fallback';
const root = ReactDOM.createRoot(document.getElementById('root'));
const errorHandler = (error, errorInfo) => {
  console.log('Error>>>', error, errorInfo);
}
root.render(
  <StrictMode>
    <Provider store={store}>
      <ErrorBoundary FallbackComponent={Fallback} onError={errorHandler}>
        <App />
      </ErrorBoundary>
    </Provider>
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
