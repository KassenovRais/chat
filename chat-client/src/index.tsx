import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import messagesReducer from './Store/ChatReducer'
import { Provider } from 'react-redux';


const  store = configureStore({
  reducer: {
    messages: messagesReducer
  }
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider
    store={store}
  >
    <App />

  </Provider>
);

