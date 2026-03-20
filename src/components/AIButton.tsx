import React from "react";

const AIButton = () => {
  const handleClick = () => {
    window.open("https://chat.openai.com/", "_blank"); 
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-20 right-6 z-50 p-3 rounded-full 
                 bg-gradient-to-r from-purple-500 to-pink-500 
                 text-white font-bold 
                 shadow-[0_0_15px_rgba(168,85,247,0.6),0_0_30px_rgba(255,0,150,0.4)] 
                 hover:shadow-[0_0_20px_rgba(168,85,247,0.8),0_0_40px_rgba(255,0,150,0.6),0_0_60px_rgba(255,255,255,0.3)] 
                 transition-all duration-300 transform hover:scale-110"
      title="Chat with AI"
    >
      🤖
    </button>
  );
};

export default AIButton;