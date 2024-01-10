import { useState } from 'react';
import "./styles.scss";

export function Home (){
    const [user, setUser] = useState({});

    function home(){        
        setUser(user);
    }

    return(
        <div className="home" onChange={home}>
            <div className="login-logo">
            <h1>Pet Solution</h1>
            <img src="https://www.apple.com/v/home-app/e/images/meta/home-app__fgegqj2rnt26_og.png?202312210639"
              alt="Login App"></img>
          </div>
        </div>          
    )
}