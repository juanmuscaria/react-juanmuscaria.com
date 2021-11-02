import {Card, Col, Container, Row} from "react-bootstrap";
import {FormattedMessage} from "react-intl";
import GithubCard from "../components/GithubCard";
import React from "react";

export default function Contact () {
    return (
        <Container className="pt-5">
            <p style={{textAlign: 'center'}}>
                <FormattedMessage id="Contact"/>
            </p>
            <Row xs={1} md={2} className="g-4">
                <Col>
                    <Card bg="secondary">
                        <Card.Body>
                            <Card.Title>E-Mail</Card.Title>
                            <Card.Link href="mailto:juanmuscaria+dotcom@gmail.com">juanmuscaria+dotcom@gmail.com</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card bg="secondary">
                        <Card.Body>
                            <Card.Title>Telegram</Card.Title>
                            <Card.Link href="https://t.me/juanmuscaria">@juanmuscaria</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}