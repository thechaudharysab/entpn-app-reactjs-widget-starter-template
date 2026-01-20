// CharlieAIService.ts (dummy/local)

export type Role = "user" | "ai";
export type ChatMessage = { id: string; role: Role; text: string; createdAt: number };

let _messages: ChatMessage[] = [
  { id: "m1", role: "ai", text: "Hey, I’m Charlie. Ask me about your notes.", createdAt: Date.now() },
];

const wait = (ms: number) => new Promise((r) => setTimeout(r, ms));

export const CharlieAIService = {
  // Get all messages
  async getAll() {
    await wait(120);
    return [..._messages].sort((a, b) => a.createdAt - b.createdAt);
  },

  // Send a user message and append a dummy AI reply
  async send(text: string) {
    const trimmed = text.trim();
    if (!trimmed) throw new Error("Message is empty");

    const userMsg: ChatMessage = {
      id: `u-${Date.now()}`,
      role: "user",
      text: trimmed,
      createdAt: Date.now(),
    };

    _messages = [..._messages, userMsg];

    await wait(350);

    const aiMsg: ChatMessage = {
      id: `a-${Date.now()}`,
      role: "ai",
      text: "Got it — I can help with that. (Demo response)",
      createdAt: Date.now(),
    };

    _messages = [..._messages, aiMsg];

    return { userMsg, aiMsg };
  },

  // Clear chat
  async clear() {
    _messages = [
      { id: "m1", role: "ai", text: "Hey, I’m Charlie. Ask me about your notes.", createdAt: Date.now() },
    ];
    return this.getAll();
  },
};