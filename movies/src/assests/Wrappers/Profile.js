import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  place-items: center;

  .profile-container {
    margin-top: 3rem;
    width: 70%;
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr 4fr 1fr;
  }
`;

export default Wrapper;
