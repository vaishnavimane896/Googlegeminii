const VITE_OPENROUTER_KEY="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";
async function Gemini(prompt) {
  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${VITE_OPENROUTER_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "openrouter/free",  
        messages: [{ role: "user", content: prompt }]
      })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error?.message || "API error");
    }

    return data.choices[0].message.content;

  } catch (error) {
    if (error?.message?.includes("429")) {
      throw new Error("Rate limit hit. Please wait a moment and try again.");
    }
    throw error;
  }
}

export default Gemini;
