import { Container } from "./styles";
import StarChecked from "../../assets/components/Rating/star.png"
import StarNoChecked from "../../assets/components/Rating/star-empty.png"

export function Rating ({ratingnumber, ...rest}) {
    
    if (ratingnumber > 5) {
        ratingnumber = 5
    }
    
    let starChecked = []
    let starNoChecked = []
    for (let i = 0; i < ratingnumber; i++) {
        starChecked.push(<img key={i+1} src={StarChecked} alt="imagem de uma estrela com preenchimento"/>)
    }

    if (ratingnumber < 5) {
        ratingnumber = 5 - ratingnumber
        for (let i = 0; i < ratingnumber; i++) {
            starNoChecked.push(<img key={i+1} src={StarNoChecked} alt="imagem de uma estrela sem preenchimento"/>)
        }
    }
    
    return (
        <Container {...rest}>
    
            {starChecked}
            {starNoChecked}

        </Container>
    )
}