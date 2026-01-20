import { useEffect, useRef, useState } from "react";

import "./styles.css"
import { CharlieAIService } from "../../api/charlie-ai-widget/CharlieAIService";

type Role = "user" | "ai";
type ChatMessage = { id: string; role: Role; text: string };

const QUICK_ACTIONS = [
  "Summarize this chapter",
  "Find related notes",
  "Draft a response",
  "Make a TODO list",
];

export function CharlieChatWidget() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isActionsOpen, setIsActionsOpen] = useState(false);

  const listRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    void (async () => {
      const data = await CharlieAIService.getAll();
      setMessages(data as unknown as ChatMessage[]);
    })();
  }, []);

  useEffect(() => {
    // auto-scroll to bottom
    const el = listRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, [messages.length]);

  const send = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;
  
    setInput("");
    setIsActionsOpen(false);
  
    await CharlieAIService.send(trimmed);
    const updated = await CharlieAIService.getAll();
    setMessages(updated as unknown as ChatMessage[]);
  };

  return (
    <div className="charlieWidget">
      <div className="charlieHeader">
        <div className="charlieTitle">Ask Charlie Example</div>
        <span className="charlieMeta">AI v1.0</span>
      </div>

      <div className="charlieMessages" ref={listRef}>
        {messages.map((m) => {
          const isUser = m.role === "user";
          return (
            <div
              key={m.id}
              className={isUser ? "charlieRow user" : "charlieRow ai"}
            >
              {!isUser && (
                <img
                  src="./charlie-ai-widget/charlie-icon.png"
                  alt="Charlie"
                  className="charlieAvatar"
                />
              )}
              <div className={isUser ? "charlieBubble user" : "charlieBubble ai"}>
                {m.text}
              </div>
            </div>
          );
        })}
      </div>

      <div className="charlieComposer">
      <div className="counter">
            <button type="button" className="charlieBolt" onClick={() => setIsActionsOpen((v) => !v)}>
            🪄
            </button>
          </div>
        {/* <button
          type="button"
          className="charlieBolt"
          aria-label="Quick actions"
          onClick={() => setIsActionsOpen((v) => !v)}
        >
          <p className="charlieBoltText">C</p>
        </button> */}

        <input
          className="charlieInput"
          value={input}
          placeholder="Message Charlie…"
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") send(input);
          }}
        />

        <button
          type="button"
          className="charlieSend"
          onClick={() => send(input)}
          disabled={!input.trim()}
        >
          Send
        </button>

        {isActionsOpen && (
          <div className="charlieQuickMenu" role="menu">
            {QUICK_ACTIONS.map((label) => (
              <button
                key={label}
                type="button"
                className="charlieQuickItem"
                onClick={() => send(label)}
              >
                <img src="/ai-icon.svg" alt="" className="charlieMenuIcon" />
                <span>{label}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}