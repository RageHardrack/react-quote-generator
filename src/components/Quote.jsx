import React from "react";

export default function Quote({ quote }) {
  return (
    <div className="quote">
      <div className="anime" title={quote.anime}>
        {quote.anime}
      </div>

      <blockquote>{quote.quote}</blockquote>

      <div className="character" title={quote.character}>
        {quote.character}
      </div>
    </div>
  );
}
