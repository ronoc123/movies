import styled from "styled-components";

const Wrapper = styled.div`
  /* border: 2px solid yellow; */
  height: 5rem;
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  place-items: center;
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
    font-size: 3rem;
    cursor: pointer;
  }
  .active {
    border: 2px solid white;
    border-radius: 1rem;
  }
`;

export default Wrapper;
