import { useState } from 'react';
import entreprenoteicon from '../public/entreprenote_icon.svg';
import './App.css';

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
          <div className="placeholder">
            Replace this placeholder with your widget component.
            <br />
            <span className="code">{`<YourWidgetComponent />`}</span>
          </div>
        </div>
      </section>
    </div>
  );
}
