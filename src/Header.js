import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
    align-items: center;
    display: flex;
    justify-content: center;
`;
const HeaderHeading = styled.h1`
    color: #fff;
    flex-basis: 0;
    flex-grow: 1;
    flex-shrink: 1;
    font-family: Pacifico;
`;
const Authentication = styled.section`
    flex-basis: auto;
    flex-grow: 0;
    flex-shrink: 1;
`;
const AuthenticationHeading = styled.h1`
    height: 1px;
    left: -10000px;
    overflow: hidden;
    position: absolute;
    top: auto;
    width: 1px;
`;
const RegisterButton = styled.button`
    background-color: #ff4447;
    border: none;
    border-radius: 3px;
    color: #fafafa;
    cursor: pointer;
    font-size: 18px;
    padding: 15px 20px;
    width: 100%;

    :hover {
        background-color: #e53d3f;
    }

    :active {
        background-color: #cc3638;
    }
`;
const LogOutButton = styled.button`
    background-color: #ff4447;
    // background-color: #444c5c;
    border: none;
    border-radius: 3px;
    color: #fafafa;
    cursor: pointer;
    font-size: 18px;
    padding: 15px 20px;
    width: 100%;

    :hover {
        background-color: #e53d3f;
    }

    :active {
        background-color: #cc3638;
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