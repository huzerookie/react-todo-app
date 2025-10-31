import { useAuth } from "../security/AuthProvider"

import { useAuth } from "../security/AuthProvider"

export default function HeaderComponent(){
    const authContext = useAuth();
    const logout = () => {
        authContext.logout()
    }
    return (
        <header className="header">
        <div className="title"><h1>Header</h1></div>
        {authContext.isAuthenticated && <button className="btn btn-danger logout" onClick={logout}>Logout</button>}        
        </header>
    )
}