import React from 'react';
import styled from 'styled-components';

// dumb anonymous function. gets its name from import
const FormModal = styled.section`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 10;
    background-color: ${props => props.modalActive ? 'rgba(0, 0, 0, 0.5)' : 'transparent'};
`;

const Form = styled.section`
    padding: 20px;
    position: absolute;
    top: ${props => props.modalActive ? '30vh' : '100vh'};
    left: 0;
    bottom: 0;
    right: 0;
    color: ${props => props.modalActive ? 'blue' : 'red'};
    z-index: 11;
`;

const FormHeading = styled.h1``;
const FormSection = styled.div``;
const FormLabel = styled.label``;
const FormInput = styled.input``;
const FormSubmit = styled.form`
    cursor: pointer;
`;
const FbButton = styled.button``;
const FormInfo = styled.div``;
const FormInfoHeading = styled.h2``;
const FormParagraph = styled.p``;

export default (props) => {

  return (
      <FormModal modalActive={props.modalActive}>
        <Form modalActive={props.modalActive}>
            <FormHeading>Sign In or Sign Up</FormHeading>
            <FormSection>
                <FbButton onClick={() => { props.authWithFacebook() }}>Log In with Facebook</FbButton>
            </FormSection>
            <FormSection>
                <FormInfo>
                    <FormInfoHeading>Note</FormInfoHeading>
                    <FormParagraph>If you don't have an account already, this form will create your account.</FormParagraph>
                </FormInfo>
            </FormSection>
            <FormSection>
                <FormLabel htmlFor="emailAddress">Email</FormLabel>
                <FormInput type="email" id="emailAddress" ref={(input) => { this.emailInput = input }} placeholder="Email"/>
            </FormSection>
            <FormSection>
                <FormLabel htmlFor="password">Password</FormLabel>
                <FormInput type="password" id="password" ref={(input) => { this.passwordInput = input }} placeholder="Password"/>
            </FormSection>
            <FormSubmit onSubmit={(event) => { props.authWithEmailPassword(event) }} ref={(form) => { this.loginForm = form }} ></FormSubmit>
        </Form>
    </FormModal>
  );
}