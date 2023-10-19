import React, { useContext } from "react";

import Login from "./components/login/Login";
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import AuthContext from "./context/auth-context";

function App() {
  const authCtx = useContext(AuthContext);
  return (
    <>
      <Header />
      <main>
        {!authCtx.isLoggedIn && <Login />}
        {authCtx.isLoggedIn && <Home />}
      </main>
    </>
  );
}

export default App;
