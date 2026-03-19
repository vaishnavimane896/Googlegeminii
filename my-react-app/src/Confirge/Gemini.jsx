import { GoogleGenAI } from "@google/genai";

const apiKey = "AIzaSyB9qLHwkxmuHb9v7SnZ-85b6ZpPhFzj5Yc";

const ai = new GoogleGenAI({ apiKey });

async function Gemini(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: prompt,
  });

  return response.text;
}

export default Gemini;
