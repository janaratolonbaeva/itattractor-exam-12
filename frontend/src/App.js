import React from 'react';
import {useSelector} from "react-redux";
import {Redirect, Route, Switch} from 'react-router-dom';
import Layout from "./components/UI/Layout/Layout";
import Register from "./containers/Register/Register";
import Login from "./containers/Login/Login";
import {Helmet} from "react-helmet";
import Home from "./containers/Home/Home";
import AddNewPhoto from "./containers/AddNewPhoto/AddNewPhoto";
import UserPhotos from "./containers/UsersPhotos/UserPhotos";

const ProtectedRoute = ({isAllowed, redirectTo, ...props}) => {
  return isAllowed ?
    <Route {...props} /> :
    <Redirect to={redirectTo}/>;
};

const App = () => {
  const user = useSelector(state => state.users.user);

  return (
    <Layout>
      <Helmet
        titleTemplate="%s - Photo Gallery"
        defaultTitle="Photo Gallery"
      />
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/users/:id" exact component={UserPhotos}></Route>
        <ProtectedRoute
          path="/addNew-photo"
          component={AddNewPhoto}
          isAllowed={user}
          redirectTo="/login"
        />
        <Route path="/register" component={Register}/>
        <Route path="/login" component={Login}/>
      </Switch>
    </Layout>
  );
};

export default App;
