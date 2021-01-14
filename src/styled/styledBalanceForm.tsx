import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import {} from '../styled/styledBalanceForm';

const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;

const PageBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const scaled = keyframes`
  0% {
    transform: scale(1);
  }
  
  50% {
    transform: scale(.9);
  }
  
  100% {
    transform: scale(1);
  }
`;

const Button = styled.button`
  background: linear-gradient(135deg, #fa875a 0%, #fa875a 100%);
  box-shadow: 0 10px 20px -5px rgba(196, 53, 56, 0.5);
  height: 4rem;
  width: 15rem;
  color: #f8f8f8;
  padding: 10px 30px 10px 30px;
  font-family: 'Teko', sans-serif;
  font-size: 1.8rem;
  border-radius: 1px;
  border-width: 0;
  cursor: pointer;
  &:focus {
    animation: 0.75s ${scaled} cubic-bezier(0.77, 0, 0.175, 1) forwards;
    outline: none;
  }
  margin-left: auto;
  margin-top: 3rem;
`;

const Label = styled.label`
  color: #524e4d;
  font-family: Teko;
  font-size: 60px;
  font-weight: 400;
  text-align: center;
`;

const Input = styled.input`
  -webkit-appearance: none;
  border-radius: 0;
  border: 1px solid #e0e2e5;
  -webkit-box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.1);
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.1);
  color: #524e4d;
  font-family: Teko;
  font-size: 29px;
  padding-left: 20px;
  height: 3rem;
  width: 30rem;
  margin-top: 4rem;
  &:focus {
    border: 1px solid #524e4d;
    outline: none;
  }
`;

export { Input, Button, Label, PageBox, Container };
