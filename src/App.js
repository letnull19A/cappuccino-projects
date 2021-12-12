import React from "react";
import { BrowserRouter as Router } from 'react-router-dom'
import { Routing } from "./routers";
import { useAuth } from './hooks/hook.auth'
import { ContextDataAuth } from "./context-data/context-data.auth"

function App() {

  const { token, login, logout, userId } = useAuth()

  const isAuthenticated = !(token == null)
  const routes = Routing(isAuthenticated);

  return (
    <Router>
      <div className="application-layout">
        <ContextDataAuth.Provider value={{ token, login, logout, userId }}>
          {routes}
        </ContextDataAuth.Provider>
      </div>
    </Router>
  );
}

export default App;
