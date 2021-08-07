import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LoginPage from './pages/login';
import CreatePost from './pages/createPost';
import PostList from './pages/postsList';
import ApplyPost from './pages/applyPost';
import AppliedForPost from './pages/appliedForPost';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={LoginPage}></Route>
        <Route exact path="/posts" component={PostList}></Route>
        <Route exact path="/create-post" component={CreatePost}></Route>
        <Route exact path="/applied-for-post" component={AppliedForPost}></Route>
        <Route exact path="/apply-post/:jobId" component={ApplyPost}></Route>
        <Route path="*" children="PAGE NOT FOUND!"></Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
