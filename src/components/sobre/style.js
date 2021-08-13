import styled from "styled-components";

export const ConteinerSobre = styled.section`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background:  #272F2F;
`;

export const TitleSobre = styled.div`

max-width: 600px;
padding: 10px 10px;


  h1 {
    color: black;
    font-size: 3rem;
  }

  p {
    color:  #E5E5E5;
    font-size: 1.30rem;
    background: #272F2F;
  }

  span {
    color: #D8CDA1;
    background: #272F2F;
  }

  button {
    background: #D8CDA1;
    border-radius: 10px;
    width: 200px;
    height: 50px;
    border: none;
    font-size: 1.3rem;
    font-weight: bold;
    cursor: pointer;
  }
`;

export const PhotoSobre = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;

    img {
  max-width: 400px;
  max-height: 400px;
}
`;
