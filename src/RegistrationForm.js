import React from 'react';
import styled from 'styled-components';

const Form = styled.section``;
const FormSection = styled.div``;
const FormLabel = styled.label``;
const FormInput = styled.input``;
const FormSubmit = styled.form``;

// dumb anonymous function. gets its name from import
export default (props) => {
  return (
    <Form>
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
  );
}