import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { Container, Form } from "./styles";
import ArrowLeft from "../../assets/shared/ArrowLeft.svg"
import { Markdown } from "../../components/Markdown";
import { useState } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

export function NewMovie(){
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [rating, setRating] = useState();
    const [markdowns, setMarkdowns]= useState([]);
    const [newMarkdown, setNewMarkdown] = useState("");
    const navigate = useNavigate();
    const {user} = useAuth();
    

    function handleAddMarkdown() {
        if(markdowns.includes(newMarkdown)) {
            setNewMarkdown("")
        } else {
            setMarkdowns(prevState => [...prevState, newMarkdown])
            setNewMarkdown("")
        }
        
    }

    function handleRemoveMarkdown(name) {
        const newMarkdownList = markdowns.filter(markdown => markdown !== name)
        setMarkdowns(newMarkdownList)
    }

    async function handleSaveMovie() {
        await api.post(`/movies/${user.id}`, {title, description, rating, tags:markdowns})
        .then(
            alert(`Informações do filme ${title} salvas com sucesso.`),
            navigate("/")
            
        )
        .catch(error => {
            if (error) {
                alert(error.data.message)
            }else {
                alert("Não foi possível salvar")
            }

        })
    }

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
                        value={title}
                        onChange={e => {setTitle(e.target.value)}}
                    />
                    <Input
                        placeholder="Sua nota (de 0 a 5)"
                        value={rating}
                        onChange={e => {setRating(e.target.value)}}
                    />

                </div>
                <textarea 
                    placeholder="Observações" 
                    value={description}
                    onChange={e => {setDescription(e.target.value)}}
                />
                <h2>Marcadores</h2>
                <div className="markdowns">
                    {
                        markdowns.map(
                            (markdown, index) => (
                            <Markdown key={String(index)} value={markdown}
                            onClick={() => {handleRemoveMarkdown(markdown)}}
                            />
                        )
                    ) 
                    }
                    <Markdown 
                        isnew 
                        placeholder="Novo marcador"
                        value={newMarkdown}
                        onChange={e => {setNewMarkdown(e.target.value)}}
                        onClick={handleAddMarkdown}
                    />
                </div>
                <div className="buttons">
                    <Button 
                        title="Excluir filme" 
                        disabled
                    />
                    <Button title="Salvar alterações" onClick={handleSaveMovie}/>
                </div>
                
            </Form>    
        </Container>
    )
}