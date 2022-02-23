
import styled from "styled-components";

export const DivLoginPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

export const DivLogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20%;
  background-color: #dcdcdc;
  box-shadow: 1px 1px 20px cyan;

  input {
    margin: 5% 0;
  }

  h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    img {
      width: 10%;
      height: 20%;
      margin: 0 3%;
    }
  }

  @media (max-width: 600px) {
    width: 80%;
  }
`;

export const ButtonLogin = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  margin: 5% 0;
`;