import { GoogleGenAI } from "@google/genai";
const key = import.meta.env.VITE_KEY;
const ai = new GoogleGenAI({
  apiKey: key
});

export async function generateResponse(prompt) {
  console.log(prompt);
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt
  });
  const text = response.text;
  console.log(text);
  return text;
}

export async function resumeAnalyzer(resumeData) {
  console.log(resumeData);
  const newPrompt = `You are a professional resume writer.Rewrite this bullet point using the STAR method and action verbs: "${resumeData}"`;
  const response = generateResponse(newPrompt)
  console.log(response)
  return response;

}
