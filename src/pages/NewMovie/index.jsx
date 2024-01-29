import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { Container, Form } from "./styles";
import ArrowLeft from "../../assets/shared/ArrowLeft.svg"
import { Markdown } from "../../components/Markdown";

export function NewMovie(){
    return (    
        <Container>
            <Header/>
               
            <Form>
                <ButtonText
                    path="/"
                    img={ArrowLeft}
                    alt="Seta para a esquerda"
                    name="Voltar"
                />
                <h1>Novo filme</h1>
                <div className="input">
                    <Input
                        placeholder="Titulo"
                    />
                    <Input
                        placeholder="Sua nota (de 0 a 5)"
                    />

                </div>
                <textarea placeholder="Observações"/>
                <h2>Marcadores</h2>
                <div className="markdowns">
                    <Markdown value="React"/>
                    <Markdown isnew placeholder="Novo marcador"/>
                </div>
                <div className="buttons">
                    <Button 
                        title="Excluir filme" 
                        disabled
                    />
                    <Button title="Salvar alterações"/>
                </div>
                
            </Form>    
        </Container>
    )
}