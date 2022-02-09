import styled from "styled-components";

export const CardMatch = styled.div`
   
   display: flex,
   flex-direction: column;
   width: 20%;
   border: 2px solid gray;
   box-shadow: 1px 1px 10px black;
   margin: 2% auto;
   justify-content: center;
   align-items: center;
   border-radius: 3%;
   color: black;
   padding: 10px 5px;
   background: #ADD8E6;


  img{
    width: 80%;
    height: 30vh;
    box-shadow: 1px 1px 5px black;
    margin-bottom: 10px;
  }
`;

export const BottonsLike = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin: 5% 0;

  img {
    width: 20%;
    height: 20%;
    box-shadow: none;
  }

  img:hover {
    box-shadow: 1px 1px 10px black;
    border-radius: 50%;
  }
`;
export const MatchsList = styled.div`
  display: flex;
  justify-content: space-between;
  box-shadow: 1px 1px 5px black;
  align-items: center;
  font-weight: bold;
  padding: 5px 8px;
  margin: 10px;

  img {
    width: 15%;
    height: 5vh;
    border-radius: 50%;
    box-shadow: none;
  }
`;