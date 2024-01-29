import {Container, Form, Header, Picture} from "./styles"
import ArrowLeft from "../../assets/shared/ArrowLeft.svg"
import { ButtonText } from "../../components/ButtonText";
import { Button} from "../../components/Button";
import { Input } from "../../components/Input";
import {FiLock, FiMail, FiUser} from 'react-icons/fi';
export function Perfil () {
    return(
        <Container>
            <Header>
            <ButtonText
                    path="/"
                    img={ArrowLeft}
                    alt="Seta para a esquerda"
                    name="Voltar"
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
                    />
                    <Input 
                        icon={FiMail}
                        placeholder="usuario@email.com.br"

                    />
                </div>
                <div className="passwordData">
                    <Input 
                        icon={FiLock}
                        placeholder="Senha atual"
                        type="password"
                    />
                    <Input 
                        icon={FiLock}
                        placeholder="Nova senha"
                        type="password"
                    />
                </div>
                <Button
                    title="Salvar"
                />

                
            </Form>
        </Container>
    )
   
}