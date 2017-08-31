import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
`;
const HeaderHeading = styled.h1`
    font-family: Pacifico;
    flex-basis: 0;
    flex-grow: 1;
    flex-shrink: 1;
    color: #fff;
`;
const Authentication = styled.section`
    flex-basis: auto;
    flex-grow: 0;
    flex-shrink: 1;
`;
const AuthenticationHeading = styled.h1`
    position: absolute;
    left: -10000px;
    top: auto;
    width: 1px;
    height: 1px;
    overflow: hidden;
`;
const RegisterButton = styled.button`
    border: none;
    background-color: #ff4447;
    color: #fafafa;
    padding: 15px 20px;
    cursor: pointer;
    font-size: 18px;
    border-radius: 3px;
    width: 100%;

    &::hover {
        background-color: darken(#ff4447, 10%);
    }
`;
const LogOutButton = styled.button`
    border: none;
    background-color: #ff4447;
    color: #fafafa;
    padding: 15px 20px;
    cursor: pointer;
    font-size: 18px;
    border-radius: 3px;
    width: 100%;

    &::hover {
        background-color: darken(#ff4447, 10%);
    }
`;

export default (props) => {
    if(props.authenticated === false) {
        return (
            <Header>
                <HeaderHeading>Outings</HeaderHeading>
                <Authentication>
                    <AuthenticationHeading>Register or Log In</AuthenticationHeading>
                    <RegisterButton onClick={props.openModal}>Register/Log In</RegisterButton>
                </Authentication>
            </Header>
        )
    } else {
        return (
          <Header>
              <HeaderHeading>Outings</HeaderHeading>
              <Authentication>
                  <AuthenticationHeading>Log out</AuthenticationHeading>
                  <LogOutButton onClick={props.logOut}>Log Out</LogOutButton>
              </Authentication>
          </Header>
        );
    }
}