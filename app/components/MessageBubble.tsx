"use client";
import { motion } from "framer-motion";

export default function MessageBubble({
  text,
  role,
}: {
  text: string;
  role: "user" | "bot";
}) {
  const isUser = role === "user";

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className={`flex ${isUser ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`px-4 py-2 rounded-2xl max-w-[80%] text-sm leading-relaxed ${
          isUser
            ? "bg-blue-500 text-white rounded-br-sm"
            : "bg-neutral-200 text-neutral-900 rounded-bl-sm"
        }`}
      >
        {text}
      </div>
    </motion.div>
  );
}
