import { useState } from 'react';
import entreprenoteicon from '../public/entreprenote_icon.svg';
import './App.css';
import { CharlieChatWidget } from './components/charlie-ai-widget/CharlieAIWidget';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="page">
      <header className="header">
        <a
          className="brand"
          href="https://entreprenote.com"
          target="_blank"
          rel="noreferrer"
        >
          <img src={entreprenoteicon} alt="Entreprenote" />
          <span>Entreprenote</span>
        </a>
        <div className="subtitle">Widget Simulator</div>
      </header>

      <section className="panel">
        <div className="panelHeader">
          <div className="panelTitle">How to use</div>
          <div className="counter">
            <span>Count: {count}</span>
            <button type="button" onClick={() => setCount((c) => c + 1)}>
              Increment
            </button>
          </div>
        </div>

        <p className="help">
          Import your widget and render it inside the preview area below by
          replacing the placeholder content.
          <br />
          Example: <span className="code">{`<YourWidgetComponent />`}</span>
        </p>
      </section>

      <section className="panel previewWrap">
        {/* Import and render <YourWidgetComponent /> inside this div */}
        <div className="widgetArea">
          <div className="widgetAreaBody">
          <h3>Preview (360px)</h3>
          <p className="help">
          Your widget will have to be within <span className="code">{`360px`}</span> width. There is also <span className="code">padding: 16px;</span> applied to the right sidebar on entreprenote app.
        </p>
            <CharlieChatWidget />
            {/* Replace this placeholder with your widget component. */}
          </div>
        </div>
        {/* <div className="widgetArea"> */}
          {/* <CharlieChatWidget /> */}
          {/* <div className="widgetAreaBody">
            Replace this placeholder with your widget component.
            <br /> */}
            {/* <span className="code">{`<YourWidgetComponent />`}</span> */}
          {/* </div> */}
        {/* </div> */}
      </section>
    </div>
  );
}
