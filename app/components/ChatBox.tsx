
"use client";
import { useState, useEffect, useRef } from "react";
import MessageBubble from "./MessageBubble";

export default function ChatBox() {
  const [messages, setMessages] = useState<
    { text: string; role: "user" | "bot" }[]
  >([]);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  const send = () => {
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { text: input, role: "user" }]);
    const userText = input;
    setInput("");

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { text: `Bot menjawab: ${userText}`, role: "bot" },
      ]);
    }, 600);
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex-1 flex flex-col relative">
      <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
        {messages.map((msg, idx) => (
          <MessageBubble key={idx} text={msg.text} role={msg.role} />
        ))}
        <div ref={bottomRef} />
      </div>

      <div className="sticky bottom-0 p-3 bg-white border-t">
        <div className="flex gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && send()}
            className="flex-1 rounded-full border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Ketik pesan..."
          />
          <button
            className="bg-blue-500 text-white px-4 rounded-full"
            onClick={send}
          >
            Kirim
          </button>
        </div>
      </div>
    </div>
  );
          }
