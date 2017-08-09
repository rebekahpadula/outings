import React, { Component } from 'react';
import './App.css';

import Suggestions from './Suggestions';
import SuggestionBox from './SuggestionBox';

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
          upVotes: 0,
          downVotes: 0
        },
        {
          id: 2,
          suggestor: 'tony',
          place: 'frankies fun park',
          time: 'never',
          activity: 'putt putt',
          upVotes: 0,
          downVotes: 0
        },
        {
          id: 3,
          suggestor: 'carl',
          place: 'motor speed way',
          time: 'this weekend',
          activity: 'racing',
          upVotes: 0,
          downVotes: 0
        }
      ]
    }
    this.addSuggestion = this.addSuggestion.bind(this);
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

  updateVotes(suggestion) {
    console.log('hey');
    this.setState((prevState, props) => {
      return this.state.suggestion.upVotes + 1;
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Outings</h1>
        <Suggestions suggestions={this.state.suggestions} voteFunction={this.updateVotes}/>
        <SuggestionBox submitFunction={this.addSuggestion}/>
      </div>
    );
  }
}