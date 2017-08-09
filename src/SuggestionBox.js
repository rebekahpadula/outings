import React from 'react';

export default (props) => {
  return (
    <section className="suggestion-box">
      <h1>Please submit your suggestions here</h1>
      <section className="form">
          <div>
              <label className="label" htmlFor="name">Name</label>
              <input className="input" type="text" id="name"/>
          </div>
          <div>
              <label className="label" htmlFor="place">Place</label>
              <input className="input" type="text" id="place"/>
          </div>
          <div>
              <label className="label" htmlFor="date">Date</label>
              <input className="input" type="date" id="date"/>
          </div>
          <div>
              <label className="label" htmlFor="activity">Activity</label>
              <input className="input" type="text" id="activity"/>
          </div>
          <button className="button" onClick={
            () => {
             const obj = {
               suggestor: document.getElementById('name').value,
               place: document.getElementById('place').value,
               time: document.getElementById('date').value,
               activity: document.getElementById('activity').value 
             };
             props.submitFunction(obj);
            }
          
            }>Submit</button>
      </section>
    </section>
  );
}