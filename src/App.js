import React, { Component, Suspense } from 'react';
// import { BrowserRouter, Route, NavLink } from 'react-router-dom';

import User from './containers/User';
// import Welcome from './containers/Welcome';
// import Posts from './containers/Posts';
const Posts = React.lazy(() => import('./containers/Posts'));

class App extends Component {
  state = { showPosts: false };

  modeHandler = () => {
    this.setState(prevState => {
      return { showPosts: !prevState.showPosts }
    })
  }
  render() {
    return (
      <>
        <button onClick={this.modeHandler}>Toggle Mode</button>
        {this.state.showPosts ? (
          <Suspense fallback={<div>Loading...</div>}><Posts /></Suspense>
        ) : <User />
        }

        {/* 
          <BrowserRouter>
            <React.Fragment>
              <nav>
                <NavLink to="/user">User Page</NavLink> |&nbsp;
                <NavLink to="/posts">Posts Page</NavLink>
              </nav>
              <Route path="/" component={Welcome} exact />
              <Route path="/user" component={User} />
              <Route path="/posts" component={Posts} /> 
            </React.Fragment>
         </BrowserRouter>
        */}
      </>
    );
  }
}

export default App;
