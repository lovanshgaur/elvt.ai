import Header from "../components/Header";
import SettingBtn from "../components/SettingBtn";
import { useState } from "react";
import { generateResponse, resumeAnalyzer } from "../services/aiService";

const Analyzer = () => {
  const [prompt, setPrompt] = useState("");
  const [output, setOutput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(prompt);
    const result = resumeAnalyzer(prompt);
    setOutput(result);
  };
  return (
    <>
      <Header />
      <SettingBtn />
      <h1>Analyzer - not yet analyzing</h1>
      <form onSubmit={handleSubmit}>
        <textarea
        placeholder="Enter a resume point you want to upgrade"
          name="prompt"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <div className="output">{output}</div>
    </>
  );
};

export default Analyzer;
