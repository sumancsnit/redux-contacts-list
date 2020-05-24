import React from 'react';
import './styles/App.scss';
import Navbar from './components/layouts/Navbar';
import Contacts from './components/contacts/Contacts';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddContact from './components/contacts/AddContact';
import EditContact from './components/contacts/EditContact';

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <div className='App'>
            <Navbar />
          </div>
          <div className='container'>
            <div className='py-3'>
              <Switch>
                <Route exact path='/' component={Contacts} />
                <Route exact path='/add' component={AddContact} />
                <Route exact path='/edit/:id' component={EditContact} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    </>
  );
}

export default App;
