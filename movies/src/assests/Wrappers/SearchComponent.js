import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  background: #2b2d31;
  color: white;
  min-width: 15rem;
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  z-index: 30;

  .person-container {
    padding: 1rem;
    display: grid;
    grid-template-columns: 3rem 1fr;
    align-items: center;
    transition: var(--transition);
    background: none;
    border: none;
    width: 100%;
    cursor: pointer;
    color: white;
    gap: 1rem;
  }
  .icon {
    font-size: 1.5rem;
  }
  .text-container {
    text-align: left;

    text-transform: capitalize;
  }
  .profile-button {
    background: black;
    border: none;
    color: white;
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 0.4rem;
  }
`;

export default Wrapper;
