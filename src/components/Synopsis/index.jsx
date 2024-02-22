import { Container } from "./styles";
import { Tag } from "../Tag";
import { Rating } from "../Rating";
import { Link } from "react-router-dom";

export function Synopsis({data, className, ...rest}){
    return (
        <Container {...rest}>
            <h2>{data.title}</h2>
            <Rating className={className} ratingnumber={data.rating}/>
            <p>{data.description}</p>
            {
                data.tags &&
                <footer>
                {    data.tags.map(tag =>  <Tag key={tag.id} name={tag.name}/>)
                
                }

                </footer>
            }
        </Container>
    )
    
}