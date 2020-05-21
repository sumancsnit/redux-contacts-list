import React from 'react';
import './styles/App.scss';
import Navbar from './components/layouts/Navbar';
import Contacts from './components/contacts/Contacts';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <>
      <Provider store={store}>
        <div className='App'>
          <Navbar />
        </div>
        <div className='container'>
          <div className='py-3'>
            <Contacts />
          </div>
        </div>
      </Provider>
    </>
  );
}

export default App;
