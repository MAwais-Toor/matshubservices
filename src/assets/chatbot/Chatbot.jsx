import React, { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import chatQA from "./chatQA"; // apni Q/A wali file import

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [typing, setTyping] = useState(false);

    const chatContainerRef = useRef(null);

    // === Auto Scroll Function ===
    const scrollToBottom = () => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop =
                chatContainerRef.current.scrollHeight;
        }
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, typing]);

    // === Answer Finder ===
    const findAnswer = (userMsg) => {
        const lower = userMsg.toLowerCase();
        for (let item of chatQA) {
            for (let key of item.keywords) {
                if (lower.includes(key)) return item.answer;
            }
        }
        return `Sorry, I don’t have info on that yet 🤔.<br>
      <a href="https://wa.me/923001234567" target="_blank" class="text-blue-600 underline">
        Chat with us on WhatsApp
      </a>`;
    };

    // === Send Message ===
    const sendMessage = () => {
        if (!input.trim()) return;

        const userMsg = {
            sender: "user",
            text: input.trim(),
            time: new Date().toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
            }),
        };

        setMessages((prev) => [...prev, userMsg]);
        setInput("");
        setTyping(true);

        const answer = findAnswer(userMsg.text);
        const delay = Math.min(3000, answer.length * 50);

        setTimeout(() => {
            setTyping(false);
            const botMsg = {
                sender: "bot",
                text: answer,
                time: new Date().toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                }),
            };
            setMessages((prev) => [...prev, botMsg]);
        }, delay);
    };

    return (
        <div>
            {/* Floating Toggle */}

            <button
                onClick={() => setIsOpen((prev) => !prev)}
                className="fixed z-[9999] bottom-6 right-6 
    p-2 sm:p-3 md:p-4 rounded-full 
    bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 
    text-white shadow-lg shadow-blue-300/40 
    hover:scale-110 hover:rotate-6 transition transform flex items-center justify-center"
            >
                {isOpen ? <X size={20} className="sm:w-6 sm:h-6" /> : <MessageCircle size={20} className="sm:w-6 sm:h-6" />}
            </button>


            {/* Chatbot */}
            <div
                className={`fixed z-50 
    bottom-22 right-4 
    w-[80%] sm:w-96 max-w-sm
    max-h-[75dvh] sm:max-h-[85dvh] h-auto
    rounded-2xl 
    shadow-2xl overflow-hidden flex flex-col 
    backdrop-blur-2xl bg-white border border-blue-400/30 
    transition-all duration-500 transform 
    ${isOpen
                        ? "translate-y-0 opacity-100"
                        : "translate-y-[120%] opacity-0 pointer-events-none"
                    }`}
            >



                {/* Header */}
                <div
                    className="relative px-4 sm:px-5 py-2 sm:py-3 flex items-center gap-3 sm:gap-4
  bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 
  backdrop-blur-xl border-b border-white/20 shadow-lg"
                >
                    <div className="relative">
                        <div
                            className="absolute inset-0 rounded-full animate-ping 
      bg-gradient-to-r from-blue-400 to-blue-300 opacity-50"
                        ></div>
                        <img
                            src="https://i.ibb.co/6s1r9pC/bot.png"
                            alt="bot"
                            className="w-10 h-10 sm:w-12 sm:h-12 relative z-10 rounded-full 
      border-2 border-white shadow-md bg-white/20"
                        />
                    </div>

                    <div className="flex flex-col">
                        <h2 className="text-base sm:text-xl font-bold tracking-wide text-white drop-shadow-sm">
                            MATsBot
                        </h2>
                        <p className="text-[11px] sm:text-sm text-blue-200 font-light">
                            Your AI Assistant
                        </p>
                        <span className="text-green-400 text-[9px] sm:text-xs mt-1 flex items-center gap-1">
                            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                            Active Now
                        </span>
                    </div>
                </div>


                {/* Chat Container */}
                <div
                    ref={chatContainerRef}
                    className="flex flex-col space-y-2 overflow-y-auto 
            h-[20rem] sm:h-96 p-3 relative"
                >
                    {messages.length === 0 && (
                        <div className="absolute inset-0 flex items-center justify-center">
                            <img
                                src="https://cdn.dribbble.com/userupload/17215135/file/original-d9010db81823243083723c4ff1e1b909.gif"
                                alt="Chat Placeholder"
                                className="w-40 sm:w-56 opacity-80"
                            />
                        </div>
                    )}

                    {messages.map((msg, i) => (
                        <div
                            key={i}
                            className={`max-w-[80%] rounded-2xl shadow-sm break-words transition ${msg.sender === "user"
                                ? "bg-gradient-to-r from-blue-500 via-blue-500 to-blue-600 text-white self-end px-4 py-2"
                                : "bg-gradient-to-r from-gray-100 to-gray-200 self-start px-4 py-2"
                                }`}
                        >
                            {msg.sender === "bot" ? (
                                <div dangerouslySetInnerHTML={{ __html: msg.text }} />
                            ) : (
                                <div>{msg.text}</div>
                            )}
                            <span className="block text-[10px] text-gray-400 mt-1">
                                {msg.time}
                            </span>
                        </div>
                    ))}

                    {typing && (
                        <div className="max-w-[60%] px-3 py-2 rounded-2xl bg-gradient-to-r from-gray-100 to-gray-200 self-start flex gap-1 items-center shadow-sm">
                            <span className="dot"></span>
                            <span className="dot"></span>
                            <span className="dot"></span>
                        </div>
                    )}
                </div>

                {/* Input Bar */}
                <div
                    className="flex items-center gap-2 border-t border-white/20 
            bg-white/20 backdrop-blur-xl p-2 sm:p-4"
                >
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                        placeholder="Type your message..."
                        className="flex-1 px-3 sm:px-4 py-2 text-sm rounded-full 
              bg-white/30 border border-white/20 shadow-inner 
              placeholder-gray-500 text-gray-900 
              focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        onClick={sendMessage}
                        className="p-2 sm:p-3 bg-gradient-to-r from-blue-600 to-blue-500 
              rounded-full text-white hover:scale-110 
              shadow-lg transition transform flex items-center justify-center"
                    >
                        <Send size={18} className="sm:w-5 sm:h-5" />
                    </button>
                </div>
            </div>

            {/* Typing Dots CSS */}
            <style>{`
        .dot {
          width: 0.5rem;
          height: 0.5rem;
          background: #6b7280;
          border-radius: 9999px;
          animation: bounce 1s infinite;
        }
        .dot:nth-child(2) {
          animation-delay: 0.2s;
        }
        .dot:nth-child(3) {
          animation-delay: 0.4s;
        }
        @keyframes bounce {
          0%, 80%, 100% { transform: scale(0.8); opacity: 0.5; }
          40% { transform: scale(1); opacity: 1; }
        }
          .chat-container {
            flex: 1;
            overflow-y: auto;
          }

      `}</style>
        </div>
    );
}
