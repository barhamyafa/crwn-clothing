import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';

import { auth, createUserProfileDocument } from './firebase/firebase.utils.js'
import setCurrentUser from './redux/user/user.actions'

import {currentUserSelector} from './redux/user/user.selectors';


import './App.css';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    }
  }

  unsuscribeFromAuth = null;
  componentDidMount() {
    this.unsuscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => this.props.setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          }))
      }

      this.props.setCurrentUser (userAuth)
    })
  }

  componentWillUnmount() {
    this.unsuscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/signIn' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage />)} />
        </Switch>
      </div>
    );
  }

}

const mapStateToProps = state=> ({
  currentUser: currentUserSelector(state)
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
