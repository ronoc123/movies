import styled from "styled-components";

const Wrapper = styled.div`
  /* border: 2px solid yellow; */
  /* padding: 1rem; */
  height: 5rem;
  /* width: 80%; */
  margin-top: 2rem;
  display: grid;

  grid-template-columns: repeat(12, 1fr);
  place-items: center;
  /* width: 80%; */

  justify-self: center;
  .single {
    font-size: 1.5rem;
    padding: 1rem;
    display: grid;
    min-width: 4rem;
    place-items: center;
    cursor: pointer;
  }
  .arrow {
    padding-top: 0.5rem;
    font-size: 2rem;
    cursor: pointer;
  }
  .active {
    border-bottom: 2px solid white;
    /* border-radius: 1rem; */
  }

  @media screen and (max-width: 1100px) {
    /* width: 100%; */

    .single {
      padding: 0.5rem;
      font-size: 1rem;
      min-width: 2rem;
    }
  }
  @media screen and (max-width: 800px) {
    .single {
      min-width: 1rem;
      padding: 0.5rem;
    }
    .arrow {
      padding-top: 0.5rem;
      font-size: 1.2rem;
      cursor: pointer;
    }
  }
`;

export default Wrapper;
