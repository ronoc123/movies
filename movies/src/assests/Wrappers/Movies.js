import styled from "styled-components";

const Wrapper = styled.div`
  padding-top: 4rem;
  padding-bottom: 7rem;
  display: grid;
  justify-content: center;
  /* background: var(--backgroundColor); */
  .content {
    margin-top: 2rem;
    display: grid;
    justify-self: center;
    width: 80%;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;
  }
  @media screen and (max-width: 1100px) {
    .content {
      width: 80%;
      grid-template-columns: 1fr 1fr;
    }
  }
  @media screen and (max-width: 800px) {
    .content {
      width: 50%;
      grid-template-columns: 1fr;
    }
  }
`;

export default Wrapper;
