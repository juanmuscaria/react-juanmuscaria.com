import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import lang from "./lang.json";
import reportWebVitals from './reportWebVitals';
import {FormattedMessage, IntlProvider} from "react-intl";
import {MemoryRouter, Route, Switch, Link} from "react-router-dom";
import {Col, Container, Nav, Navbar, Row} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Duck from "./pages/Duck";

// @ts-ignore
const language = (navigator.languages && navigator.languages[0]) || navigator.language || navigator.userLanguage;
const languageWithoutRegionCode = language.toLowerCase().split(/[_-]+/)[0];
// @ts-ignore
const messages = lang[languageWithoutRegionCode] || lang[language] || lang.en;

ReactDOM.render(
  <React.StrictMode>
      <IntlProvider locale={language} messages={messages}>
          <div className="crt crtFlick bg-dark text-primary">
              <MemoryRouter>
                  <Navbar expand="lg" bg="secondary" variant="dark">
                      <Container>
                          <Navbar.Brand href="/" ><FormattedMessage id="NavBar.Title"/></Navbar.Brand>
                          <Navbar.Toggle aria-controls="basic-navbar-nav" />
                          <Navbar.Collapse id="basic-navbar-nav" className="">
                              <Nav className="me-auto">
                                  <LinkContainer to="/" exact>
                                      <Nav.Link><FormattedMessage id="NavBar.Link.About"/></Nav.Link>
                                  </LinkContainer>
                                  <LinkContainer to="/projects">
                                      <Nav.Link><FormattedMessage id="NavBar.Link.Projects"/></Nav.Link>
                                  </LinkContainer>
                                  <LinkContainer to="/contact">
                                      <Nav.Link><FormattedMessage id="NavBar.Link.Contact"/></Nav.Link>
                                  </LinkContainer>
                              </Nav>
                          </Navbar.Collapse>
                      </Container>
                  </Navbar>
                  <Switch>
                      <Route path="/" exact component={() => <Home />} />
                      <Route path="/projects" exact component={() => <Projects />} />
                      <Route path="/contact" exact component={() => <Contact />} />
                      <Route path="/duck" exact component={() => <Duck />} />
                  </Switch>
                  <div className="fixed-bottom">
                      <Container>
                          <Row className="justify-content-md-center">
                              <Col md="auto">
                                  [<a href='https://github.com/juanmuscaria/juanmuscaria.com'>
                                      Src
                                  </a>]
                              </Col>
                              <Col md="auto">
                                  [
                                  <a href='https://juanmuscaria.com/'>
                                  juanmuscaria
                                  </a>
                                  <Link className="ant-spin-text" to="/duck">
                                      &copy;
                                  </Link>
                                  {new Date().getFullYear()}
                                  ]
                              </Col>
                              <Col md="auto">
                                  [<a href='https://github.com/juanmuscaria'>
                                      Github
                                  </a>]
                              </Col>
                          </Row>
                      </Container>
                  </div>
              </MemoryRouter>
          </div>
      </IntlProvider>,
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
