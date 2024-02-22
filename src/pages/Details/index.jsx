import { Header } from "../../components/Header";
import { Autor, Container, Content, Tags, Title } from "./styles";
import ArrowLeft from "../../assets/shared/ArrowLeft.svg"
import { Rating } from "../../components/Rating";
import Vector from "../../assets/pages/MoviePreview/Vector.svg"
import { Tag } from "../../components/Tag";
import { ButtonText } from "../../components/ButtonText";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";

export function Details()  {
    const {user} = useAuth();
    const params = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState({})

    function handleBack() {
        navigate(-1)
    }

    useEffect(() => {
        async function fetchNote(){
            const response = await api.get(`/movies/${params.id}`);
            console.log(response.data)
            setData(response.data)
        }
        fetchNote()
    },[])
    return (
        <Container>
            <Header/>
            <Content>
                <ButtonText
                    onClick={handleBack}
                    img={ArrowLeft}
                    alt="Seta para a esquerda"
                    name="Voltar"
                />
                <Title>
                    <h1>{data.title}</h1>
                    <Rating
                        ratingnumber={data.rating}                    
                    />
                </Title>
                <Autor>
                    <img src={user.avatar} alt="Foto do autor do artigo"/>
                    <p>{user.name}</p>
                    <img src={Vector} alt="Imagem de um relógio" />
                    <p>{data.created_at}</p>

                </Autor>
                {data.tags &&
                <Tags>
                    {data.tags.map(tag =>(
                        <Tag key={tag.id} name={tag.name}/>
                    ))}
                </Tags>
                }
               <p>
                    {data.description}
               </p>
                
            </Content>
            
        </Container>

    )
}