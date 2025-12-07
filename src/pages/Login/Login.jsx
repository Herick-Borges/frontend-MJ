import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Input, Button, Checkbox } from "antd";


import "./Login.scss";

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        

        if (username === "admin" && password === "admin") {
          navigate("/dashboard");
        } else {
          alert("Usuário ou senha incorretos!");
        }
       };
  return (
    <div className="login-root">
      <div className="container">
        <form onSubmit={handleSubmit} >
            <div className="login-title-image">
              <img src="/src/assets/logomajusystem 3.png" alt="Logo" />
            </div>

            <div className="input-field">
                <Input
                  size= "large"
                  type="text"
                  placeholder="Email"
                  prefix={<UserOutlined />}
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            <div className="input-field">
                <Input.Password
                  size="large"
                  type="password" 
                  placeholder="Senha"
                  prefix={<LockOutlined />}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} />
            </div>

            <div className="recall-forget">
                <Checkbox
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                >
                  Lembre de mim
                </Checkbox>
                <Link to="/forgot">Esqueci minha senha</Link>
            </div>

            <Button 
            type="primary" 
            htmlType="submit" 
            block 
            size="large">Entrar</Button>

            <div className="signup-link">
              <p>Não tem uma conta? <Link to="/register">Registrar</Link></p>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Login
