import React, { useState, useEffect } from "react";
import Quote from "./components/Quote";

export default function App() {
  const [quote, setQuote] = useState({
    anime: null,
    character: null,
    quote: null,
  });

  const fetchQuote = async () => {
    return await fetch("https://animechan.vercel.app/api/random").then((res) =>
      res.json()
    );
  };

  const generate = async () => {
    setQuote(await fetchQuote());
  };

  useEffect(() => {
    generate();
  }, []);

  return (
    <div className="App">
      <Quote quote={quote} />

      <button onClick={generate}>Generate new quote</button>
    </div>
  );
}
