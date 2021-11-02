import {Card, Col, Container, Row} from "react-bootstrap";
import {FormattedMessage} from "react-intl";
import GithubCard from "../components/GithubCard";

export default function Projects () {
    return (
        <div>
            <Container className="pt-4">
                <Row xs={1} md={2} className="g-4">
                    <Col>
                        <GithubCard repo="Duskers-Modloader" owner="juanmuscaria"/>
                    </Col>
                    <Col>
                        <GithubCard repo="crucible" owner="cruciblemc"/>
                    </Col>
                    <Col>
                        <GithubCard repo="javactl" owner="juanmuscaria"/>
                    </Col>
                    <Col>
                        <GithubCard repo="NotSoLegacyWorkspace-Gradle-Groovy" owner="juanmuscaria"/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}