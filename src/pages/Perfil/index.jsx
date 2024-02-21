import {Container, Form, Header, Picture} from "./styles"
import ArrowLeft from "../../assets/shared/ArrowLeft.svg"
import { ButtonText } from "../../components/ButtonText";
import { Button} from "../../components/Button";
import { Input } from "../../components/Input";
import {FiLock, FiMail, FiUser} from 'react-icons/fi';
import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

export function Perfil () {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [oldPassword, setOldPassword] = useState();
    const [password, setPassword] = useState();
    const {user} = useAuth();
    const navigate = useNavigate();

    async function handleUpdateProfile() {
        let data = {}
        if (password) {
            if (password && !oldPassword) {
                return alert ("Digite a senha atual")
            }
            data = {
                name, 
                email,
                password,
                oldpassword: oldPassword
            }
        } else {
            data = {
                name, 
                email,
            }
        }
    
        console.log({data})
        await api.put("/users", data)
        .then(() => {
            alert("profile atualizado com sucesso")
            setPassword("")
            setOldPassword("")
        })
        .catch((error) => {
            console.log(error)
            if(error.response) {
                alert(error.response.data.message)
                console.log(error.response.data.message)
            }else {
                alert("Houve um erro ao atualizar o profile, verique os dados informados e tente novamente.")
                console.log(error.message)
            }
            
        })
    }

    function handleBack() {
        navigate(-1)
    }

    useEffect(() => {
        setName(user.name)
        setEmail(user.email)
    },[user.name, user.email])

    return(
        <Container>
            <Header>
            <ButtonText
                    img={ArrowLeft}
                    alt="Seta para a esquerda"
                    name="Voltar"
                    onClick={handleBack}
            />
            </Header>
            <Picture>
                <img src="https://github.com/eliezer-dev.png" alt="imagem do perfil"/>
            </Picture>
            <Form>
                <div className="userData">
                    <Input 
                        icon={FiUser}
                        placeholder="Nome do usuário"
                        value={name}
                        onChange={e => {setName(e.target.value)}}
                    />
                    <Input 
                        icon={FiMail}
                        placeholder="usuario@email.com.br"
                        value={email}
                        onChange={e => {setEmail(e.target.value)}}

                    />
                </div>
                <div className="passwordData">
                    <Input 
                        icon={FiLock}
                        placeholder="Senha atual"
                        type="password"
                        value={oldPassword}
                        onChange={e => {setOldPassword(e.target.value)}}
                    />
                    <Input 
                        icon={FiLock}
                        placeholder="Nova senha"
                        type="password"
                        value={password}
                        onChange={e => {setPassword(e.target.value)}}
                    />
                </div>
                <Button
                    title="Salvar"
                    onClick={handleUpdateProfile}
                />    
            </Form>
        </Container>
    )
   
}