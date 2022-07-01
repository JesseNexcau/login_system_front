import { useEffect, useState } from "react";
import axios from "axios";

function LoginPage() {
      const [username, setusername] = useState("");
      const [email, setemail] = useState("");
      const [password, setpassword] = useState("");
      const [confirmPassword, setconfirmPassword] = useState("");

      const register = () => {
            axios({
                  method: 'post',
                  url: 'http://localhost:1717/makeregister',
                  data: {
                        username,
                        email,
                        password
                  }
            });
      }


      return (
            <div className="page">
                  <div className="login-div">
                        <p className="login-txt">Registrar-se</p>
                        <div className="form">
                              <input type="text"
                                    placeholder="Seu Nome..."
                                    value={username}
                                    onChange={(e) => {
                                          setusername(e.target.value)
                                    }}
                              ></input>
                              <input type="email" 
                              placeholder="Seu E-mail..."
                              value={email} 
                              onChange={(e) =>{
                                    setemail(e.target.value)
                              }}
                              ></input>
                              <input type="password" 
                              placeholder="Sua Senha..."
                              value={password} 
                              onChange={(e) =>{
                                    setpassword(e.target.value)
                              }}
                              ></input>
                              <input type="password" 
                              placeholder="Repetir Senha..."
                              value={confirmPassword} 
                              onChange={(e) =>{
                                    setconfirmPassword(e.target.value)
                              }}
                              ></input>
                              <button onClick={e=>{
                                    e.preventDefault();
                                    register();
                              }}>Registrar</button>
                              <p className="login-footer">Já possui cadastro? <button>Logar-se</button></p>
                        </div>
                  </div>
            </div>
      );
}


export default LoginPage;