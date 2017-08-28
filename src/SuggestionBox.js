import React from 'react';
import styled from 'styled-components';

const SuggestionBox = styled.section``
const SuggestionBoxHeading = styled.h1``;
const Form = styled.section``;
const Label = styled.label``;
const Input = styled.input``;
const SubmitButton = styled.button``;
const FormSection = styled.div``;


export default (props) => {
  return (
    <SuggestionBox>
      <SuggestionBoxHeading>Please submit your suggestions here</SuggestionBoxHeading>
      <Form>
          <FormSection>
              <Label htmlFor="name">Name</Label>
              <Input type="text" id="name"/>
          </FormSection>
          <FormSection>
              <Label htmlFor="place">Place</Label>
              <Input type="text" id="place"/>
          </FormSection>
          <FormSection>
              <Label htmlFor="date">Date</Label>
              <Input type="date" id="date"/>
          </FormSection>
          <FormSection>
              <Label htmlFor="activity">Activity</Label>
              <Input type="text" id="activity"/>
          </FormSection>
          <SubmitButton className="button" onClick={
            () => {
             const obj = {
               suggestor: document.getElementById('name').value,
               place: document.getElementById('place').value,
               time: document.getElementById('date').value,
               activity: document.getElementById('activity').value,
               upVotes: 0,
               downVotes: 0
             };
             props.submitFunction(obj);
            }
          
            }>Submit</SubmitButton>
      </Form>
    </SuggestionBox>
  );
}