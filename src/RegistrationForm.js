import React from 'react';
import styled from 'styled-components';

// dumb anonymous function. gets its name from import
const FormModal = styled.section`
    background-color: rgba(0, 0, 0, 0.5);
    bottom: 0;
    display: ${props => props.modalActive ? 'block' : 'none'};
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
    max-height: 680px;
    max-width: 350px;
    padding: 40px;
    position: absolute;
    right: 0;
    text-align: center;
    top: ${props => props.modalActive ? '12vh' : '100vh'};
    z-index: 11;

    @media screen and (min-width: 500px) {
        max-width: 450px;
    }
`;

const FormHeading = styled.h1`
    font-family: Pacifico;
`;
const FormSection = styled.div`
    margin: 20px auto;
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
        background-color: #e53d3f;
    }

    :active {
        background-color: #cc3638;
    }
`;
const FbButton = styled.button`
    border: none;
    background-color: #4267b2;
    color: #fafafa;
    padding: 15px 20px;
    cursor: pointer;
    font-size: 18px;
    border-radius: 3px;
    width: 100%;

    :hover {
        background-color: #3b5ca0;
    }

    :active {
        background-color: #34528e;
    }
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

    :hover {
        color: #e53d3f;
    }

    :active {
        color: #cc3638;
    }
`;

const FormInfo = styled.div`
    background-color: #eee;
    border-radius: 3px;
    padding: 20px;
    text-align: left;
`;
const FormInfoHeading = styled.h2`
    text-align: left;
`;
const FormParagraph = styled.p``;

export default (props) => {

  return (
      <FormModal modalActive={props.modalActive}>
        <Form modalActive={props.modalActive}>
            <CloseButton onClick={props.closeModal}>X</CloseButton>
            <FormHeading>Log In</FormHeading>
            <FormSection>
                <FbButton onClick={() => { props.authWithFacebook() }}>Log In with Facebook</FbButton>
            </FormSection>
            <FormSection>
                <FormInfo>
                    <FormInfoHeading>Note:</FormInfoHeading>
                    <FormParagraph>If you don't have an account already, this form will create your account.</FormParagraph>
                </FormInfo>
            </FormSection>
            <FormSection>
                <FormLabel htmlFor="emailAddress">Email</FormLabel>
                <FormInput className="emailInput" type="email" id="emailAddress" ref={(input) => { this.emailInput = input }}/>
            </FormSection>
            <FormSection>
                <FormLabel htmlFor="password">Password</FormLabel>
                <FormInput className="passwordInput" type="password" id="password" ref={(input) => { this.passwordInput = input }}/>
            </FormSection>
            <SubmitButton onClick={props.authWithEmailPassword} onSubmit={(event) => { props.authWithEmailPassword(event) }} ref={(form) => { this.loginForm = form }}>Log In</SubmitButton>
        </Form>
    </FormModal>
  );
}