import { Container, Profile } from "./styles";
import { Input } from "../Input";
import { Link } from "react-router-dom";

export function Header(){
    return (
        <Container>        
            <p>RocketMovies</p>
            <Input
             className="searchTitles"
             placeholder="Pesquisar pelo titulo"
            />
                    
            <Profile>
                <ul>
                    <li>
                        <p>Eliezer Ramos</p>
                    </li>
                    <li>
                        <Link to="/">
                            Sair
                        </Link>
                    </li>
                </ul>
                <img src="https://github.com/eliezer-dev.png" alt="Foto do profile do usuario"/>
            </Profile>
        </Container>
    )
}