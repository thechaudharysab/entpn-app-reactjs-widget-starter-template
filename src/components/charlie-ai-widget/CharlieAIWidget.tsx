import { useEffect, useRef, useState } from "react";

type Role = "user" | "ai";
type ChatMessage = { id: string; role: Role; text: string };

const INITIAL_MESSAGES: ChatMessage[] = [
  { id: "m1", role: "ai", text: "Hey, I’m Charlie. Ask me about your notes." },
];

const QUICK_ACTIONS = [
  "Summarize this chapter",
  "Find related notes",
  "Draft a response",
  "Make a TODO list",
];

export function CharlieChatWidget() {
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState("");
  const [isActionsOpen, setIsActionsOpen] = useState(false);

  const listRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // auto-scroll to bottom
    const el = listRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, [messages.length]);

  const send = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    const userMsg: ChatMessage = {
      id: `u-${Date.now()}`,
      role: "user",
      text: trimmed,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsActionsOpen(false);

    // demo AI reply (replace with real call)
    window.setTimeout(() => {
      const aiMsg: ChatMessage = {
        id: `a-${Date.now()}`,
        role: "ai",
        text: "Got it — I can help with that. (Demo response)",
      };
      setMessages((prev) => [...prev, aiMsg]);
    }, 450);
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
                  src="/charlie-icon.svg"
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
        <button
          type="button"
          className="charlieBolt"
          aria-label="Quick actions"
          onClick={() => setIsActionsOpen((v) => !v)}
        >
          ✨
        </button>

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