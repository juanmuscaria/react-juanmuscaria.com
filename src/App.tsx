import React from 'react';
import './App.less';
import {BrowserRouter, MemoryRouter, Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import NavigationBar from "./components/NavigationBar";
import GlobalFooter from "./components/GlobalFooter";
import { Layout } from 'antd';
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Duck from './pages/Duck';
const { Header, Footer, Content } = Layout;

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <MemoryRouter>
                    <Layout className="layout">
                        <Header style={{ height: 'auto' }}>
                           <Route component={NavigationBar}/>
                        </Header>
                        <Content style={{ padding: '40px' }}>
                            <Switch>
                                <Route path="/" exact component={() => <Home />} />
                                <Route path="/projects" exact component={() => <Projects />} />
                                <Route path="/contact" exact component={() => <Contact />} />
                                <Route path="/duck" exact component={() => <Duck />} />
                            </Switch>
                        </Content>
                    </Layout>
                    <Footer className="footer" style={{ textAlign: 'center'}}>
                        <GlobalFooter/>
                    </Footer>
                </MemoryRouter>
            </div>
        );
    }
}

export default App;
