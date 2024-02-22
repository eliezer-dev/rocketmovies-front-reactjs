import {Container, Form, Header, Picture} from "./styles"
import ArrowLeft from "../../assets/shared/ArrowLeft.svg"
import { ButtonText } from "../../components/ButtonText";
import { Button} from "../../components/Button";
import { Input } from "../../components/Input";
import {FiCamera, FiLock, FiMail, FiUser} from 'react-icons/fi';
import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import avatarPlaceholder from "../../assets/shared/avatar_placeholder.svg"

export function Profile () {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [oldPassword, setOldPassword] = useState();
    const [password, setPassword] = useState();
    const {user, updateProfile} = useAuth();
    const navigate = useNavigate();
    const avatarUrl = user.avatar ?`${api.defaults.baseURL}/files/${user.avatar}`:avatarPlaceholder;
    const [avatar, setAvatar] = useState(avatarUrl);
    const [avatarFile, setAvatarFile] = useState(null)

    async function handleUpdateProfile() {
        const updated = {
            name,
            email,
            password,
            oldpassword:oldPassword
        }
        const userUpdated = Object.assign(user, updated)
        await updateProfile({user:userUpdated, avatarFile});
    }

    function handleChangeAvatar(event) {
        const file = event.target.files[0];
        setAvatarFile(file)
        const imagePreview = URL.createObjectURL(file)
        setAvatar(imagePreview)
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
                <img src={avatar} alt="imagem do perfil"/>
                <label htmlFor="avatar">
                    <FiCamera/>
                    <input id="avatar" type="file" onChange={handleChangeAvatar}/>
                </label>
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