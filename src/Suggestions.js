import React from 'react';

import Suggestion from './Suggestion';

export default (props) => {
    return (
        <section className="Suggestions">
            <h1>Suggestions</h1>
            {props.suggestions.map(
                item => <Suggestion key={item.id} suggestion={item}/>
            )}
        </section>
    );
}