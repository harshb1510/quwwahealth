import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { FiMessageSquare, FiSend, FiX } from 'react-icons/fi';
import quwwaLogo from '../assets/images/header.png';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatContainerRef = useRef(null);

  const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

  useEffect(() => {
    // Scroll to the bottom whenever messages change
    if (chatContainerRef.current) {
        chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = { sender: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
      const chat = model.startChat({
        history: messages.map(msg => ({
          role: msg.sender === 'user' ? 'user' : 'model',
          parts: [{ text: msg.text }],
        })),
        generationConfig: {
          maxOutputTokens: 200,
        },
      });

      const result = await chat.sendMessage(input);
      const response = await result.response;
      const text = response.text();
      
      setMessages((prev) => [...prev, { sender: 'bot', text }]);
    } catch (error) {
      console.error('Gemini API error:', error);
      setMessages((prev) => [...prev, { sender: 'bot', text: 'Sorry, I encountered an error. Please try again.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Chat Bubble */}
      <div className="fixed bottom-8 right-8 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-[#54BD95] text-white w-16 h-16 rounded-full shadow-lg flex items-center justify-center hover:bg-green-600 transition-transform transform hover:scale-110"
        >
          {isOpen ? <FiX size={28} /> : <FiMessageSquare size={28} />}
        </button>
      </div>

      {/* Chat Window */}
      <div
        className={`fixed bottom-28 right-8 z-50 w-96 bg-white rounded-2xl shadow-xl transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="bg-[#54BD95] p-4 rounded-t-2xl flex items-center gap-4">
            <img src={quwwaLogo} alt="Quwwa Health" className="h-8 bg-white p-1 rounded-md" />
            <div>
                <h3 className="font-bold text-white text-lg">Quwwa Health Assistant</h3>
                <p className="text-xs text-green-100">Powered by Gemini</p>
            </div>
        </div>

        {/* Messages */}
        <div ref={chatContainerRef} className="h-96 p-4 overflow-y-auto space-y-4">
          <div className="flex justify-start">
            <div className="max-w-xs px-4 py-2 rounded-2xl bg-gray-100 text-gray-800 rounded-bl-none">
                Hello! I am the Quwwa Health assistant. How can I help you today?
            </div>
          </div>
          {messages.map((msg, index) => (
            <div key={index} className={`flex ${msg.sender === 'bot' ? 'justify-start' : 'justify-end'}`}>
              <div
                className={`max-w-xs px-4 py-2 rounded-2xl ${
                  msg.sender === 'bot'
                    ? 'bg-gray-100 text-gray-800 rounded-bl-none'
                    : 'bg-green-500 text-white rounded-br-none'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
                 <div className="bg-gray-100 text-[#A6A6A6] px-4 py-2 rounded-2xl rounded-bl-none">
                    Typing...
                 </div>
            </div>
          )}
        </div>

        {/* Input Form */}
        <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-200 flex items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask something..."
            className="w-full px-4 py-2 bg-gray-100 rounded-full border-transparent focus:outline-none focus:ring-2 focus:ring-[#54BD95]"
            disabled={isLoading}
          />
          <button
            type="submit"
            className="bg-[#54BD95] text-white p-3 rounded-full hover:bg-green-600 disabled:bg-gray-300"
            disabled={isLoading || !input.trim()}
          >
            <FiSend size={20} />
          </button>
        </form>
      </div>
    </>
  );
};

export default Chatbot; 