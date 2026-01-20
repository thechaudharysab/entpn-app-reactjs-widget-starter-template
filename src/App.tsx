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
          <div className="panelTitle">How To?</div>
          <div className="counter">
            <span>Count: {count}</span>
            <button type="button" onClick={() => setCount((c) => c + 1)}>
              Increment
            </button>
          </div>
        </div>

        <p className="help">
          Read the <span className="code">README.md</span> to see how to guide. In <span className="code">App.tsx</span> <b>Import</b> your widget and render it inside the <span className="code">widgetAreaBody</span> area below by
          replacing the placeholder content.
          <br />
          Example: <span className="code">{`<YourWidgetComponent />`}</span>
        </p>
      </section>

      <section className="panel previewWrap">
        <div className="widgetArea">
          <div className="widgetAreaBody">
          <p>Preview:{" "} 
          <span className="help" style={{marginBottom: 12}}>
          Your widget will have to be within <span className="code">{`360px`}</span> width. There is also <span className="code">padding: 16px;</span> applied to the right sidebar to all widgets by default on entreprenote app so you don't have to add any margins.
        </span> </p>
        {/* Import and render <YourWidgetComponent /> here */}
            {/* <CharlieChatWidget /> */}
            Replace this placeholder with your widget component.
          </div>
        </div>
      </section>
    </div>
  );
}
