import React, { Component } from 'react';
import './App.css';
import { base } from './base';
import { app, facebookProvider } from './base';

import Suggestions from './Suggestions';
import SuggestionBox from './SuggestionBox';
import Header from './Header';
import RegistrationForm from './RegistrationForm';
import styled from 'styled-components';

const Loading = styled.section`
  text-align: center;
`;
const LoadingHeading = styled.h1``;
const LoadingAnimation = styled.div`
  height: 50px;
  width: 50px;
  border: 3px solid #333;
  border-radius: 50%;
  margin: auto;
  border-right-color: #eee;
  border-bottom-color: #eee;
  animation: load 3s infinite linear;

  @keyframes load {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

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
      authenticated: false,
      loading: true,
      modalActive: true
    }
    this.addSuggestion = this.addSuggestion.bind(this);
    this.updateVotes = this.updateVotes.bind(this);
    this.authWithFacebook = this.authWithFacebook.bind(this);
    this.authWithEmailPassword = this.authWithEmailPassword.bind(this);
    this.logOut = this.logOut.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  };
  
  addSuggestion(suggestion) {
    // gives the new "suggestion" a unique id
    suggestion.id = this.state.suggestions.length + 1;
    // my attempt at updating the entire state
    // this.setState(prevState => Object.assign({}, prevState, [...this.state.suggestions, suggestion]));
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
  
  authWithFacebook() {
    app.auth().signInWithPopup(facebookProvider)
    .then((result, error) => {
      if(error) {
        alert("Unable to sign in with Facebook.");
      } else {
        // changes modalActive to false so that when you log out, the modal is not active
        this.setState(prevState => Object.assign({}, prevState, {redirect: true, modalActive: false}));
      }
    }) 
  }
  
  authWithEmailPassword(event) {
    event.preventDefault();
    console.log("authed with email and password");
  }
  
  // is this actually logging you out? I don't think so...?
  logOut() {
    app.auth().signOut().then((user) => {
      this.setState(prevState => Object.assign({}, prevState, {authenticated: false}));
    })
  }
  
  openModal() {
    // setState is a function that takes the previous state as its arg, then you use Object.assign to copy that prevState and any new state (in this case modalActive) to the new state object
    this.setState(prevState => Object.assign({}, prevState, {modalActive: true}));
  }

  closeModal() {
    console.log("close modal");
    this.setState(prevState => Object.assign({}, prevState, {modalActive: false}));
  }

  componentWillMount() {
    this.removeAuthListener = app.auth().onAuthStateChanged((user) => {
      if(user) {
        this.setState(prevState => Object.assign({}, prevState, {authenticated: true, loading: false}));
      } else {
        this.setState(prevState => Object.assign({}, prevState, {authenticated: false, loading: false}));
      }
    })
    // keep state same as data in firebase
    this.suggestionsRef = base.syncState('suggestions', {
      context: this,
      state: 'suggestions'
    });
  }

  componentWillUnmount() {
    this.removeAuthListener();
    base.removeBinding(this.suggestionsRef);
  }

  render() {
    if(this.state.loading === true) {
      return (
        <Loading>
          <LoadingHeading>Loading...</LoadingHeading>
          <LoadingAnimation></LoadingAnimation>
        </Loading>
      )
    } else if(this.state.authenticated === false) {
        return (
          <Outings>
            <OutingsHeading>Outings</OutingsHeading>  
            <Header authenticated={this.state.authenticated} authWithFacebook={this.authWithFacebook} authWithEmailPassword={this.authWithEmailPassword} logOut={this.logOut} modalActive={this.state.modalActive} openModal={this.openModal}/>
            <RegistrationForm authWithFacebook={this.authWithFacebook} modalActive={this.state.modalActive} closeModal={this.closeModal}/>
          </Outings>
        );
      } else {
        return (
          <Outings>
            <OutingsHeading>Outings</OutingsHeading>
            <Header authenticated={this.state.authenticated} authWithFacebook={this.authWithFacebook} authWithEmailPassword={this.authWithEmailPassword} logOut={this.logOut}/>
            {/* <RegistrationForm/> */}
            {/* passing the suggestions array and the updateVotes function to my Suggestions component */}
            <Suggestions suggestions={this.state.suggestions} voteFunction={this.updateVotes} />
            <SuggestionBox submitFunction={this.addSuggestion}/>
          </Outings>
        );
      }
    }
}