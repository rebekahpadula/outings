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
const LogOutButton = styled.button``;


// dumb anonymous function. gets its name from import
export default (props) => {
    if(props.authenticated === false) {
        return (
            <Header>
                <HeaderHeading>Sr only page header</HeaderHeading>
                <Branding>
                    <BrandingHeading>Branding heading</BrandingHeading>
                </Branding>
                <Authentication>
                    <AuthenticationHeading>Sr only register or log in heading</AuthenticationHeading>
                    <RegisterButton onClick={(event) => { props.authWithEmailPassword(event) }}><a className="link" href="/login">Register/Log In</a></RegisterButton>
                    <LoginButton onClick={() => { props.authWithFacebook() }}>Log In with Facebook</LoginButton>
                </Authentication>
            </Header>
        )
    } else {
        return (
          <Header>
              <HeaderHeading>Sr only page header</HeaderHeading>
              <Branding>
                  <BrandingHeading>Branding!</BrandingHeading>
              </Branding>
              <Authentication>
                  <AuthenticationHeading>Sr only register or log in</AuthenticationHeading>
                  <LogOutButton onClick={ props.logOut }>Log Out</LogOutButton>
              </Authentication>
          </Header>
        );
    }
}