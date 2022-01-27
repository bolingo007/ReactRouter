import {React , useContext } from 'react';
import {AuthContext2} from './AuthContext2.js';


export default function Auth2() {
    const [valeurDuContext, setAuth2] = useContext(AuthContext2);

    let clickConnect = () => {
        console.log(valeurDuContext);
        setAuth2({isAuth:!valeurDuContext.isAuth});
    }
    
    return (
        <div>
            {valeurDuContext.isAuth ? 
                <p>Allo tu es connecté</p> : 
                <p>Qui es-tu ?</p>}

            <button onClick={() => clickConnect()}>Change valeur</button>
        </div>);
}