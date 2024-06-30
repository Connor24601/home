import logo from './resources/raccoonlogo.PNG';
import './App.css';
import Guideline from './anims.js';

function App() {
  //<img src={logo} className="App-logo" alt="logo" />
  return (
    <div className="App">
      <header className="App-header">
        
        <svg id="title" width="100%" viewBox="-20 0 520 300" xmlns="http://www.w3.org/2000/svg" alt="SSOSS">
          <Guideline length="250" x="237.5" y="200" animateY="50" id="GuidelineTop"/>
          <Guideline length="250" x="237.5" y="200" animateY="-50" id="GuidelineBottom"/>
          <path className="test" d="M 237.5 400 l 0 -500" stroke="red" stroke-width="1" fill="none"/>
          <path className="curve" id="curveBottom" d="M 200 200 a 10 10 0 0 0 75 0 a 10 10 0 0 0 -75 0" stroke="white" stroke-width="12" fill="none"/>
          
          <path className="S" id="S1" d="M 100 162.5 l -40 0 a 4.5 4.5 0 0 0 0 37.5 l 20 0 a 4.5 4.5 0 0 1 0 37.5 l -40 0" stroke="white" stroke-width="12" fill="none" preserveAspectRatio="xMidYMid meet"/>
          <path className="S" id="S2" d="M 180 162.5 l -40 0 a 4.5 4.5 0 0 0 0 37.5 l 20 0 a 4.5 4.5 0 0 1 0 37.5 l -40 0" stroke="white" stroke-width="12" fill="none" preserveAspectRatio="xMidYMid meet"/>
          <path className="S" id="S3" d="M 360 162.5 l -40 0 a 4.5 4.5 0 0 0 0 37.5 l 20 0 a 4.5 4.5 0 0 1 0 37.5 l -40 0" stroke="white" stroke-width="12" fill="none" preserveAspectRatio="xMidYMid meet"/>
          <path className="S" id="S4" d="M 440 162.5 l -40 0 a 4.5 4.5 0 0 0 0 37.5 l 20 0 a 4.5 4.5 0 0 1 0 37.5 l -40 0" stroke="white" stroke-width="12" fill="none" preserveAspectRatio="xMidYMid meet"/>
          
        </svg>
        
      </header>
      <body className="body-content">
        <div className="content"></div>
        <footer>
          <small id="copyright">Distributed under the MIT license, copyright 2024</small>
      </footer>

      </body>

    </div>
  );
}

export default App;

//<path className="Guideline" id="test" d='M 200 200 l 500 0 l -1000 0' stroke="orange" stroke-width="1"/>
          //<path className="guideLine" id="guideLineBottom" d="M 200 244.5 l 500 0 l -1000 0" stroke="orange" stroke-width="1"/>
          //<path className="guideLine" id="guideLineTop" d="M 200 155.5 l 500 0 l -1000 0" stroke="orange" stroke-width="1"/>