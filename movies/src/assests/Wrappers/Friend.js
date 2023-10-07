import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  border-bottom: 1px solid darkgrey;
  padding: 1rem;
  margin: 0.5rem;
  .border-container {
    display: grid;
    grid-template-columns: 1fr 3rem;
    place-items: center;
    width: 100%;
  }

  .name {
    text-align: center;
    width: 100%;
  }

  .profile-icon {
    display: grid;
    place-items: center;
    width: 2rem;
    font-size: 1.5rem;
    cursor: pointer;
  }

  .message {
    display: grid;
    place-items: center;
    width: 2rem;
    font-size: 1.5rem;
    cursor: pointer;
  }
`;

export default Wrapper;
