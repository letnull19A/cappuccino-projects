import React from "react";
import Routing from "./routers";
import { useAuth } from './hooks/hook.auth'
import { ContextDataAuth } from "./context-data/context-data.auth"

function App() {

  const {token, login, logout, userId, ready} = useAuth()
  const isAuthenticated = !!token

  return (

    <div className="application-layout">
      <ContextDataAuth.Provider value={{ token, login, logout, userId, ready }}>
        <Routing isAuthenticated={isAuthenticated}></Routing>
      </ContextDataAuth.Provider>
    </div>
  );
}

export default App;
