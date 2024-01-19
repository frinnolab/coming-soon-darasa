import React from 'react';
import { ReactComponent as IconFacebook } from './assets/icons/facebook.svg';
import { ReactComponent as IconTwitter } from './assets/icons/twitter.svg';
import { ReactComponent as IconGithub } from './assets/icons/github.svg';
import "./App.css";

class App extends React.Component {
  render = () => {
    return (
      <div className="card">
        <div className="header">
          <div className="logo">
            <a href=".">DarasaTech</a>
          </div>
          <div className="social">
    
            <a href="https://github.com/frinnolab" title="GitHub" target="_blank" rel="noopener noreferrer">
              <IconGithub className="icon" />
            </a>
          </div>
        </div>
        <div className="content">
          <div className="title-holder">
            <h1>We cant wait to meet you.</h1>
            <p>We are currently under construction . Please check back often .</p>
          </div>
          <a href="mailto:dev.frinno@gmail.com">
            <div className="cta">Send us an email</div>
          </a>
        </div>
        <div className="footer">
          
        </div>
      </div>
    );
  }
}

export default App;