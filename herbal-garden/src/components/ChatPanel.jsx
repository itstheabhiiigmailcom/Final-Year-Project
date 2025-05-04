// components/chat/ChatPanel.jsx
import { useChatPanel } from '../context/ChatPanelContext';
import { motion } from 'framer-motion';

const ChatPanel = () => {
  const { isOpen, closePanel } = useChatPanel();

  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: isOpen ? 0 : '100%' }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-50 flex flex-col"
    >
      <div className="p-4 border-b flex justify-between items-center">
        <h2 className="text-lg font-semibold">AI Assistant</h2>
        <button onClick={closePanel}>✕</button>
      </div>
      <div className="flex-1 p-4 overflow-y-auto">
        {/* Chat history or messages here */}
        <p className="text-gray-500">Hello! How can I assist you today?</p>
      </div>
      <div className="p-4 border-t">
        <input
          type="text"
          placeholder="Type a message..."
          className="w-full p-2 border rounded"
        />
      </div>
    </motion.div>
  );
};

export default ChatPanel;
