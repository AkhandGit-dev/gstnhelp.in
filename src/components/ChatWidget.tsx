import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';

type Message = {
  id: string;
  text: string;
  sender: 'user' | 'bot';
};

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [step, setStep] = useState<'init' | 'awaiting_details' | 'completed'>('init');
  const [isSending, setIsSending] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim()) return;

    const userText = input;
    const userMsg: Message = {
      id: Date.now().toString(),
      text: userText,
      sender: 'user',
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsSending(true);

    // Bot Logic
    if (step === 'init') {
      // Simulate typing delay
      setTimeout(() => {
        const botMsg: Message = {
          id: (Date.now() + 1).toString(),
          text: "Thanks for connecting GSTnHELP team , please help us with with your name and contact details like phone number and email address to contact with a GST expert",
          sender: 'bot',
        };
        setMessages((prev) => [...prev, botMsg]);
        setStep('awaiting_details');
        setIsSending(false);
      }, 800);
    } else if (step === 'awaiting_details') {
      // Attempt to submit details to backend
      try {
        const formData = new FormData();
        // Simple extraction or fallback
        const phoneMatch = userText.match(/[\d\+\-\(\) ]{10,}/);
        const emailMatch = userText.match(/[\w\.-]+@[\w\.-]+\.\w+/);

        formData.append('name', 'Chat Visitor'); 
        formData.append('caseType', 'Chat Inquiry');
        formData.append('description', `Chat Log: ${userText}`);
        formData.append('preferredContact', 'WhatsApp');
        formData.append('phone', phoneMatch ? phoneMatch[0] : 'Not provided in chat');
        if (emailMatch) formData.append('email', emailMatch[0]);

        // We send this to your existing API
        await axios.post('/api/leads', formData);
      } catch (error) {
        console.error('Chat lead submission error', error);
      }

      setTimeout(() => {
        const botMsg: Message = {
          id: (Date.now() + 1).toString(),
          text: "Thanks! We have received your details. A GST expert will connect with you shortly.",
          sender: 'bot',
        };
        setMessages((prev) => [...prev, botMsg]);
        setStep('completed');
        setIsSending(false);
      }, 1000);
    } else {
      setIsSending(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white w-80 md:w-96 h-[450px] rounded-xl shadow-2xl border border-gray-200 flex flex-col mb-4 overflow-hidden animate-fade-in-up">
          {/* Header */}
          <div className="bg-blue-900 text-white p-4 flex justify-between items-center">
            <div>
              <h3 className="font-bold">GSTN Help Support</h3>
              <p className="text-xs text-blue-200">Online • Replies instantly</p>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-200">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 bg-gray-50 space-y-4">
            {messages.length === 0 && (
              <div className="text-center text-gray-400 text-sm mt-10">
                <p>👋 Hi! How can we help you with GST today?</p>
              </div>
            )}
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-lg text-sm ${msg.sender === 'user' ? 'bg-blue-600 text-white rounded-br-none' : 'bg-white border border-gray-200 text-gray-800 rounded-bl-none shadow-sm'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isSending && (
              <div className="flex justify-start">
                <div className="bg-gray-200 text-gray-500 text-xs px-3 py-2 rounded-full">Typing...</div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSend} className="p-3 bg-white border-t border-gray-100 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-blue-500"
            />
            <button type="submit" className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
            </button>
          </form>
          
          {/* WhatsApp Direct Link */}
          <div className="bg-green-50 p-2 text-center border-t border-green-100">
            <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer" className="text-xs font-bold text-green-700 hover:underline flex items-center justify-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-8.683-2.031-9.667-.272-.099-.47-.149-.669-.149-.198 0-.42.001-.643.001-.223 0-.585.085-.891.41-.306.326-1.168 1.141-1.168 2.784 0 1.642 1.194 3.227 1.361 3.449.167.223 2.35 3.586 5.694 5.029 2.791 1.204 3.359.964 3.978.903.619-.06 1.983-.81 2.261-1.591.278-.781.278-1.45.195-1.592z"/></svg>
              Prefer WhatsApp? Click here
            </a>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${isOpen ? 'bg-gray-500' : 'bg-blue-600 hover:bg-blue-700'} text-white p-4 rounded-full shadow-lg transition-all transform hover:scale-105 flex items-center justify-center`}
      >
        {isOpen ? (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        ) : (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
        )}
      </button>
    </div>
  );
};

export default ChatWidget;