import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Main } from "./pages/Main/Main";
import { DialogsContainer } from "./pages/Dialogs/DialogsContainer";
import { About } from "./pages/About/About";
import { Navbar } from "./navigation/Navbar";

import { Gallery } from "./pages/Gallery/Gallery";

function App(props) {
  let state = props.store.getState();
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container pt-4">
        <Switch>
          <Route
            path={"/"}
            exact
            render={() => (
              <Main
                userInfo={state.userPage.userInfo}
                dispatch={props.dispatch}
                myFeed={state.userPage.myFeed}
              />
            )}
          />
          <Route path={"/gallery"} render={() => <Gallery />} />
          <Route
            path={"/dialogs"}
            render={() => <DialogsContainer store={props.store} />}
          />
          <Route path={"/about"} render={() => <About />} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
