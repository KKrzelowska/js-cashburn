import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

const Button = styled.button`
  display: inline-block;
  background: papayawhip;
  padding: 0.5em;
  margin: 0.5em;
  border: none;
  color: palevioletred;
  font-weight: bold;
`;

const Label = styled.label`
  color: palevioletred;
  font-weight: bold;
`;

const Input = styled.input`
  color: palevioletred;
  font-weight: bold;
  padding: 0.5em;
  margin: 0.5em;
  background: papayawhip;
`;
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;

export { Input, Button, Rotate, Label };
