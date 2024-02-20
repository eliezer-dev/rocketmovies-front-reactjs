import { Container, Profile } from "./styles";
import { Input } from "../Input";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";

export function Header(){
    const {signOut} = useAuth();
    const navigate = useNavigate();

    function handleSignOut () {
        signOut()
        navigate("/")
    }


    return (
        <Container>        
            <p>RocketMovies</p>
            <Input
             className="searchTitles"
             placeholder="Pesquisar pelo titulo"
            />
            <Link to="/perfil"> 
                <Profile>
                    <ul>
                        <li>
                            <p>Eliezer Ramos</p>
                        </li>
                        <li>
                            <Link to="/" onClick={handleSignOut}>
                                Sair
                            </Link>
                        </li>
                    </ul>
                    <img src="https://github.com/eliezer-dev.png" alt="Foto do profile do usuario"/>
                </Profile>
            </Link>
            
        </Container>
    )
}