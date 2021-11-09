import "./Main.scss"
import {Container} from "react-bootstrap";

export default function NotFound () {
    return (
        <Container className="text-primary pt-5 crt crtFlick">
            <p style={{textAlign: 'center', fontSize: 36}}>404</p>
            <p style={{textAlign: 'center', fontSize: 36}}>Not found</p>
        </Container>
    );
}