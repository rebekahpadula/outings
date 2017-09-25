import React from 'react';
import styled from 'styled-components';

const FormModal = styled.section`
  background-color: rgba(0, 0, 0, 0.5);
  bottom: 0;
  display: ${props => props.suggestionsModalActive ? 'block' : 'none'};
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 10;
`;

const Form = styled.section`
  background-color: #fafafa;
  border-radius: 3px;
  bottom: 0;
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.5);
  left: 0;
  margin: 0 auto;
  max-height: 640px;
  max-width: 350px;
  padding: 40px;
  position: absolute;
  right: 0;
  text-align: center;
  top: ${props => props.suggestionsModalActive ? '12vh' : '100vh'};
  z-index: 11;

  @media screen and (min-width: 500px) {
      max-width: 450px;
  }
`;

const FormHeading = styled.h1`
  font-family: Pacifico;
`;

const FormLabel = styled.label`
  font-size: 18px;
  display: block;
  text-align: left;
  text-transform: uppercase;
  margin-bottom: 5px;
`;

const FormInput = styled.input`
  padding: 12px 20px;
  width: 270px;
  width: 100%;
  border-radius: 3px;
  border: 1px solid #eee;
  font-size: 18px;
`;

const SubmitButton = styled.button`
  border: none;
  background-color: #ff4447;
  color: #fafafa;
  padding: 15px 20px;
  cursor: pointer;
  font-size: 18px;
  border-radius: 3px;
  width: 100%;

  :hover {
      background-color: darken(#ff4447, 10%);
  }
`;

const FormSection = styled.div`
  margin: 20px auto;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  border: none;
  border-radius: 50%;
  font-size: 26px;
  color: #ff4447;
  background-color: transparent;
  cursor: pointer;
  font-weight: 500;
`;


export default (props) => {
  return (
    <FormModal suggestionsModalActive={props.suggestionsModalActive}>
      <Form suggestionsModalActive={props.suggestionsModalActive}>
      <CloseButton onClick={props.closeSuggestionsModal}>X</CloseButton>
      <FormHeading>No snooze-fests allowed</FormHeading>
          <FormSection>
              <FormLabel htmlFor="name">Name</FormLabel>
              <FormInput type="text" id="name" maxlength="25"/>
          </FormSection>
          <FormSection>
              <FormLabel htmlFor="place">Place</FormLabel>
              <FormInput type="text" id="place" maxlength="25"/>
          </FormSection>
          <FormSection>
              <FormLabel htmlFor="date">Date</FormLabel>
              <FormInput type="date" id="date"/>
          </FormSection>
          <FormSection>
              <FormLabel htmlFor="activity">Activity</FormLabel>
              <FormInput type="text" id="activity" maxlength="25"/>
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
             {/* this also needs to close the modal */}
            }
          
            }>Submit</SubmitButton>
      </Form>
    </FormModal>
  );
}