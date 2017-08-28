import React from 'react';
import styled from 'styled-components';

const Header = styled.header``;
const HeaderHeading = styled.h1``;
const Branding = styled.section``;
const BrandingHeading = styled.h1``;
const Authentication = styled.section``;
const AuthenticationHeading = styled.h1``;
const RegisterButton = styled.button``;
const LoginButton = styled.button``;


// dumb anonymous function. gets its name from import
export default (props) => {
  return (
    <Header>
        <HeaderHeading>Sr only page header</HeaderHeading>
        <Branding>
            <BrandingHeading>Branding!</BrandingHeading>
        </Branding>
        <Authentication>
            <AuthenticationHeading>Sr only register or log in</AuthenticationHeading>
            <RegisterButton><a className="link" href="/login">Register/Log In</a></RegisterButton>
            <LoginButton onClick={() => { this.authWithFacebook() }}>Log In with Facebook</LoginButton>
        </Authentication>
    </Header>
  );
}