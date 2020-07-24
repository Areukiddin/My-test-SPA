import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Main } from "./pages/Main/Main";
import { About } from "./pages/About/About";
import { Navbar } from "./navigation/Navbar";
import { Gallery } from "./pages/Gallery/Gallery";
import DialogsContainer from "./pages/Dialogs/DialogsContainer";
import UsersContainer from "./pages/Users/UsersContainer";

function App(props) {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container pt-4">
        <Switch>
          <Route path={"/"} exact render={() => <Main store={props.store} />} />
          <Route path={"/gallery"} render={() => <Gallery />} />
          <Route
            path={"/dialogs"}
            render={() => <DialogsContainer store={props.store} />}
          />
          <Route path={"/about"} render={() => <About />} />
          <Route
            path={"/users"}
            render={() => <UsersContainer store={props.store} />}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

/* Комментарий */
export default App;
