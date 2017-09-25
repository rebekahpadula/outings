import React from 'react';
import styled from 'styled-components';


const Suggestion = styled.section`
  background-color: #fafafa;
  border-radius: 5px;
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.5);  
  flex-basis: 100%;
  margin-bottom: 40px;
  max-width: 400px;
  padding: 20px;
  // transition: transform 0.05s;

  @media screen and (min-width: 700px) {
    flex-basis: calc(50% - 40px);

    :not(:last-child) {
      margin-right: 40px;
    }
  }

  :hover {
    transform: scale(1.01);
    cursor: pointer;
  }
`;

const Votes = styled.div``;

const Thumb = styled.span`
  cursor: pointer;
  display: inline-block;
  margin: 10px;
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
      <p><b>{props.suggestion.suggestor}</b> wants to <b>{props.suggestion.activity}</b> at <b>{props.suggestion.place}</b> on <b>{props.suggestion.time}</b></p>
      {/* accessing suggestions array */}
      <Suggestor>Suggestor: {props.suggestion.suggestor}</Suggestor>
      <Activity>Activity: {props.suggestion.activity}</Activity>
      <Place>Place: {props.suggestion.place}</Place>
      <Time>Date: {props.suggestion.time}</Time>
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