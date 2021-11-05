import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Header from "./componets/Header/Header";
import Navbar from "./componets/Navbar/Navbar";
import Profile from "./componets/Profile/Profile";
import Dialogs from "./componets/Dialogs/Dialogs";
import Music from "./componets/Music/Music";
import News from "./componets/News/News";
import Settings from "./componets/Settings/Settings";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar state= {props.state.sidebarPage} />

        <div className="app-wrapper-content">
          <Route path="/profile" render={() => <Profile state={props.state.profilePage} dispatch={props.dispatch}/>} />
          <Route path="/dialogs" render={()=> <Dialogs state={props.state.dialogsPage} dispatch={props.dispatch}/>} />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
