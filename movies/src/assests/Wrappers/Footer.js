import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  height: 5rem;
  left: 0;
  bottom: 0;
  width: 100%;
  background: #121212;
  display: grid;
  place-items: center;
  color: white;

  .nav-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 2rem;
    max-width: 30rem;
    place-items: center;
  }

  .link {
    display: grid;
    place-items: center;
    font-size: 1.2rem;
    transition: var(--transition);
    padding: 0.2rem;
  }
  .link:hover {
    border-bottom: 2px solid white;
  }

  .active {
    border-bottom: 2px solid white;
  }

  @media screen and (max-width: 800px) {
    .link {
      font-size: 0.8rem;
    }
  }
`;

export default Wrapper;
