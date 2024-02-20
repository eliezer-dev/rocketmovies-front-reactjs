import { Input } from "../../components/Input";
import { Container, Form, Background } from "./styles";
import { FiLock, FiMail, FiUser } from "react-icons/fi";
import {Button} from "../../components/Button"
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";


export function SignUp () {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const navigate = useNavigate();
    const {signIn} = useAuth();
    
    async function handleSignUp(){
        if (!name || !email || !password || !confirmPassword) {
            return alert ("Preencha todos os campos")
        }

        if (password !== confirmPassword){
            return alert ("As senhas não conferem ")
        }

        api.post("/users", {name, email, password})
        .then(() => {
            alert ("Usuário cadastrado com sucesso.")
            signIn({email, password})
            navigate("/")
        })
        .catch(error => {
            if(error.response){
                alert(error.response.data.message)
            }else {
                alert ("Não foi possível cadastrar.")
            }
        })
    }

    return (
        <Container>
            
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>
                <h2>Crie sua conta</h2>
                <Input
                    placeholder = "Nome"
                    type= "text"
                    icon= {FiUser}
                    onChange={e => setName(e.target.value)}
                />
                <Input
                    placeholder = "E-mail"
                    type= "text"
                    icon= {FiMail}
                    onChange={e => setEmail(e.target.value)}
                />
                <Input
                    placeholder = "Senha"
                    type= "password"
                    icon= {FiLock}
                    onChange={e => setPassword(e.target.value)}
                />
                 <Input
                    placeholder = "Confirmar Senha"
                    type= "password"
                    icon= {FiLock}
                    onChange={e => setConfirmPassword(e.target.value)}
                />
                <Button title="Cadastrar" onClick={handleSignUp}/>
                <Link to="/">
                    Voltar para o login
                </Link>
            </Form>
            <Background/>
        </Container>

    )
}