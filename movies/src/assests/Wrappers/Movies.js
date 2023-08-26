import styled from "styled-components";

const Wrapper = styled.div`
  padding-top: 1rem;
  padding-bottom: 7rem;
  display: grid;
  justify-content: center;
  .content {
    margin-top: 2rem;
    display: grid;
    justify-self: center;
    max-width: 80%;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 3rem;
  }
  @media screen and (max-width: 1100px) {
    .content {
      width: 80%;
      grid-template-columns: 1fr 1fr;
    }
  }
  @media screen and (max-width: 800px) {
    .content {
      width: 70%;
      grid-template-columns: 1fr;
    }
  }
`;

export default Wrapper;
