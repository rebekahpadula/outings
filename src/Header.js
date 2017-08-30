import React from 'react';
import styled from 'styled-components';

const Header = styled.header``;
const HeaderHeading = styled.h1``;
const Branding = styled.section``;
const BrandingHeading = styled.h1``;
const Authentication = styled.section``;
const AuthenticationHeading = styled.h1``;
const RegisterButton = styled.button``;
const LogOutButton = styled.button``;

export default (props) => {
    if(props.authenticated === false) {
        return (
            <Header>
                <HeaderHeading>Header heading</HeaderHeading>
                <Branding>
                    <BrandingHeading>Branding heading</BrandingHeading>
                </Branding>
                <Authentication>
                    <AuthenticationHeading>register or log in heading</AuthenticationHeading>
                    <RegisterButton onClick={props.openModal}>Register/Log In</RegisterButton>
                </Authentication>
            </Header>
        )
    } else {
        return (
          <Header>
              <HeaderHeading>Header heading</HeaderHeading>
              <Branding>
                  <BrandingHeading>Branding heading</BrandingHeading>
              </Branding>
              <Authentication>
                  <AuthenticationHeading>Log out</AuthenticationHeading>
                  <LogOutButton onClick={props.logOut}>Log Out</LogOutButton>
              </Authentication>
          </Header>
        );
    }
}