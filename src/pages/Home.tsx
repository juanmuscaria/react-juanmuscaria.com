import {Col, Container, Row} from "react-bootstrap";
import {FormattedMessage} from "react-intl";

export default function Home () {
    return (
        <Container className="pt-5">
            <Row>
                <Col>
                    <p style={{textAlign: 'center'}}>
                        <FormattedMessage id="About.Line1"/>
                    </p>
                    <p style={{textAlign: 'center'}}>
                        <FormattedMessage id="About.Line2"/>
                    </p>
                </Col>
            </Row>
        </Container>
    );
}