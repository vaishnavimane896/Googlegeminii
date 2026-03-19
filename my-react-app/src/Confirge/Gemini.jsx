const apikey ="AIzaSyCigcMZxLTfNIPwfpARIpzkkzmtH_OwK6o"

import  GoogleGenAI  from "@google/genai";

async function generate() {
  const ai = new GoogleGenAI({
    apiKey: "AIzaSyCigcMZxLTfNIPwfpARIpzkkzmtH_OwK6o ",
  });

  const model = "gemini-3-flash-preview";

  const contents = [
    {
      role: "user",
      parts: [
        { text: "INSERT_INPUT_HERE" }
      ],
    },
  ];

  const config = {
    thinkingConfig: {
      thinkingLevel: "HIGH",
    },
    tools: [
      {
        googleSearch: {},
      },
    ],
  };

  const response = await ai.models.generateContentStream({
    model,
    contents,
    config,
  });

  for await (const chunk of response) {
    process.stdout.write(chunk.text || "");
  }
}

generate().catch(console.error);

export default Gemini;