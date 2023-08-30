import styled from "styled-components";

const Wrapper = styled.div`
  /* background: white; */
  background: #2b2d31;
  color: white;
  border-radius: 1rem;
  padding: 0.5rem;
  position: relative;
  transition: var(--transition);

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
    cursor: pointer;
  }

  .gold {
    background: #ffd700;
    color: black;
  }

  .silver {
    background: #c0c0c0;
    color: black;
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
  .add-icon {
    position: absolute;
    top: -1rem;
    left: -1rem;
    font-size: 2rem;
    color: black;
    height: 42px;
    width: 42px;
    background: white;
    border-radius: 50%;
    display: grid;
    place-items: center;
    cursor: pointer;
  }
  .add-icon:hover {
    background: #ffd700;
    color: black;
    animation: spinBack 0.2s linear forwards;
  }

  .spin-back-animation {
    animation: spinBack 0.2s linear forwards;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(45deg);
    }
  }

  @keyframes spinBack {
    0% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`;

export default Wrapper;
