import styled from "styled-components";

const Wrapper = styled.div`
  padding-top: 5rem;
  padding-bottom: 7rem;
  display: grid;
  justify-content: center;
  .search-container {
    justify-self: center;
    display: grid;
    grid-template-columns: 1fr;
    width: 30rem;
    min-width: 20rem;
    height: 2rem;
    margin-top: 1rem;
    /* border: 2px solid white; */
  }
  .content {
    margin-top: 2rem;
    display: grid;
    justify-self: center;
    max-width: 80%;

    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 2rem;
    min-height: 40vh;
  }
  .search-btn {
    background: white;
    display: grid;
    border: none;
    place-items: center;
    cursor: pointer;
  }
  .title {
    margin-top: 5rem;
    text-align: center;
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
