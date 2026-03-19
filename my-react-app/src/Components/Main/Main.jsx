import React, { useContext } from "react";
import "./Main.css";
import { Asset } from "../../assets/Asset";
import { Context } from "../../context/Context";

const Main = () => {
  const { input, setInput, onSent, showResult, loading, resultData, recentPrompt } =
    useContext(Context);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && input.trim()) {
      onSent(input);
    }
  };

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={Asset.user} alt="" />
      </div>

      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, Vaishnavi</span>
              </p>
              <p>How can I help you today?</p>
            </div>

            <div className="cards">
              <div className="card" onClick={() => onSent("Suggest beautiful places to visit on road trip")}>
                <p>Suggest beautiful places to visit on a road trip</p>
                <img src={Asset.compass} alt="" />
              </div>
              <div className="card" onClick={() => onSent("Briefly summarize this concept: urban planning")}>
                <p>Briefly summarize this concept: urban planning</p>
                <img src={Asset.bulb} alt="" />
              </div>
              <div className="card" onClick={() => onSent("Brainstorm team bonding activities for our work retreat")}>
                <p>Brainstorm team bonding activities for our work retreat</p>
                <img src={Asset.message} alt="" />
              </div>
              <div className="card" onClick={() => onSent("Improve the readability of the following code")}>
                <p>Improve the readability of the following code</p>
                <img src={Asset.code} alt="" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={Asset.user} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={Asset.gemini_icon} alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              type="text"
              placeholder="Enter a prompt here"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <div>
              <img src={Asset.Gallary} alt="" />
              <img src={Asset.mic} alt="" />
              {input.trim() && (
                <img
                  src={Asset.send}
                  alt="Send"
                  onClick={() => onSent(input)}
                  style={{ cursor: "pointer" }}
                />
              )}
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so
            double-check its responses.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
