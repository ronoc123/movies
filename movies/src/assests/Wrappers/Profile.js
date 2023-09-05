import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  .user-container {
  }
  .profile-container {
    margin-top: 3rem;
    width: 65%;
    display: grid;
    gap: 1rem;
    /* grid-template-columns: 1fr 4fr 1fr; */
  }

  @media screen and (max-width: 900px) {
    .profile-container {
      width: 95%;
    }
  }
`;

export default Wrapper;
