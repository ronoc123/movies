import styled from "styled-components";

const Wrapper = styled.div`
  background: var(--clr-grey);
  border-radius: 0.3rem;
  max-height: 30rem;
  overflow-x: hidden;
  overflow-y: auto;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 2rem;
  padding: 0.5rem;

  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(5, 1fr);
  }
  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.2rem;
  }
  @media screen and (max-width: 400px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.2rem;
  }
`;

export default Wrapper;
