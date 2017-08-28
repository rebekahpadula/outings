import React from 'react';
import styled from 'styled-components';


const Suggestion = styled.section`
  background-color: aliceblue;
`;

const Votes = styled.div``;

const Thumb = styled.span`
  cursor: pointer;
  margin: 10px;
  display: inline-block;
`;

const Suggestor = styled.p``;
const Activity = styled.p``;
const Place = styled.p``;
const Time = styled.p``;
const DownVotes = styled.span``;
const UpVotes = styled.span``;


// dumb anonymous function. gets its name from import
export default (props) => {
  return (
    <Suggestion className="suggestion">
      {/* accessing suggestions array */}
      <Suggestor>{props.suggestion.suggestor}</Suggestor>
      <Activity>{props.suggestion.activity}</Activity>
      <Place>{props.suggestion.place}</Place>
      <Time>{props.suggestion.time}</Time>
      <Votes className="votes">
        {/* again referencing our voteFunction since that's how we passed it in App.js */}
        {/* using anonymous function to call the voteFunction so we can pass e */}
        <DownVotes>{props.suggestion.downVotes}</DownVotes>
        <Thumb  
          onClick={(e)=> {props.voteFunction(props.id, 'down')}} 
          role="img"
          aria-label="thumbs down">
          👎
        </Thumb>
        <UpVotes>{props.suggestion.upVotes}</UpVotes>
        <Thumb 
          onClick={(e)=> {props.voteFunction(props.id, 'up')}}
          role="img" 
          aria-label="thumbs up">
          👍
        </Thumb>
      </Votes>
    </Suggestion>
  );
}