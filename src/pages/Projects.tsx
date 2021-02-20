import React from "react";
import GithubProject from "../components/GithubProject";
import {Col, Container, Row} from "react-bootstrap";

class Projects extends React.Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col>
                        <GithubProject repo="Duskers-Modloader" owner="juanmuscaria"/>
                    </Col>
                    <Col>
                        <GithubProject repo="crucible" owner="cruciblemc"/>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Projects;