import { useState } from "react";
import LoginComponent from "./LoginComponent";
import WelcomeComponent from "./WelcomeComponent";

export default function TodoComponent(){
    const [isAuthenticated, setAuthentication] = useState(false)
    return (
        <div>
            <LoginComponent setAuthentication={setAuthentication}/>
            {isAuthenticated && <WelcomeComponent/>}
        </div>
    )
}