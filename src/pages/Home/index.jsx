import { Container, Content, Title } from "./styles";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import {Synopsis} from "../../components/Synopsis"
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function Home() {
    const {user} = useAuth();
    const [notes, setNotes] = useState([])
    const navigate = useNavigate();
    
    function handleNewMovie() {
        navigate("/new")
    }

    useEffect(() => {
        async function fetchNotes(){
            let notes = (await api.get(`/movies?user_id=${user.id}`)).data
            const tags = (await api.get(`/tags?user_id=${user.id}`)).data
            notes = notes.map(note => {
                const newNotes = {
                    ...note,
                    tags: tags.filter(tag => {
                        return tag.note_id === note.id
                    })
                }
                return newNotes
            })
            setNotes(notes)
        }   
        fetchNotes();
   
    },[])

    return (
        <Container>
            <Header/>
            <Title>
                <h2>Meus filmes</h2>
                <Button title="Adicionar Filme" onClick={handleNewMovie}/>
            </Title>
            <Content>
                {notes.map(
                    note => (
                        <Synopsis key={note.id} data={note} className="stars" />
                    )      
                )}
            </Content>
            
        </Container>
    )
}