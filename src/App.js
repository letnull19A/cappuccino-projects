import React from "react";
import { Routing } from "./routers";
import { useAuth } from './hooks/hook.auth'
import { ContextDataAuth } from "./context/context.auth"
import "./scss/main.scss";

function App() {

  const { token, login, logout, userId } = useAuth()

  const isAuthenticated = !(token == null)
  const routes = Routing(isAuthenticated);

  return (
    <div className="application-layout">
      <ContextDataAuth.Provider value={{ token, login, logout, userId }}>
        {routes}
      </ContextDataAuth.Provider>
    </div>
  );
}

export default App;
