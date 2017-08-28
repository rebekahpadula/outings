import React from 'react';
import styled from 'styled-components';

import Suggestion from './Suggestion';

const Suggestions = styled.section``;
const SuggestionsHeading = styled.h1``;

export default (props) => {
    return (
        <Suggestions>
            <SuggestionsHeading>Suggestions</SuggestionsHeading>
            {props.suggestions.map( 
                /* passing in voteFunction that we can access as a prop since we passed it in App.js. We passed it in App.js as voteFunction so here we must continue to call it voteFunction */
                item => <Suggestion key={item.id} id={item.id} suggestion={item} voteFunction={props.voteFunction}/>
            )}
        </Suggestions>
    );
}