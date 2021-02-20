import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import {Button} from "antd";
import {GithubOutlined, MailOutlined} from "@ant-design/icons";
import {FormattedMessage} from "react-intl";

class Contact extends React.Component {
    render() {
        return (
            <Container fluid>
                <Row className="justify-content-md-center">
                    <Col md={10}>
                        <h1>
                            <FormattedMessage id="Contact.Where"/>
                        </h1>
                        <p>
                            <FormattedMessage id="Contact.Here"/>
                        </p>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col md="auto">
                        <Button size="large" icon={<GithubOutlined />} href="https://github.com/juanmuscaria">
                            Github
                        </Button>
                    </Col>
                    <Col md="auto">
                        <Button size="large" icon={<MailOutlined />} href="mailto:juanmuscaria+dotcom@gmail.com">
                            Email
                        </Button>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Contact;