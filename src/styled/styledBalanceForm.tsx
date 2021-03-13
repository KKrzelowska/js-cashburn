import styled, { keyframes } from 'styled-components';

const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100%;
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
    };
  margin-left: auto;
  margin-top: 3rem; 
  @media(max-width: 768px){
      width: 225px;
      height: 60px;
      font-size: 24px; 
      margin: 3rem auto;
    };
`;

const Label = styled.label`
  color: black;
  font-family: Teko;
  font-size: 60px;
  font-weight: semi-bold;
  text-align: center;
    &.subtitle{
      font-size: 25px;
      font-weight: light;
    };
  @media(max-width: 768px){
    font-size: 20px;
    margin-top: 20px;
    &.subtitle{
      font-size: 16px;
    }
  }
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
  };
  @media(max-width: 768px){
      width: 225px;
      height: 50px;
      font-size: 28px; 
    };
`;

const Img = styled.img`
  width: 165px;
  height: 103px;
  margin-top: 100px;

`;


export { Input, Button, Label, PageBox, Container, Img };
