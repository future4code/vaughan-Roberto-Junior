import styled from "styled-components";

export const DivPostPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40%;
    padding: 2% 0;
    box-shadow: 2px 2px 10px black;
    background-color: rgb(122, 117, 166);


    .input-group-text{
      width: 31%;
      font-size: 1em;
    }

    form{
      width: 80%;
    }

    form > button{
        width: 100%;
    }

`

export const DivFooterPost = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3%;
  height: 2vh;

  p{
    margin-top: auto;
  }

  div{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  i:hover {
        cursor: pointer;
      }
`

export const FeedDetail = styled.div`
  margin: 2% 0;
`