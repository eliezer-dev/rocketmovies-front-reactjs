import { Container } from "./styles";
import { Link } from "react-router-dom";

export function Button({title, disabled=false, path, ...rest}) {
    return(
        <Container>
             <Link to={path}>
                <button
                    type="button"
                    disabled={disabled}
                    {...rest}
                    >
                    {title}
                </button>
            </Link>
        
        </Container>
    
    )
}