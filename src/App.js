import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import { updateNewPostText } from "./redux/state";

const App = (props) => {

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path="/dialogs"
            render={() => <Dialogs store={props.store}  />} />
          <Route path="/profile"
            render={() => <Profile
              profilePage={props.state.profilePage}
              dispatch={props.dispatch}
              />} />
        </div>

      </div>
    </BrowserRouter>);
}


export default App;
