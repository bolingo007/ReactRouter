import {AuthContext} from '../context/AuthContext.js';
import { useState, useContext } from 'react';
import axios from 'axios';

export default function Login() {
  const [auth, setAuth] = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errStyle, setErr] = useState({backgroundColor:"white"});

  const loginClick = () => {
    axios.post("http://104.248.104.227/login", {username,password})
    .then ( (response) => {
      setErr({backgroundColor:"green"});
      let token = response.data.token;
      setAuth({isAuth:true,token});
      setUsername("");
      setPassword("");
    }).catch((err) => {
      setErr({backgroundColor:"red"});
      setPassword("");
    });
  };

  const onInputChange = (event,setStateFct) => {
    setStateFct(event.target.value);
  }

 return (
    <div>
      <h2 style={errStyle}>Connexion</h2>
      <input type="text" value={username} onChange={(event) => onInputChange(event, setUsername)}  />
      <input type="password" value={password} onChange={(event) => onInputChange(event, setPassword)} />
      <button onClick={() => loginClick()} >Login</button>
    </div>
  )
  
}
