import { useAuth } from "../security/AuthProvider"

export default function HeaderComponent(){
    const authContext = useAuth();
    return (
        <header className="header">
        <h1>Header</h1>
        <hr/>
        </header>
    )
}