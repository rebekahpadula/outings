import React, { Component } from 'react';
import './App.css';
import { base } from './base';

import Suggestions from './Suggestions';
import SuggestionBox from './SuggestionBox';
import Header from './Header';
import styled from 'styled-components';

const Outings = styled.div`
  text-align: center;
`;
const OutingsHeading = styled.h1``;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      suggestions: [
        {
          id: 1,
          suggestor: 'kyle',
          place: 'motor supply company',
          time: 'tomorrow',
          activity: 'eating',
          upVotes: 1,
          downVotes: 2
        },
        {
          id: 2,
          suggestor: 'tony',
          place: 'frankies fun park',
          time: 'never',
          activity: 'putt putt',
          upVotes: 3,
          downVotes: 0
        },
        {
          id: 3,
          suggestor: 'carl',
          place: 'motor speed way',
          time: 'this weekend',
          activity: 'racing',
          upVotes: 4,
          downVotes: 0
        }
      ],
      authenticated: false
    }
    this.addSuggestion = this.addSuggestion.bind(this);
    this.updateVotes = this.updateVotes.bind(this);
  };

  addSuggestion(suggestion) {
    // gives the new "suggestion" a unique id
    suggestion.id = this.state.suggestions.length + 1;
    this.setState((prevState, props) => {
      return {
        // returns a new array with the old suggestions and the new one
        suggestions: [...this.state.suggestions, suggestion]
      }
    });
  }
// passing id of the object and type which is the string you pass in your onClick function for the thumbs
  updateVotes(id, type) {
    console.log(id, type);
    // setState always sends the previous state to the first param in the function you provide
    this.setState((prevState) => {
      const newSuggestions = prevState.suggestions;
      let index = -1;
      // len = suggestions.length caches the length so the for loop doesn't have to look it up on every iteration. Loop looks for id equal to the id you passed in
      for(let i = 0, len = newSuggestions.length; i < len; i++) {
        if(newSuggestions[i].id === id) {
          index = i;
        }
      }
      if(type === 'up') {
        newSuggestions[index].upVotes++;
      } else if(type === 'down') {
        newSuggestions[index].downVotes++;
      }
      return {
        suggestions: newSuggestions
      };
    });
  }

  componentWillMount() {
    this.suggestionsRef = base.syncState('suggestions', {
      context: this,
      state: 'suggestions'
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.suggestionsRef);
  }

  render() {
    return (
      <Outings>
        <OutingsHeading>Outings</OutingsHeading>
        <Header authenticated={this.state.authenticated}/>
        {/* passing the suggestions array and the updateVotes function to my Suggestions component */}
        <Suggestions suggestions={this.state.suggestions} voteFunction={this.updateVotes}/>
        <SuggestionBox submitFunction={this.addSuggestion}/>
      </Outings>
    );
  }
}