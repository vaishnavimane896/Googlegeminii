import React, { useContext } from "react";
import "./Main.css";
import { Asset } from "../../assets/Asset";
import { Context } from "../../context/Context";

const Main = () => {
  const { input, setInput, onSent, showResult, loading, resultData, recentPrompt, newChat } =
    useContext(Context);

  const handleKeyDown = (e) => {
    // ✅ Prevent firing while loading
    if (e.key === "Enter" && input.trim() && !loading) {
      onSent(input);
    }
  };

  const handleSend = () => {
    // ✅ Prevent firing while loading
    if (input.trim() && !loading) {
      onSent(input);
    }
  };

  return (
    <div className="main">
      <div className="nav">
        {/* ✅ Clicking title resets to home */}
        <p onClick={newChat} className="nav-title">Gemini</p>
        <div className="nav-right">
          <span className="nav-badge">AI</span>
          <img src={Asset.user} alt="User" className="nav-avatar" />
        </div>
      </div>

      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p><span>Hello, Vaishnavi 👋</span></p>
              <p>How can I help you today?</p>
            </div>

            <div className="cards">
              <div className="card" onClick={() => onSent("Suggest beautiful places to visit on a road trip")}>
                <p>Suggest beautiful places to visit on a road trip</p>
                <img src={Asset.compass} alt="Compass" />
              </div>
              <div className="card" onClick={() => onSent("Briefly summarize this concept: urban planning")}>
                <p>Briefly summarize this concept: urban planning</p>
                <img src={Asset.bulb} alt="Bulb" />
              </div>
              <div className="card" onClick={() => onSent("Brainstorm team bonding activities for our work retreat")}>
                <p>Brainstorm team bonding activities for our work retreat</p>
                <img src={Asset.message} alt="Message" />
              </div>
              <div className="card" onClick={() => onSent("Improve the readability of the following code")}>
                <p>Improve the readability of the following code</p>
                <img src={Asset.code} alt="Code" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={Asset.user} alt="User" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src='' alt="Gemini" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                /* ✅ resultData is now pre-formatted HTML from Context */
                <div className="result-content" dangerouslySetInnerHTML={{ __html: resultData }} />
              )}
            </div>

            {/* ✅ New chat button inside result view */}
            <button className="new-chat-btn" onClick={newChat}>
              + New Chat
            </button>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              type="text"
              placeholder="Ask Gemini anything..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={loading} 
            />
            <div className="search-icons">
              <img src={Asset.Gallary} alt="Gallery" title="Attach image" />
              <img src={Asset.mic} alt="Mic" title="Voice input" />
              {input.trim() && !loading && (
                <img
                  src={Asset.send}
                  alt="Send"
                  onClick={handleSend}
                  className="send-btn"
                />
              )}
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so
            double-check its responses. Your privacy is protected.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
