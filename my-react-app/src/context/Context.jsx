import { createContext, useState, useCallback } from "react";
import Gemini from "../Confirge/Gemini";

export const Context = createContext();

// Converts markdown to clean HTML
const formatResponse = (text) => {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    // Code blocks (must come before inline code)
    .replace(/```[\w]*\n?([\s\S]*?)```/g, "<pre><code>$1</code></pre>")
    // Inline code
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    // Bold
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    // Italic
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    // Headers
    .replace(/^### (.+)$/gm, "<h3>$1</h3>")
    .replace(/^## (.+)$/gm, "<h2>$1</h2>")
    .replace(/^# (.+)$/gm, "<h1>$1</h1>")
    // Unordered lists
    .replace(/^\s*[-*] (.+)$/gm, "<li>$1</li>")
    .replace(/(<li>.*<\/li>)/gs, "<ul>$1</ul>")
    // Numbered lists
    .replace(/^\d+\. (.+)$/gm, "<li>$1</li>")
    // Paragraphs (blank lines)
    .replace(/\n{2,}/g, "</p><p>")
    // Single line breaks
    .replace(/\n/g, "<br/>")
    .replace(/^(.+)$/, "<p>$1</p>");
};

const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompts, setPrevPrompts] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  // ✅ useCallback + loading guard prevents double API calls
  const onSent = useCallback(async (prompt) => {
    if (loading || !prompt?.trim()) return; // ✅ Prevents re-entry while loading

    setResultData("");
    setLoading(true);
    setShowResult(true);
    setRecentPrompt(prompt);
    setPrevPrompts((prev) =>
      prev.includes(prompt) ? prev : [...prev, prompt]  // ✅ No duplicate entries
    );

    try {
      const response = await Gemini(prompt);
      setResultData(formatResponse(response)); // ✅ Format markdown properly
    } catch (error) {
      setResultData(`<p style="color:#ef4444">${error.message || "Something went wrong. Please try again."}</p>`);
      console.error(error);
    } finally {
      setLoading(false);
      setInput("");
    }
  }, [loading]);

  // ✅ New chat resets to home screen
  const newChat = useCallback(() => {
    setShowResult(false);
    setResultData("");
    setInput("");
    setRecentPrompt("");
  }, []);

  const contextValue = {
    input,
    setInput,
    recentPrompt,
    prevPrompts,
    showResult,
    loading,
    resultData,
    onSent,
    newChat,
  };

  return (
    <Context.Provider value={contextValue}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
