import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';

import App from './App';
import './index.css';
import store from './store/store';

ReactDOM.render(
  <Provider store={store.store}>
    <BrowserRouter>
      <QueryClientProvider client={new QueryClient()}>
        <App />
      </QueryClientProvider>
    </BrowserRouter>
  </Provider>, document.getElementById('root'),
);
