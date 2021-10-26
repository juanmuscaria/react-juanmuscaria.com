import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import WinBox from "winbox";

function App() {
  return (
      <div>
        <div className="App crt">
          <header className="App-header crtFlick">
              <button onClick={ ()=>{
                  const win = new WinBox("My app",{ width : 300, height : 500 });
                  ReactDOM.render(React.createElement(()=> {
                      return <a
                          className="App-link"
                          href="https://reactjs.org"
                          target="_blank"
                          rel="noopener noreferrer"
                      >
                          Learn React
                      </a>;
                  }), win.body);
                  win.show();
              }}>aaaaa</button>
            <img src={logo} className="App-logo crtFlick" alt="logo" />
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
              Learn React
            </a>
              <video autoPlay loop src="https://media.juanmuscaria.com/duck.mp4"/>
          </header>
        </div>
      </div>
);
}

export default App;
