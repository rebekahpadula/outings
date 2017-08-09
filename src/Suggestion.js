import React from 'react';

// dumb anonymous function. gets its name from import
export default (props) => {
  return (
    <div className="suggestion">
      {/* accessing suggestions array */}
      <p>{props.suggestion.suggestor}</p>
      <p>{props.suggestion.activity}</p>
      <p>{props.suggestion.place}</p>
      <p>{props.suggestion.time}</p>
      <div className="votes">
        <button className="votes__down" onClick={props.updateVotes}><span role="img" aria-label="thumbs down">👎</span></button>
        <button className="votes__up" onClick={props.updateVotes}><span role="img" aria-label="thumbs up">👍</span></button>
      </div>
    </div>
  );
}