import React from "react";
import {Col, Row, Container } from "react-bootstrap";
import {FormattedMessage} from "react-intl";

class Home extends React.Component {
    render() {
        return (
            <Container fluid>
                <Row className="justify-content-md-center">
                    <Col md={10}>
                        <p>
                            <FormattedMessage id="Home.Introduction"/>
                        </p>
                        <p>
                            <FormattedMessage id="Home.WhatICanDo"/>
                        </p>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Home;