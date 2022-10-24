import styled from "styled-components";

const Wrapper = styled.div`
  background: white;
  color: black;
  border-radius: 1rem;
  padding: 0.5rem;
  position: relative;
  transition: var(--transition);
  cursor: pointer;
  :hover {
  }
  .rating {
    display: grid;
    place-items: center;
    position: absolute;
    top: -1rem;
    right: -1rem;
    font-size: 1rem;
    font-weight: 600;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
  }
  img {
    width: 100%;
  }

  .gold {
    background: #ffd700;
  }

  .silver {
    background: #c0c0c0;
  }
  .single-title {
    text-align: center;
  }
  .type {
    text-transform: capitalize;
  }
  .type-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0.5rem;
  }
  .release {
    justify-self: end;
  }
`;

export default Wrapper;
