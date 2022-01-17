import { createContext } from "react"

function Noop() 
{}

export const ContextDataAuth = createContext({
    token: null,
    userId: null,
    login: Noop,
    logout: Noop,
    isAuthenticated: false
});