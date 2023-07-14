import { useEffect, useState } from "react";

function QuoteComponent() {
  const [quote, setQuote] = useState({});

  const changeQuote = () => {
    fetch("https://christinamifsud-quote-server.glitch.me/quotes/random")
      .then((response) => response.json())
      .then((data) => {
        setQuote(data);
      })
      .catch((error) => console.error(error));
  };

  useEffect(changeQuote, []);

  return (
    <div className="quoteComponent">
      <p className="quote">{quote.quote}</p>
      <p className="author">{quote.author}</p>
      <button onClick={changeQuote}>Click Me</button>
    </div>
  );
}

export default QuoteComponent;
