import { Container } from "./styles"
import { Link } from "react-router-dom"

export function ButtonText({path, img, alt, name}) {
    return(
        <Container>
            <Link to={path}> 
                <img src={img} alt={alt}/> 
                {name}
            </Link>

        </Container>
    )
   
}

