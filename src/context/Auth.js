import React from 'react';
import { useContext } from 'react';
import {AuthContext} from './AuthContext.js';


export default function Auth() {
    const [valeurDuContext, setAuth] = useContext(AuthContext);

    let clickConnect = () => {
        console.log(valeurDuContext);
        setAuth({isAuth:!valeurDuContext.isAuth});
    }
    
    return (
        <div>
            {valeurDuContext.isAuth ? 
                <p>Allo tu es connecté</p> : 
                <p>Qui es-tu ?</p>}

            <button onClick={() => clickConnect()}>Change valeur</button>
        </div>);
}