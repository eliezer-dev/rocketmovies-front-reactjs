import { Container } from "./styles"

export function ButtonText({img, alt, name, ...rest}) {
    return(
        <Container 
            type="button"
            {...rest}>
                <img src={img} alt={alt} /> 
                {name}
        </Container>
    )
   
}

